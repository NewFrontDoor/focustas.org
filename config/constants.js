import Typography from 'typography';
import {fontFace, adjustHue} from 'polished';
import {createTheme} from 'mineral-ui/themes';

// H   S   B
// 40
// 60
// 80
// 100
// 120 100 60
// 140
// 160
// 1080
// 200
// 220

const themeColour = 'hsl(120, 100%, 60%)';

const focusColours = {
  10: adjustHue(-50, themeColour),
  20: adjustHue(-40, themeColour),
  30: adjustHue(-30, themeColour),
  40: adjustHue(-20, themeColour),
  50: adjustHue(-10, themeColour),
  60: themeColour,
  70: adjustHue(10, themeColour),
  80: adjustHue(20, themeColour),
  90: adjustHue(30, themeColour),
  100: adjustHue(40, themeColour)
};

export const theme = createTheme({
  colors: {
    theme: focusColours,
    danger: 'bronze',
    warning: 'dusk',
    success: 'teal'
  },
  overrides: {
    fontFamily: 'Raleway',
    h1_fontWeight: 200,
    h2_fontWeight: 200,
    h3_fontWeight: 200,
    h4_fontWeight: 200,
    h5_fontWeight: 200,
    h6_fontWeight: 200
  }
});

export const lrgDesktopMinWidth = 1440;
export const desktopMinWidth = 1024;
export const tabletMinWidth = 768;
export const mobileMinWidth = 0;

export const media = {
  tablet: `@media (min-width: ${tabletMinWidth}px)`,
  desktop: `@media (min-width: ${desktopMinWidth}px)`
};

export const srcSet = {
  tablet: `(min-width: ${tabletMinWidth}px)`,
  desktop: `(min-width: ${desktopMinWidth}px)`
};

export const raleway = fontFace({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontFilePath: '/static/fonts/raleway-latin-400'
});

export const ralewayBold = fontFace({
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFilePath: '/static/fonts/raleway-latin-700'
});

export const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  scaleRatio: 2.5,
  headerColor: 'rgb(0, 153, 51)',
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  headerWeight: 200,
  bodyColor: 'rgb(85, 85, 85)',
  bodyWeight: 200,
  bodyFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  overrideStyles: ({adjustFontSizeTo}) => ({
    h1: {
      color: '#3C3'
    },
    h3: {
      color: '#3C3',
      fontWeight: 500
    },
    ul: {
      ...adjustFontSizeTo('14px'),
      listStyleType: 'disc'
    },
    li: {
      marginBottom: 0
    },
    a: {
      transition: 'color 0.2s linear',
      color: '#428bca',
      textDecoration: 'none'
    },
    'a:visited': {
      color: '#339933'
    },
    'a:active, a:hover, a:focus': {
      color: '#339933',
      textDecoration: 'underline'
    }
  })
});
