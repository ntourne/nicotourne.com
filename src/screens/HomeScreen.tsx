import {
  About,
  Articles,
  Header,
  HeadingCard,
  OpenToWorkBanner,
} from "@components/common"
import { Card } from "@components/layout"

export const HomeScreen = () => {
  return (
    <div className="px-0 h-screen py-4 relative">
      <Card className="mx-auto">
        <div className="flex flex-col gap-6">
          <OpenToWorkBanner />
          <Header />
          <HeadingCard />
          <hr className="border-gray-200" />
          <About />
          <hr className="border-gray-200" />
          <Articles />
        </div>
      </Card>
    </div>
  )
}
