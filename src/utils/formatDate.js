export function formatTimestamp(timestamp) {
  if (!timestamp) return " ";

  const date = new Date(timestamp);

  const chinaYear = date.getFullYear();
  const chinaMonth = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，需要加1
  const chinaDay = String(date.getDate()).padStart(2, "0");
  const chinaHour = String(date.getHours()).padStart(2, "0");
  const chinaMinute = String(date.getMinutes()).padStart(2, "0");
  const chinaSecond = String(date.getSeconds()).padStart(2, "0");

  return `${chinaYear}.${chinaMonth}.${chinaDay} ${chinaHour}:${chinaMinute}:${chinaSecond}`;
}

export function formatTimestampSimple(timestamp) {
  if (!timestamp) return " ";

  const date = new Date(timestamp);

  const chinaYear = date.getFullYear();
  const chinaMonth = String(date.getMonth() + 1).padStart(2, "0");
  const chinaDay = String(date.getDate()).padStart(2, "0");

  return `${chinaYear}.${chinaMonth}.${chinaDay}`;
}
