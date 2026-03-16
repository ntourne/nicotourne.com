import { Accordion, Box, Flex, Stack, Text } from "@chakra-ui/react"
import { Section } from "@components/layout"
import { EDUCATION } from "@data/index"
import Image from "next/image"
import { useColorModeValue } from "../ui/color-mode"
import { Markdown, WebsiteButtons } from "."

export const Education = () => {
  return (
    <Section title="Education">
      <Stack gap={4}>
        <Accordion.Root multiple collapsible>
          {EDUCATION.map((education) => (
            <Accordion.Item key={education.key} value={education.key}>
              <EducationBox education={education} />
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
    </Section>
  )
}

const EducationBox = ({ education }: any) => {
  return (
    <Flex direction="column">
      <Accordion.ItemTrigger px={0}>
        <Flex direction="row" textAlign="left" width="100%">
          {education.imageUrl && (
            <Box width="60px">
              <Image
                src={education.imageUrl}
                alt={`Logo from ${education?.school?.name}`}
                height={60}
                width={60}
              />
            </Box>
          )}
          <Box ml={4}>
            <Text as="h3" fontSize="1.1em" fontWeight="bold">
              {education.degree}
            </Text>
            <Text as="span">{education.school?.name}</Text>
            <Text
              fontSize="0.9em"
              color={useColorModeValue("gray.700", "white.700")}
            >
              {education.period.start} - {education.period.end}
            </Text>
          </Box>
        </Flex>
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      {education.description && (
        <Accordion.ItemContent px={0} pb={4}>
          <Accordion.ItemBody>
            <Markdown>{education.description}</Markdown>
            {education.websites && (
              <WebsiteButtons websites={education.websites} />
            )}
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      )}
    </Flex>
  )
}
