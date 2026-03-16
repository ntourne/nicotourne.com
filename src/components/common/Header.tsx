import { SocialMedia } from "@components/common"
import { ContactEmail } from "."

export const Header = () => {
  return (
    <div className="flex flex-row items-center mb-2 sm:mb-6">
      <SocialMedia />
      <div className="flex-1" />
      <div className="hidden sm:block">
        <ContactEmail />
      </div>
    </div>
  )
}
