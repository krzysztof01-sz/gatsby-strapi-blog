const mq = {
  mobile: 320,
  tablet: 768,
  desktop: 1000,
  desktop_FHD: 1920,
};

export const mediaQueries = key => {
  return style => `@media only screen and (min-width: ${mq[key]}px) { ${style} }`;
};
