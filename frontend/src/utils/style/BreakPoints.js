export const devicePx = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  laptoxL: "1920px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(max-width: ${devicePx.mobileS})`,
  mobileM: `(max-width: ${devicePx.mobileM})`,
  mobileL: `(max-width: ${devicePx.mobileL})`,
  tablet: `(max-width: ${devicePx.tablet})`,
  laptop: `(max-width: ${devicePx.laptop})`,
  laptopL: `(max-width: ${devicePx.laptopL})`,
  desktop: `(max-width: ${devicePx.desktop})`,
  desktopL: `(max-width: ${devicePx.desktop})`,
};
export const deviceMinWidth = {
  mobileS: `(min-width: ${devicePx.mobileS})`,
  mobileM: `(min-width: ${devicePx.mobileM})`,
  mobileL: `(min-width: ${devicePx.mobileL})`,
  tablet: `(min-width: ${devicePx.tablet})`,
  laptop: `(min-width: ${devicePx.laptop})`,
  laptopL: `(min-width: ${devicePx.laptopL})`,
  desktop: `(min-width: ${devicePx.desktop})`,
  desktopL: `(min-width: ${devicePx.desktop})`,
};
