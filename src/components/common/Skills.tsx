import { Section } from "@components/layout"
import { SKILLS } from "@data/index"

export const Skills = () => {
  return (
    <Section title="Main Skills / Interests">
      <div className="flex flex-col gap-4">
        {SKILLS.map((skill) => (
          <SkillBox key={skill.label} skill={skill} />
        ))}
      </div>
    </Section>
  )
}

const SkillBox = ({ skill }: any) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-left flex-1">
        <div className="mr-4 text-[3em]">{skill.icon}</div>
        <div>
          <h3 className="text-[1.1em] font-bold mb-1">{skill.label}</h3>
          <p className="mb-1">{skill.description}</p>
          {skill.technologies && (
            <div>
              {skill.technologies.map((technology: string) => (
                <span
                  key={`${skill.label}-${technology}`}
                  className="inline-block px-2 py-1 mb-1 mr-1 text-sm border border-gray-700 text-gray-700 rounded"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
