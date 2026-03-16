"use client"

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { Toaster } from "./toaster"

const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      lineHeight: "base",
    },
    a: {
      fontWeight: "bold",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value:
            "Roboto, Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        body: {
          value:
            "Roboto, Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
      },
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props}>
        {props.children}
        <Toaster />
      </ColorModeProvider>
    </ChakraProvider>
  )
}
