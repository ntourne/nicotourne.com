export const Section = ({ title, children }: any) => {
  return (
    <div className="flex flex-col">
      {title && (
        <h3 className="text-[1.3em] font-semibold mb-4">{title}</h3>
      )}
      {children && <div>{children}</div>}
    </div>
  )
}
