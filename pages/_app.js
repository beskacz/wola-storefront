import '@styles/globals.css'
import CartContextProvider from 'contexts/CartContextProvider';

function Application({ Component, pageProps }) {
  return <CartContextProvider><Component {...pageProps} /></CartContextProvider>;
}

export default Application
