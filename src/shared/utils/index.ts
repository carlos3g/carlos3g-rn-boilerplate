export const pxToNumber = (px: string) => {
  return parseInt(px.replace('px', ''), 10);
};
