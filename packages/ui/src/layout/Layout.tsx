export const Layout = (props: { children: any }) => {
  const { children } = props

  return (
    <div className="flex min-h-[95vh] flex-col items-center">
      <div className="w-full max-w-[800px] px-4">
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  )
}
