import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark'> {/* Add whichever language you want here */}
      <Head>
        <link
            rel="preload"
            href="/fonts/Satoshi-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />
         <link
            rel="preload"
            href="/fonts/Satoshi-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />

        <link
            rel="preload"
            href="/fonts/Satoshi-Medium.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />
         <link
            rel="preload"
            href="/fonts/Satoshi-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />
        <link
            rel="preload"
            href="/fonts/Satoshi-Bold.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />
         <link
            rel="preload"
            href="/fonts/Satoshi-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />
      </Head>
      <body className='bg-main' id = "app">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

