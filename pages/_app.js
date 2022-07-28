import Header from '../components/layouts/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header></Header>
  <Component {...pageProps} />
  </>
}

export default MyApp
