import Typography from 'typography';
import {fontFace, adjustHue} from 'polished';

export const lrgDesktopMinWidth = 1440;
export const desktopMinWidth = 1024;
export const tabletMinWidth = 768;
export const mobileMinWidth = 0;

export const srcSet = {
  tablet: `(min-width: ${tabletMinWidth}px)`,
  desktop: `(min-width: ${desktopMinWidth}px)`
};

export const raleway = fontFace({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontFilePath: '/fonts/raleway-latin-400'
});

export const ralewayBold = fontFace({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFilePath: '/fonts/raleway-latin-700'
});
