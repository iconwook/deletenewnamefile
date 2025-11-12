// main.js
import { add } from "../math-lib/math.js";
import { concat } from "../string-lib/string.js";
import { logMessage, getCurrentTime } from "../utils/utils.js";

function main() {
  logMessage("프로그램 시작");

  const result = add(5, 3);
  const message = concat("결과: ", result.toString());

  console.log(message);
  console.log("현재 시간:", getCurrentTime());

  console.log("프로그램시간 입니다. 호호호");
  logMessage("프로그램 종료");
  console.log("Hello, GitPractice_JS updated!");
  console.log("세상에 이런일이");
  console.log("Branch test update!");

}

main();