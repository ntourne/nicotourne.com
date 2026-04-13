import { Section } from "@nicotourne/ui/layout"
import { PROFILE } from "@nicotourne/data/profile"
import { Markdown } from "."

export const About = () => {
  return (
    <div className="flex flex-col gap-4 mt-3">
      <Section>
        <Markdown>{PROFILE.about}</Markdown>
      </Section>
    </div>
  )
}
