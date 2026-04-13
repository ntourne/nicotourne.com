import { SOCIAL_MEDIA } from "@nicotourne/data/profile"

export const SocialMedia = () => {
  return (
    <div>
      <div className="flex flex-row">
        {SOCIAL_MEDIA.map((item: any) => (
          <div key={item.label} className="flex flex-row items-center mr-4">
            <a
              href={item.url}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center"
            >
              {item.icon && (
                <span className="mr-2 text-[1.5em]">{item.icon}</span>
              )}
              <span className="hidden sm:block">{item.label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
