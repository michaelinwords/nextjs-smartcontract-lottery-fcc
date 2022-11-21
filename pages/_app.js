import '../styles/globals.css'
// add moralis provider
import {MoralisProvider} from "react-moralis"

function MyApp({ Component, pageProps }) {
  // before wrapping with moralis provider, previously was: return <Component {...pageProps} />
  return (
    // wrap a moralis provider around our whole app
    // initialise on mount is the option to hook into a server for more features
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps}/>
    </MoralisProvider>
  )
}

export default MyApp
