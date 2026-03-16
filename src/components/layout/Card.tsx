import { Box, type BoxProps } from "@chakra-ui/react"
import type { FC, ReactNode } from "react"

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
