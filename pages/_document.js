// @flow

import Typography from 'typography';
import Document, { Head, Main, NextScript } from 'next/document'
import { renderToSheetList } from 'fela-dom'
import felaRenderer from '../fela-renderer'

const typography = new Typography({
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
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options) => ({
    h1: {
      color: '#3C3'
    },
    h3: {
      color: '#3C3',
      fontWeight: 500,
      marginBottom: 0
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

const normalFonts = [
  '/static/fonts/raleway-latin-400.eot',
  '/static/fonts/raleway-latin-400.svg',
  '/static/fonts/raleway-latin-400.woff',
  '/static/fonts/raleway-latin-400.woff2',
];

const boldFonts = [
  '/static/fonts/raleway-latin-700.eot',
  '/static/fonts/raleway-latin-700.svg',
  '/static/fonts/raleway-latin-700.woff',
  '/static/fonts/raleway-latin-700.woff2',
];

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()

    felaRenderer.renderFont('Raleway', normalFonts, { fontWeight: 'normal' });
    felaRenderer.renderFont('Raleway', boldFonts, { fontWeight: 'bold' });
    felaRenderer.renderStatic(typography.toString(), 'html,body');

    const sheetList = renderToSheetList(felaRenderer)
    felaRenderer.clear()

    return {
      ...page,
      sheetList
    }
  }

  render () {
    const styleNodes = this.props.sheetList.map(({ type, media, css }) =>
      <style
        dangerouslySetInnerHTML={{ __html: css }}
        data-fela-type={type}
        key={`${type}-${media}`}
        media={media}
      />,
    )

    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <title>FOCUS</title>
          {styleNodes}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
