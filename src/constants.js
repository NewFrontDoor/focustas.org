// @flow

export const lrgDesktopMinWidth = 1441;
export const desktopMaxWidth = 1440;
export const desktopMinWidth = 1021;
export const tabletMaxWidth = 1020;
export const tabletMinWidth = 624;
export const mobileMaxWidth = 623;
export const mobileMinWidth = 0;

export const media = {
  tablet: `@media (min-width: ${tabletMinWidth}px)`,
  desktop: `@media (min-width: ${desktopMinWidth}px)`
};

export const srcSet = {
  tablet: `(min-width: ${tabletMinWidth}px)`,
  desktop: `(min-width: ${desktopMinWidth}px)`
};
