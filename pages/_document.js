import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as React from 'react'
import { renderStatic } from '../shared/renderer.js'
export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const { css, ids } = await renderStatic(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ),
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"></script>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        </Head> 
        <link rel="shortcut icon" href="../images/fav.ico" />
        <link rel="manifest" href="/manifest.json"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <link rel="apple-touch-icon" href="/With_bg.png" sizes="144x144"/>
        <body className="demmm">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}