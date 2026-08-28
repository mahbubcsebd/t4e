const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  const sectionRegex = /<section\s+className=["']([^"']+)["']/g;

  content = content.replace(sectionRegex, (match, className) => {
    const isHero = path.basename(filePath).toLowerCase().includes('hero');
    let newClassName = className;

    const removeRegex = /\b(sm:|md:|lg:|xl:)?(p[y|t|b]|m[y|t|b])-\d+\b/g;
    newClassName = newClassName.replace(removeRegex, '').replace(/\s+/g, ' ').trim();

    if (isHero) {
      newClassName = `pt-8 lg:pt-12 pb-4 lg:pb-8 ${newClassName}`;
    } else {
      newClassName = `py-4 md:py-6 lg:py-8 ${newClassName}`;
    }

    modified = true;
    return `<section className="${newClassName}"`;
  });

  if (modified && content !== fs.readFileSync(filePath, 'utf8')) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverse('d:\\MoadBus\\think4ever-new\\components\\sections');
console.log('Finished updating spacing.');
