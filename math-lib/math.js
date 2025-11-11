// math.js
export function add(a, b) {
<<<<<<< HEAD
  console.log(`Result is: ${a + b}`); // 출력 형식 변경
=======
  console.log("Feature branch version");
  return a + b + 10; // 로직 변경
>>>>>>> feature/conflict
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
