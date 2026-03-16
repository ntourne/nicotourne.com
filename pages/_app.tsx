import type { NextPage } from "next"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Toaster } from "sonner"

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
  menu?: string
  getLayout?: any
}

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
    <>
      {getLayout(<Component {...pageProps} />)}
      <Toaster position="bottom-right" richColors />
    </>
  )
}

export default MyApp
