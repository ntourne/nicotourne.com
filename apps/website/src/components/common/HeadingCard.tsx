import { PROFILE } from "@nicotourne/data/profile"
import NextImage from "next/image"
import { ContactEmail } from "."

export const HeadingCard = () => {
  return (
    <div className="flex flex-col mb-3 sm:flex-row sm:items-center">
      <div className="block sm:hidden mb-3">
        <Avatar />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[2em] sm:text-[2.5em] font-bold">{PROFILE.name}</h1>
        <h2 className="text-[1.2em] sm:text-[1.5em] mt-0 sm:mt-2">
          {PROFILE.title}
        </h2>
      </div>
      <div className="flex-1" />
      <div className="hidden sm:block">
        <Avatar />
      </div>
      <div className="block sm:hidden mt-4">
        <ContactEmail />
      </div>
    </div>
  )
}

const Avatar = () => {
  return (
    <NextImage
      src={PROFILE.avatarUrl}
      alt={`Avatar from ${PROFILE.name}`}
      height={80}
      width={80}
      className="rounded-[8px]"
    />
  )
}
