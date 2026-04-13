export const WebsiteTech = () => {
  return (
    <div className="py-8">
      <hr className="border-gray-200" />
      <p className="text-sm mt-4">
        This website is built using{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
      </p>
      <p className="text-sm">
        Deployed by{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
      </p>
    </div>
  )
}
