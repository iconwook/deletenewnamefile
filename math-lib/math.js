// math.js
export function add(a, b) {
  console.log("Feature branch version");
  return a + b + 10; // 로직 변경
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
