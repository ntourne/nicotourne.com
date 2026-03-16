import { Button, Flex } from "@chakra-ui/react"
import { FaExternalLinkAlt } from "react-icons/fa"

export const WebsiteButtons = ({ websites }: any) => {
  if (!websites) return null

  return (
    <Flex direction="column" align="left">
      {websites.map((website: any) => (
        <Button
          key={website.url}
          asChild
          mb={1}
          width={{ base: "100%", sm: "auto" }}
        >
          <a href={website.url} target="_blank" rel="noreferrer">
            {website.label}
            <FaExternalLinkAlt />
          </a>
        </Button>
      ))}
    </Flex>
  )
}
