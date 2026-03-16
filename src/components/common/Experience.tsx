import { Accordion, Box, Flex, Stack, Text } from "@chakra-ui/react"
import { Section } from "@components/layout"
import { EXPERIENCES } from "@data/index"
import Image from "next/image"
import { useColorModeValue } from "../ui/color-mode"
import { Markdown, WebsiteButtons } from "."

export const Experience = () => {
  return (
    <Section title="Experience">
      <Stack gap={4}>
        <Accordion.Root multiple collapsible>
          {EXPERIENCES.map((experience) => (
            <Accordion.Item key={experience.key} value={experience.key}>
              <ExperienceBox experience={experience} />
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
    </Section>
  )
}

const ExperienceBox = ({ experience }: any) => {
  return (
    <Flex direction="column">
      <Accordion.ItemTrigger px={0}>
        <Flex direction="row" textAlign="left" flex={1}>
          {experience.imageUrl && (
            <Box width="60px">
              <Image
                src={experience.imageUrl}
                alt={`Logo from ${experience?.company?.name}`}
                height={60}
                width={60}
              />
            </Box>
          )}

          <Box ml={4}>
            <Text as="h3" fontSize="1.1em" fontWeight="bold">
              {experience.title}
            </Text>
            <Text as="span">{experience.company?.name}</Text>
            <Text
              fontSize="0.9em"
              color={useColorModeValue("gray.700", "white.700")}
            >
              {experience.period.start} - {experience.period.end}
            </Text>
          </Box>
        </Flex>
        <Accordion.ItemIndicator mr={3} />
      </Accordion.ItemTrigger>
      {experience.description && (
        <Accordion.ItemContent px={0} pb={4}>
          <Accordion.ItemBody>
            <Markdown>{experience.description}</Markdown>
            {experience.websites && (
              <WebsiteButtons websites={experience.websites} />
            )}
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      )}
    </Flex>
  )
}
