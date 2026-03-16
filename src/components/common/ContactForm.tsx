import { Box, Button, Field, Input, Separator, Stack, Textarea } from "@chakra-ui/react"
import { Section } from "@components/layout"
import { sendContact } from "@libs/contact"
import { useState } from "react"
import { toaster } from "../ui/toaster"

export const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: any) => {
    setIsSubmitting(true)

    setTimeout(() => {
      sendContact(email, subject, message)
        .then((data) => {
          setEmail("")
          setSubject("")
          setMessage("")
          setIsSubmitting(false)

          toaster.create({
            title: data.msg || "Message sent",
            description: "I will get back to you as soon as possible",
            type: "success",
          })
        })
        .catch((err) => {
          toaster.create({
            title: err.msg || "Ups... there was an error",
            description: "There are lots of possible situations.",
            type: "error",
          })

          setIsSubmitting(false)
        })
    }, 3000)

    event.preventDefault()
  }

  return (
    <Section title="Contact submitting this form">
      <form onSubmit={handleSubmit}>
        <Stack direction="column" gap={3}>
          <Field.Root required id="form-control-email">
            <Field.Label htmlFor="email">Your email address</Field.Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field.Root>
          <Field.Root required id="form-control-subject">
            <Field.Label htmlFor="subject">Subject</Field.Label>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Field.Root>
          <Field.Root id="form-control-message">
            <Field.Label htmlFor="message">Message</Field.Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Field.Root>
          <Button mt={4} loading={isSubmitting} type="submit">
            Submit
          </Button>
        </Stack>
      </form>
      <Separator my={4} />
      <Box fontSize="1.2em" pt={8}>
        ... or just send an email to nicotourne [at] gmail.com
      </Box>
    </Section>
  )
}
