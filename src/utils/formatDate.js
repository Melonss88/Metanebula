export function formatTimestamp(timestamp) {
  if (!timestamp) return " ";
  // 解析时间戳
  const date = new Date(timestamp);

  // 提取各部分
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // 月份从0开始，需要加1
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");
  const second = String(date.getUTCSeconds()).padStart(2, "0");

  // 格式化并返回
  return `${year}:${month}:${day} ${hour}:${minute}:${second}`;
}
