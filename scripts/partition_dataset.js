const fs = require('fs');
const path = require('path');

console.log("Partitioning 104,479 dataset into ultra-fast serverless chunks...");

const dbPath = path.join(__dirname, '..', 'src', 'lib', 'data', 'names.json');
if (!fs.existsSync(dbPath)) {
  console.error("names.json missing at:", dbPath);
  process.exit(1);
}

const raw = fs.readFileSync(dbPath, 'utf-8');
const allNames = JSON.parse(raw);

console.log(`Total master names to partition: ${allNames.length.toLocaleString()}`);

// 1. Create Directories
const publicDataDir = path.join(__dirname, '..', 'public', 'data');
const byLetterDir = path.join(publicDataDir, 'by-letter');
if (!fs.existsSync(publicDataDir)) fs.mkdirSync(publicDataDir, { recursive: true });
if (!fs.existsSync(byLetterDir)) fs.mkdirSync(byLetterDir, { recursive: true });

// 2. Build Letter Partitions
const letterMap = {};
"abcdefghijklmnopqrstuvwxyz".split('').forEach(l => letterMap[l] = []);

const popularSet = [];
const popularSlugs = new Set();

for (let i = 0; i < allNames.length; i++) {
  const item = allNames[i];
  if (!item || !item.name) continue;

  const firstChar = item.name.charAt(0).toLowerCase();
  if (letterMap[firstChar]) {
    letterMap[firstChar].push(item);
  } else {
    if (!letterMap['other']) letterMap['other'] = [];
    letterMap['other'].push(item);
  }

  // Pick popular representative mix for default loads (~2,500 names)
  if (popularSet.length < 2500) {
    if (i % 40 === 0 || item.source || item.slug === 'aisha' || item.slug === 'muhammad' || item.slug === 'aarav' || item.slug === 'fatima' || item.slug === 'rahul-kumar') {
      if (!popularSlugs.has(item.slug)) {
        popularSet.push(item);
        popularSlugs.add(item.slug);
      }
    }
  }
}

// Write letter files
let writtenLetters = 0;
for (const [letter, items] of Object.entries(letterMap)) {
  const filePath = path.join(byLetterDir, `${letter}.json`);
  fs.writeFileSync(filePath, JSON.stringify(items), 'utf-8');
  writtenLetters++;
}

// Write popular.json fallback
const popularPath = path.join(publicDataDir, 'popular.json');
fs.writeFileSync(popularPath, JSON.stringify(popularSet), 'utf-8');

const srcPopularPath = path.join(__dirname, '..', 'src', 'lib', 'data', 'popular.json');
fs.writeFileSync(srcPopularPath, JSON.stringify(popularSet), 'utf-8');

console.log(`\n=========================================`);
console.log(`Dataset Partitioning Complete:`);
console.log(`  Partitioned Letter Files: ${writtenLetters} files in public/data/by-letter/`);
console.log(`  Popular Dataset Fallback: ${popularSet.length.toLocaleString()} names in popular.json`);
console.log(`=========================================\n`);
