import { Link, Text } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"

export const Markdown = ({ children, fontSize }: any) => {
  const newTheme = {
    p: (props: any) => {
      const { children } = props
      return (
        <Text mb={2} fontSize={fontSize || "1em"}>
          {children}
        </Text>
      )
    },
    a: (props: any) => {
      const { children, href } = props
      return (
        <Link href={href} isExternal>
          {children}
        </Link>
      )
    },
  }

  return (
    <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
      {children.trim()}
    </ReactMarkdown>
  )
}
