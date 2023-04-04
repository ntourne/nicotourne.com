import { FC, ReactNode } from "react"
import { Box, BoxProps } from "@chakra-ui/react"

type Props = {
  children: ReactNode
}
export const Card: FC<Props & BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      w={"full"}
      rounded={"lg"}
      py={{ base: 1, sm: 6 }}
      px={{ base: 1, sm: 8 }}
      {...props}
    >
      {children}
    </Box>
  )
}
