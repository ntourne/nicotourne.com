import { useEffect } from "react"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
  menu?: string
  getLayout?: any
}

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        lineHeight: "base",
        // bg: mode("gray.100", "gray.600")(props),
      },
      a: {
        fontWeight: "bold",
        /* color: "#080a87 !important", */
      },
    }),
  },
  fonts: {
    heading:
      "Roboto, Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
    body: "Roboto, Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
  },
})

function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props

  const router = useRouter()

  const getLayout = Component.getLayout || ((page: any) => page)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const _window: any = window
      _window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default MyApp
