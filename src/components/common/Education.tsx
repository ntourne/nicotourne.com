import {
  Flex,
  Box,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Section } from "@components/layout";
import { EDUCATION } from "@data/index";
import { Markdown, WebsiteButtons } from ".";
import Image from "next/image";

export const Education = () => {
  return (
    <Section title="Education">
      <Stack spacing={4}>
        <Accordion allowMultiple allowToggle>
          {EDUCATION.map((education) => (
            <AccordionItem key={education.key} id={education.key}>
              <EducationBox education={education} />
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Section>
  );
};

const EducationBox = ({ education }: any) => {
  return (
    <Flex direction="column">
      <AccordionButton px={0}>
        <Flex direction="row" textAlign="left" width="100%">
          {education.imageUrl && (
            <Box width="60px">
              <Image
                src={education.imageUrl}
                alt={`Logo from ${education?.school?.name}`}
                height="60px"
                width="60px"
                layout="fixed"
              />
            </Box>
          )}
          <Box ml={4}>
            <Text fontWeight="bold">{education.degree}</Text>
            <Text as="span">{education.school?.name}</Text>
            <Text
              fontSize="0.9em"
              color={useColorModeValue("gray.700", "white.700")}
            >
              {education.period.start} - {education.period.end}
            </Text>
          </Box>
        </Flex>
        <AccordionIcon />
      </AccordionButton>

      {education.description && (
        <AccordionPanel px={0} pb={4}>
          <Markdown>{education.description}</Markdown>

          {education.websites && (
            <WebsiteButtons websites={education.websites} />
          )}
        </AccordionPanel>
      )}
    </Flex>
  );
};
