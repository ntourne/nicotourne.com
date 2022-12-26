import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { Section } from "@components/layout"
import { SOCIAL_MEDIA } from "@data/index"

export const SocialMedia = () => {
  return (
    <Section>
      <Flex direction="row">
        {SOCIAL_MEDIA.map((item: any) => (
          <Flex direction="row" align="center" mr={4} key={item.label}>
            <Link href={item.url} isExternal aria-label={item.label}>
              <Flex direction="row" align="center">
                {item.icon && (
                  <Box mr={2} fontSize="1.5em">
                    {item.icon}
                  </Box>
                )}
                <Text display={{ base: "none", sm: "block" }}>
                  {item.label}
                </Text>
              </Flex>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Section>
  )
}
