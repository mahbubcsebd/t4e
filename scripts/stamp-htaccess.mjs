// Stamps a unique build id into out/.htaccess so every deploy invalidates
// returning visitors' browser caches (see "Deploy cache-buster" in public/.htaccess).
import { readFile, writeFile } from "node:fs/promises";

const HTACCESS_PATH = new URL("../out/.htaccess", import.meta.url);
const PLACEHOLDER = "__BUILD_ID__";

try {
  const source = await readFile(HTACCESS_PATH, "utf8");
  if (!source.includes(PLACEHOLDER)) {
    throw new Error(`${PLACEHOLDER} not found in out/.htaccess`);
  }
  const buildId = Date.now().toString(36);
  await writeFile(HTACCESS_PATH, source.replaceAll(PLACEHOLDER, buildId));
  console.log(`[stamp-htaccess] build id ${buildId}`);
} catch (error) {
  console.error(`[stamp-htaccess] failed: ${error.message}`);
  process.exit(1);
}
