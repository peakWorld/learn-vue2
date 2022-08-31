// 乘以倍数
export const multiply = (value, times) => {
  if (!value) return '';
    return value * ( parseInt(times) || 1);
}