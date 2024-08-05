export const accountFormat = (account, start = 4, end = 6) => {
  if (!account) return;
  return account.slice(0, start) + "..." + account.slice(account.length - end);
};
