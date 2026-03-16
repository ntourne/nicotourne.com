import type { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export const Card: FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`w-full rounded-lg py-1 px-1 sm:py-6 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}
