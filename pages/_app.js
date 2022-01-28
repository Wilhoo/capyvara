import Header from '../components/Header2'
import Footer from '../components/Footer'
import '../styles/globals.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
