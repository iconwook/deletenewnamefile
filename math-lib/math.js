// math.js
export function add(a, b) {
  console.log(`Result is: ${a + b}`); // 출력 형식 변경
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return b !== 0 ? a / b : 0;
}
