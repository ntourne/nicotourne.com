import "../styles/globals.css"
import type { AppProps } from "next/app"

function RandomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default RandomApp
