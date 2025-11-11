// utils.js
export function logMessage(msg) {
  console.log(`[LOG] ${msg}`);
}

export function getCurrentTime() {
  return new Date().toLocaleString("ko-KR");
}
