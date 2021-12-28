import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Stack,
  Input,
  Textarea,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import { Section } from "@components/layout";
import { sendContact } from "@libs/contact";
import { useToast } from "@chakra-ui/react";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = (event: any) => {
    setIsSubmitting(true);

    setTimeout(() => {
      sendContact(email, subject, message)
        .then((data) => {
          setEmail("");
          setSubject("");
          setMessage("");
          setIsSubmitting(false);

          toast({
            title: data.msg || "Message sent",
            description: "I will get back to you as soon as possible",
            position: "top",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        })
        .catch((err) => {
          toast({
            title: err.msg || "Ups... there was an error",
            description: "There are lots of possible situations.",
            position: "top",
            status: "error",
            duration: 4000,
            isClosable: true,
          });

          setIsSubmitting(false);
        });
    }, 3000);

    event.preventDefault();
  };

  return (
    <Section title="Contact submitting this form">
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
          <FormControl isRequired id="form-control-email">
            <FormLabel htmlFor="email">Your email address</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired id="form-control-subject">
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormControl>
          <FormControl id="form-control-message">
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button mt={4} isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </Stack>
      </form>

      <Divider py={4} />

      <Box fontSize="1.2em" pt={8}>
        ... or just send an email to nicotourne [at] gmail.com
      </Box>
    </Section>
  );
};
