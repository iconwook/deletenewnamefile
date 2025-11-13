// math.js
export function add(a, b) {
  console.log(`Result is: ${a + b}`); // 출력 형식 변경
  console.log("Feature branch version");
  return a + b + 10; // 로직 변경
}

export function subtract(a, b) {
  console.log("Feature branch subtract 맑음");
  return a - b - 100;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return b !== 0 ? a / b : 0;
}

export function abcmart(a, b) {
  console.log("Feature branch abcmart에서 맑은 하늘 오리가게");
  return a + b - 100;
}

export function divide(a, b) {
  if (b === 0) throw new Error("0으로 나눌 수 없습니다!");
  return a / b;
}

// // 새 코드 추가
// export function divide(a, b) {
//   return a / b;
// }