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
import { EXPERIENCES } from "@data/index";
import { Markdown, WebsiteButtons } from ".";
import Image from "next/image";

export const Experience = () => {
  return (
    <Section title="Experience">
      <Stack spacing={4}>
        <Accordion allowMultiple allowToggle>
          {EXPERIENCES.map((experience, idx) => (
            <AccordionItem key={experience.key} id={experience.key}>
              <ExperienceBox experience={experience} />
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </Section>
  );
};

const ExperienceBox = ({ experience }: any) => {
  return (
    <Flex direction="column">
      <AccordionButton px={0}>
        <Flex direction="row" textAlign="left" flex={1}>
          {experience.imageUrl && (
            <Box width="60px">
              <Image
                src={experience.imageUrl}
                alt={`Logo from ${experience?.company?.name}`}
                height="60px"
                width="60px"
                layout="fixed"
              />
            </Box>
          )}

          <Box ml={4}>
            <Text fontWeight="bold">{experience.title}</Text>
            <Text as="span">{experience.company?.name}</Text>
            <Text
              fontSize="0.9em"
              color={useColorModeValue("gray.700", "white.700")}
            >
              {experience.period.start} - {experience.period.end}
            </Text>
          </Box>
        </Flex>
        <AccordionIcon mr={3} />
      </AccordionButton>

      {experience.description && (
        <AccordionPanel px={0} pb={4}>
          <Markdown>{experience.description}</Markdown>

          {experience.websites && (
            <WebsiteButtons websites={experience.websites} />
          )}
        </AccordionPanel>
      )}
    </Flex>
  );
};
