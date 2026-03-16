import { Badge, Box, Flex, Stack, Text } from "@chakra-ui/react"
import { Section } from "@components/layout"
import { SKILLS } from "@data/index"
import { useColorModeValue } from "../ui/color-mode";

export const Skills = () => {
  return (
    <Section title="Main Skills / Interests">
      <Stack gap={4}>
        {SKILLS.map((skill) => (
          <SkillBox key={skill.label} skill={skill} />
        ))}
      </Stack>
    </Section>
  );
}

const SkillBox = ({ skill }: any) => {
  const badgeColor = useColorModeValue("gray.700", "white.700")

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
              {skill.technologies.map((technology: string) => (
                <Badge
                  as="span"
                  px={2}
                  py={1}
                  key={`${skill.label}-${technology}`}
                  mb={1}
                  color={badgeColor}
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
  )
}
