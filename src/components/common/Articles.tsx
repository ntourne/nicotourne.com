import { Flex, Heading, Link, Text } from "@chakra-ui/react"
import { POSTS } from "@data/posts"

export const Articles = () => {
  return (
    <Flex direction={"column"} flex="1" mt={12} mb={8}>
      <Heading as="h3" fontSize={{ base: "1.1em", sm: "1.3em" }} mb={4}>
        Articles ({`I don't write too often`})
      </Heading>
      {POSTS.map((post, idx) => (
        <Flex
          direction={{ base: "column", sm: "row" }}
          key={`post-${idx}`}
          textAlign="left"
          width="100%"
          mb={{ base: 3, sm: 1 }}
        >
          <Link href={post.url} isExternal aria-label={post.title}>
            <Text fontWeight="bold">{post.title}</Text>
          </Link>{" "}
          <Text ml={{ base: 0, sm: 2 }}>{post.createdDate}</Text>
        </Flex>
      ))}
    </Flex>
  )
}
