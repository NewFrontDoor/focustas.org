const themeColour = 'hsl(120, 60%, 50%)';

const theme = {
  breakpoints: ['52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Raleway, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [15, 16, 20, 28, 35, 50],
  // fontSizes: [18.75, 20, 25, 35, 43.75, 62.5],
  fontWeights: {
    body: 200,
    heading: 200,
    bold: 400
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    primary: themeColour,
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    text: 'rgb(85, 85, 85)',
    heading: 'hsl(120, 60%, 40%)',
    headingLight: 'rgb(51, 204, 51)',
    background: '#fff'
  },
  images: {
    avatar: {
      height: '100px',
      width: '100px',
      minWidth: '100px'
    }
  },
  buttons: {
    primary: {
      color: 'white',
      background: 'primary',
      cursor: 'pointer'
    },
    transparent: {
      color: 'primary',
      background: 'none',
      cursor: 'pointer',
      border: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  links: {
    nav: {
      color: 'inherit',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 4,
      background: 'white',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)'
    }
  },
  text: {
    listDisc: {
      listStyle: 'disc',
      paddingInlineStart: '20px'
    },
    listNone: {
      listStyle: 'none',
      paddingInlineStart: '0'
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'primary',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      marginBottom: 5
    },
    h2: {
      color: 'heading',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      marginBottom: 4
    },
    h3: {
      color: 'headingLight',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      marginBottom: 4
    },
    h4: {
      color: 'heading',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
      marginBottom: 2
    },
    h5: {
      color: 'heading',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
      marginBottom: 1
    },
    h6: {
      color: 'heading',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
      marginBottom: 1
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: '#428bca',
      textDecoration: 'none',
      'a:active, a:hover, a:focus': {
        color: 'primary',
        textDecoration: 'underline'
      },
      '&:visited': {
        color: 'primary'
      }
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    ul: {
      listStyle: 'disc',
      paddingInlineStart: '20px'
    }
  }
};

export default theme;
