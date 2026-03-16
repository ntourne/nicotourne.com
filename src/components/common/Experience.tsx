import { Section } from "@components/layout"
import { EXPERIENCES } from "@data/index"
import Image from "next/image"
import { Markdown, WebsiteButtons } from "."

export const Experience = () => {
  return (
    <Section title="Experience">
      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceBox key={experience.key} experience={experience} />
        ))}
      </div>
    </Section>
  )
}

const ExperienceBox = ({ experience }: any) => {
  return (
    <details className="group">
      <summary className="flex flex-row items-center cursor-pointer list-none py-2">
        <div className="flex flex-row text-left flex-1">
          {experience.imageUrl && (
            <div className="w-[60px] shrink-0">
              <Image
                src={experience.imageUrl}
                alt={`Logo from ${experience?.company?.name}`}
                height={60}
                width={60}
              />
            </div>
          )}
          <div className="ml-4">
            <h3 className="text-[1.1em] font-bold">{experience.title}</h3>
            <span>{experience.company?.name}</span>
            <p className="text-[0.9em] text-gray-700">
              {experience.period.start} - {experience.period.end}
            </p>
          </div>
        </div>
        <svg
          className="mr-3 w-4 h-4 shrink-0 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      {experience.description && (
        <div className="pb-4 px-0">
          <Markdown>{experience.description}</Markdown>
          {experience.websites && (
            <WebsiteButtons websites={experience.websites} />
          )}
        </div>
      )}
    </details>
  )
}
