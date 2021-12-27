import { Section } from "@components/layout";
import { PROFILE } from "@data/index";
import { Markdown } from ".";

export const About = () => {
  return (
    <Section title="About">
      <Markdown>{PROFILE.about}</Markdown>
    </Section>
  );
};
