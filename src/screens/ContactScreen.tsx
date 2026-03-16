import { ContactForm, Header, WebsiteTech } from "@components/common"

export const ContactScreen = () => {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <Header />
      <ContactForm />
      <WebsiteTech />
    </div>
  )
}
