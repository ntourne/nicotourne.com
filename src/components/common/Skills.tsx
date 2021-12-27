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
      <Text fontWeight="bold" mb={1}>
        {skill.label}
      </Text>
      <Text mb={1}>{skill.description}</Text>
      {skill.technologies && (
        <Flex direction={{ base: "column", sm: "row" }}>
          * Technologies: {skill.technologies.join(", ")}
        </Flex>
      )}
    </Flex>
  );
};
