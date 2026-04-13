export const OpenToWorkBanner = () => {
  return (
    <div className="flex flex-col gap-3 px-4 py-3 rounded-lg border border-green-200 bg-green-50 text-green-900 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <span className="inline-block px-2 py-1 rounded-md bg-green-100 text-green-800 text-sm font-semibold">
          Open to work
        </span>
        <p className="font-semibold">Available for remote opportunities.</p>
      </div>
    </div>
  )
}
