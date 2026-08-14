const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'src', 'lib', 'data', 'names.json');

if (!fs.existsSync(dbPath)) {
  console.error(`Error: File not found at ${dbPath}`);
  process.exit(1);
}

console.log("Auditing NameVerse database...");
const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

const total = data.length;
let female = 0;
let male = 0;
let unisex = 0;
let muslim = 0;

const letters = {};
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(l => letters[l] = 0);

const issues = [];

data.forEach((item, index) => {
  if (!item.name || !item.slug || !item.meaning || !item.origin || !item.gender) {
    issues.push(`Record #${index} (${item.name || 'unnamed'}) is missing required fields.`);
  }

  if (item.gender === 'Female') female++;
  else if (item.gender === 'Male') male++;
  else unisex++;

  if (item.religion && item.religion.includes('Muslim')) muslim++;

  const firstChar = (item.name[0] || '').toUpperCase();
  if (letters[firstChar] !== undefined) {
    letters[firstChar]++;
  }
});

console.log("\n=========================================");
console.log(`TOTAL RECORDS: ${total.toLocaleString()}`);
console.log(`FEMALE NAMES: ${female.toLocaleString()} (${((female / total) * 100).toFixed(1)}%)`);
console.log(`MALE NAMES: ${male.toLocaleString()} (${((male / total) * 100).toFixed(1)}%)`);
console.log(`UNISEX NAMES: ${unisex.toLocaleString()} (${((unisex / total) * 100).toFixed(1)}%)`);
console.log(`MUSLIM TRADITION NAMES: ${muslim.toLocaleString()} (${((muslim / total) * 100).toFixed(1)}%)`);
console.log("=========================================\n");

console.log("LETTER BREAKDOWN (A-Z):");
Object.keys(letters).sort().forEach(l => {
  console.log(`  ${l}: ${letters[l].toLocaleString()} names`);
});

if (issues.length > 0) {
  console.error(`\nFound ${issues.length} data quality issues!`);
  issues.slice(0, 10).forEach(i => console.error(`  - ${i}`));
  process.exit(1);
} else {
  console.log("\n✅ Database validation passed cleanly with 0 issues.");
}
