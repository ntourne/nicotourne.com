import ReactMarkdown from "react-markdown"

export const Markdown = ({ children, fontSize }: any) => {
  const components = {
    p: ({ children: c }: any) => (
      <p className="mb-2" style={fontSize ? { fontSize } : undefined}>
        {c}
      </p>
    ),
    a: ({ children: c, href }: any) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline"
      >
        {c}
      </a>
    ),
  }

  return (
    <ReactMarkdown components={components} skipHtml>
      {children.trim()}
    </ReactMarkdown>
  )
}
