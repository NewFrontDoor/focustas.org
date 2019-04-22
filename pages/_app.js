import React from 'react';
import Head from 'next/head';
import App, {Container} from 'next/app';
import {Global} from '@emotion/core';
import {ThemeProvider} from 'mineral-ui/themes';
import Analytics from '../components/analytics';
import {theme, raleway, ralewayBold, typography} from '../config/constants';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <Head>
              <title>FOCUS</title>
            </Head>
            <Global styles={typography.toString()} />
            <Global styles={raleway} />
            <Global styles={ralewayBold} />
            <Component {...pageProps} />
            <Analytics />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
