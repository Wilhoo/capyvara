import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/globals.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Script from 'next/script'
import {GoogleAd} from '../components/GoogleAd';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="Adsense-id"
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}
        async
        onError={ (e) => { console.error('Script failed to load', e) }}
        // strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />

      <Header />
      <Component {...pageProps} />
      <Footer />
      <GoogleAd />
    </>
  )
}

export default MyApp
