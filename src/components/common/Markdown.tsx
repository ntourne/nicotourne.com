import { Link, Text } from "@chakra-ui/react"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import ReactMarkdown from "react-markdown"

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
        <Link href={href} target='_blank' rel='noopener noreferrer'>
          {children}
        </Link>
      );
    },
  }

  return (
    <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
      {children.trim()}
    </ReactMarkdown>
  )
}
