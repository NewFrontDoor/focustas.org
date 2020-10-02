import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';

const CONTAINER_ID = 'GTM-KLDZDNH';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${CONTAINER_ID}');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
