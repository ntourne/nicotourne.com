import { POSTS } from "@nicotourne/data/posts"

export const Articles = () => {
  return (
    <div className="flex flex-col flex-1 mt-3 mb-8">
      <h3 className="text-[1.1em] sm:text-[1.3em] font-semibold mb-4">
        Articles ({`I don't write too often`})
      </h3>
      {POSTS.map((post, idx) => (
        <div
          key={`post-${idx}`}
          className="flex flex-col text-left w-full mb-3 sm:flex-row sm:mb-1"
        >
          <a
            href={post.url}
            aria-label={post.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-bold">{post.title}</span>
          </a>{" "}
          <span className="ml-0 sm:ml-2">{post.createdDate}</span>
        </div>
      ))}
    </div>
  )
}
