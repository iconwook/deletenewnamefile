// fileio.js
import fs from "fs";

export function writeToFile(filename, content) {
  fs.writeFileSync(filename, content, "utf8");
  console.log(`✅ 파일 저장됨: ${filename}`);
}

export function readFromFile(filename) {
  if (!fs.existsSync(filename)) {
    console.log(`⚠️ 파일이 없습니다: ${filename}`);
    return "";
  }
  return fs.readFileSync(filename, "utf8");
}
