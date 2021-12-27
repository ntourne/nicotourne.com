import { Flex, Text, Stack } from "@chakra-ui/react";
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
      <Text fontWeight="bold">{skill.label}</Text>
      <Text fontSize="0.9em">{skill.description}</Text>
      {skill.technologies && (
        <Flex fontSize="0.9em" direction={{ base: "column", sm: "row" }}>
          Technologies: {skill.technologies.join(", ")}
        </Flex>
      )}
    </Flex>
  );
};
