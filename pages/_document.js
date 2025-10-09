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
          {/* Preload critical fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/assets/bgUp.webp" />
          <link rel="preload" as="image" href="/assets/Hero-section.webp" />
          
          {/* DNS prefetch for external domains */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//fonts.gstatic.com" />
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