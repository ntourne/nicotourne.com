import { Section } from "@components/layout"
import { sendContact } from "@libs/contact"
import { useState } from "react"
import { toast } from "sonner"

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

          toast.success(data.msg || "Message sent", {
            description: "I will get back to you as soon as possible",
          })
        })
        .catch((err) => {
          toast.error(err.msg || "Ups... there was an error", {
            description: "There are lots of possible situations.",
          })
          setIsSubmitting(false)
        })
    }, 3000)

    event.preventDefault()
  }

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"

  return (
    <Section title="Contact submitting this form">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Your email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-1 text-sm font-medium"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <hr className="my-4 border-gray-200" />
      <div className="text-[1.2em] pt-8">
        ... or just send an email to nicotourne [at] gmail.com
      </div>
    </Section>
  )
}
