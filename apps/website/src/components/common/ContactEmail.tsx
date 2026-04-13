import { PROFILE } from "@nicotourne/data/profile"
import { useState } from "react"
import { FaEnvelope } from "react-icons/fa"
import { toast } from "sonner"

export const ContactEmail = () => {
  const [displayEmail, setDisplayEmail] = useState(false)

  const handleOnCopy = () => {
    navigator.clipboard.writeText(PROFILE.email)
    toast.success("Email copied")
  }

  if (displayEmail) {
    return (
      <div className="flex w-full sm:w-[260px] mr-2 gap-2">
        <input
          value={PROFILE.email}
          readOnly
          className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
        />
        <button
          type="button"
          onClick={handleOnCopy}
          className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
        >
          Copy
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setDisplayEmail(true)}
      className="flex items-center gap-2 w-full sm:w-auto px-4 py-2 mr-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
    >
      <FaEnvelope />
      Contact via email
    </button>
  )
}
