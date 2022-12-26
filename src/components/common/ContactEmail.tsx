import { useState } from "react"
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import { PROFILE } from "@data/index"
import { FaEnvelope } from "react-icons/fa"
import { useToast, useClipboard } from "@chakra-ui/react"

export const ContactEmail = () => {
  const [displayEmail, setDisplayEmail] = useState(false)
  const toast = useToast()

  const { onCopy } = useClipboard(PROFILE.email)

  const handleOnCopy = () => {
    onCopy()
    toast({
      title: "Email copied",
      position: "top",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  }

  if (displayEmail) {
    return (
      <InputGroup size="md" width={{ base: "100%", sm: "260px" }} mr={2}>
        <Input value={PROFILE.email} readOnly />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleOnCopy}>
            Copy
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
  return (
    <>
      <Button
        width={{ base: "100%", sm: "auto" }}
        onClick={() => setDisplayEmail(true)}
        leftIcon={<FaEnvelope />}
        mr={2}
      >
        Contact via email
      </Button>
    </>
  )
}
