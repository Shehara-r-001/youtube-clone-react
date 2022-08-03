export const useTruncate = (num) => {
  if (num > 999 && num < 999999)
    return Math.round((num / 1000) * 10) / 10 + 'k';

  if (num > 999999) return Math.round((num / 1000000) * 10) / 10 + 'M';
  else return num;
};
