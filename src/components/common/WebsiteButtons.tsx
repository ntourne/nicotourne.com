import { FaExternalLinkAlt } from "react-icons/fa"

export const WebsiteButtons = ({ websites }: any) => {
  if (!websites) return null

  return (
    <div className="flex flex-col items-start">
      {websites.map((website: any) => (
        <a
          key={website.url}
          href={website.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mb-1 px-4 py-2 rounded border border-gray-300 hover:bg-gray-50 transition-colors w-full sm:w-auto"
        >
          {website.label}
          <FaExternalLinkAlt className="text-sm" />
        </a>
      ))}
    </div>
  )
}
