// Static export has one root layout, so every page is emitted with <html lang="en">.
// After build, rewrite the lang attribute of /es/ and /nl/ pages to match their language.
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = "out";
const LANGS = ["es", "nl"];

function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

let changed = 0;
for (const lang of LANGS) {
  const dir = path.join(OUT_DIR, lang);
  if (!fs.existsSync(dir)) continue;
  for (const file of htmlFiles(dir)) {
    const html = fs.readFileSync(file, "utf8");
    const next = html.replace(/<html lang="en"/, `<html lang="${lang}"`);
    if (next === html) continue;
    fs.writeFileSync(file, next);
    changed += 1;
  }
}
console.log(`set-html-lang: updated ${changed} files`);
