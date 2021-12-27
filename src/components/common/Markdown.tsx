import { Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export const Markdown = ({ children }: any) => {
  const newTheme = {
    p: (props: any) => {
      const { children } = props;
      return (
        <Text mb={2} fontSize={"0.9em"}>
          {children}
        </Text>
      );
    },
  };

  return (
    <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
      {children.trim()}
    </ReactMarkdown>
  );
};
