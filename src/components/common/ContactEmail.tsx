import { Button, Flex, Input, useClipboard } from "@chakra-ui/react"
import { PROFILE } from "@data/index"
import { useState } from "react"
import { FaEnvelope } from "react-icons/fa"
import { toaster } from "../ui/toaster"

export const ContactEmail = () => {
  const [displayEmail, setDisplayEmail] = useState(false)
  const clipboard = useClipboard({ value: PROFILE.email })

  const handleOnCopy = () => {
    clipboard.copy()
    toaster.create({
      title: "Email copied",
      type: "success",
    })
  }

  if (displayEmail) {
    return (
      <Flex width={{ base: "100%", sm: "260px" }} mr={2} gap={2}>
        <Input value={PROFILE.email} readOnly />
        <Button size="sm" onClick={handleOnCopy}>
          Copy
        </Button>
      </Flex>
    )
  }
  return (
    <Button
      width={{ base: "100%", sm: "auto" }}
      onClick={() => setDisplayEmail(true)}
      mr={2}
    >
      <FaEnvelope />
      Contact via email
    </Button>
  )
}
