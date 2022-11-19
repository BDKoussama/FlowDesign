import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark'> {/* Add whichever language you want here */}
      <Head>
      
        <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Black.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />
         <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />

        <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Medium.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />
         <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />

        <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />
         <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />

        <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-SemiBold.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
        />
         <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-SemiBold.woff2"
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

