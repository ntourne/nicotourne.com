import { Badge, Flex, Text } from "@chakra-ui/react"
import { FaBriefcase } from "react-icons/fa"

export const OpenToWorkBanner = () => {
  return (
    <Flex
      align={{ base: "flex-start", sm: "center" }}
      justify="space-between"
      direction={{ base: "column", sm: "row" }}
      gap={3}
      px={4}
      py={3}
      borderRadius="lg"
      borderWidth="1px"
      borderColor="green.200"
      bg="green.50"
      color="green.900"
    >
      <Flex
        align={{ base: "flex-start", sm: "center" }}
        direction={{ base: "column", sm: "row" }}
        gap={3}
      >
        <Badge colorScheme="green" px={2} py={1} borderRadius="md">
          Open to work
        </Badge>
        <Text fontWeight="semibold">Available for remote opportunities.</Text>
      </Flex>
    </Flex>
  )
}
