const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'src', 'lib', 'data', 'names.json');

console.log("Auditing NameMeaning.fun master database...");

if (!fs.existsSync(dbPath)) {
  console.error("CRITICAL ERROR: names.json file does not exist at:", dbPath);
  process.exit(1);
}

const raw = fs.readFileSync(dbPath, 'utf-8');
const data = JSON.parse(raw);

console.log(`\n=========================================`);
console.log(`TOTAL RECORDS: ${data.length.toLocaleString()}`);

let femaleCount = 0;
let maleCount = 0;
let unisexCount = 0;
let unknownGenderCount = 0;
let invalidGenderValues = 0;

const slugSet = new Set();
let duplicateSlugs = 0;
let missingMeanings = 0;
let missingOrigins = 0;

const letterCounts = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').forEach(l => letterCounts[l] = 0);

for (const item of data) {
  // Check duplicate slugs
  if (slugSet.has(item.slug)) {
    duplicateSlugs++;
  } else {
    slugSet.add(item.slug);
  }

  // Check gender
  if (item.gender === 'Female') femaleCount++;
  else if (item.gender === 'Male') maleCount++;
  else if (item.gender === 'Unisex') unisexCount++;
  else if (item.gender === 'Unknown') unknownGenderCount++;
  else invalidGenderValues++;

  // Check missing fields
  if (!item.meaning || item.meaning.trim() === '') missingMeanings++;
  if (!item.origin || item.origin.trim() === '') missingOrigins++;

  // Letter count
  const firstChar = (item.name || '').charAt(0).toUpperCase();
  if (letterCounts[firstChar] !== undefined) {
    letterCounts[firstChar]++;
  }
}

console.log(`FEMALE NAMES: ${femaleCount.toLocaleString()} (${((femaleCount / data.length) * 100).toFixed(1)}%)`);
console.log(`MALE NAMES: ${maleCount.toLocaleString()} (${((maleCount / data.length) * 100).toFixed(1)}%)`);
console.log(`UNISEX NAMES: ${unisexCount.toLocaleString()} (${((unisexCount / data.length) * 100).toFixed(1)}%)`);
if (unknownGenderCount > 0) console.log(`UNKNOWN GENDERS: ${unknownGenderCount.toLocaleString()}`);
if (invalidGenderValues > 0) console.log(`INVALID GENDER VALUES: ${invalidGenderValues.toLocaleString()}`);
console.log(`=========================================\n`);

console.log(`QUALITY INTEGRITY CHECK:`);
console.log(`  Duplicate Slugs: ${duplicateSlugs}`);
console.log(`  Missing Meanings: ${missingMeanings}`);
console.log(`  Missing Origins: ${missingOrigins}`);

console.log(`\nLETTER BREAKDOWN (A-Z):`);
for (const [letter, count] of Object.entries(letterCounts)) {
  console.log(`  ${letter}: ${count.toLocaleString()} names`);
}

if (invalidGenderValues > 0 || missingMeanings > 0) {
  console.error("\n⚠️ Validation found data quality issues that need normalization.");
  process.exit(1);
} else {
  console.log("\n✅ Database audit passed cleanly with 100% gender metadata integrity.");
}
