import { Section } from "@components/layout"
import { LANGUAGES } from "@data/index"

export const Language = () => {
  return (
    <Section title="Language">
      <div className="flex flex-col gap-4">
        {LANGUAGES.map((language) => (
          <div key={language.label} className="flex flex-col text-left w-full">
            <p className="font-bold">{language.label}</p>
            <p>{language.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
