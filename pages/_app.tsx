import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean;
  menu?: string;
  getLayout?: any;
};

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
        lineHeight: "base",
      },
      a: {
        fontWeight: "bold",
        /* color: "#080a87 !important", */
      },
    }),
  },
});

function MyApp(props: AppProps) {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: any } = props;

  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
