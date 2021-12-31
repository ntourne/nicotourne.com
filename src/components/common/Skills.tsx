import {
  Flex,
  Text,
  Stack,
  Badge,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Section } from "@components/layout";
import { SKILLS } from "@data/index";

export const Skills = () => {
  return (
    <Section title="Main Skills / Interests">
      <Stack spacing={4}>
        {SKILLS.map((skill, idx) => (
          <SkillBox key={idx} skill={skill} />
        ))}
      </Stack>
    </Section>
  );
};

const SkillBox = ({ skill }: any) => {
  return (
    <Flex direction="column">
      <Flex direction="row" textAlign="left" flex={1}>
        <Box mr={4}>
          <Box fontSize="3em">{skill.icon}</Box>
        </Box>
        <Box>
          <Text as="h3" fontSize="1.1em" fontWeight="bold" mb={1}>
            {skill.label}
          </Text>
          <Text mb={1}>{skill.description}</Text>
          {skill.technologies && (
            <Box>
              {skill.technologies.map((technology: string, idx: number) => (
                <Badge
                  as="span"
                  px={2}
                  py={1}
                  key={idx}
                  mb={1}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  color={useColorModeValue("gray.700", "white.700")}
                  mr={1}
                  variant="outline"
                >
                  {technology}
                </Badge>
              ))}
            </Box>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
