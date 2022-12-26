import { FC, ReactNode } from "react"
import { Box, useColorModeValue, BoxProps } from "@chakra-ui/react"

type Props = {
  children: ReactNode
}
export const Card: FC<Props & BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      {...props}
    >
      {children}
    </Box>
  )
}
