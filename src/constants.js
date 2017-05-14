// @flow

const lrgDesktopMinWidth = 1441;
const desktopMaxWidth = 1440;
const desktopMinWidth = 1021;
const tabletMaxWidth = 1020;
const tabletMinWidth = 624;
const mobileMaxWidth = 623;
const mobileMinWidth = 0;

export const media = {
  tablet: `@media (min-width: ${tabletMinWidth}px)`,
  desktop: `@media (min-width: ${desktopMinWidth}px)`
};