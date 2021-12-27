import { Flex, Text, Stack } from "@chakra-ui/react";
import { Section } from "@components/layout";
import { LANGUAGES } from "@data/index";

export const Language = () => {
  return (
    <Section title="Language">
      <Stack spacing={4}>
        {LANGUAGES.map((language) => (
          <Flex
            direction="column"
            key={language.label}
            textAlign="left"
            width="100%"
          >
            <Text fontWeight="bold">{language.label}</Text>
            <Text>{language.description}</Text>
          </Flex>
        ))}
      </Stack>
    </Section>
  );
};
