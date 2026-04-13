import { Section } from "@nicotourne/ui/layout"
import { EDUCATION } from "@nicotourne/data/profile"
import Image from "next/image"
import { Markdown, WebsiteButtons } from "."

export const Education = () => {
  return (
    <Section title="Education">
      <div className="flex flex-col gap-4">
        {EDUCATION.map((education) => (
          <EducationBox key={education.key} education={education} />
        ))}
      </div>
    </Section>
  )
}

const EducationBox = ({ education }: any) => {
  return (
    <details className="group">
      <summary className="flex flex-row items-center cursor-pointer list-none py-2">
        <div className="flex flex-row text-left w-full">
          {education.imageUrl && (
            <div className="w-[60px] shrink-0">
              <Image
                src={education.imageUrl}
                alt={`Logo from ${education?.school?.name}`}
                height={60}
                width={60}
              />
            </div>
          )}
          <div className="ml-4">
            <h3 className="text-[1.1em] font-bold">{education.degree}</h3>
            <span>{education.school?.name}</span>
            <p className="text-[0.9em] text-gray-700">
              {education.period.start} - {education.period.end}
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
      {education.description && (
        <div className="pb-4 px-0">
          <Markdown>{education.description}</Markdown>
          {education.websites && (
            <WebsiteButtons websites={education.websites} />
          )}
        </div>
      )}
    </details>
  )
}
