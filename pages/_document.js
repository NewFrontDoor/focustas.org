import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {extractCritical} from 'emotion-server';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return {...page, ...styles};
  }

  componentWillMount() {
    const {__NEXT_DATA__, ids} = this.props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: this.props.css}}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html:
                'window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;'
            }}
          />
          <script async src="https://www.google-analytics.com/analytics.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
