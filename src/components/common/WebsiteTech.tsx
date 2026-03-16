import { Box, Link, Separator } from "@chakra-ui/react"

export const WebsiteTech = () => {
  return (
    <Box py={8}>
      <Separator />
      <Box fontSize="sm" mt={4}>
        This website is built using{" "}
        <Link href="https://nextjs.org/" target='_blank' rel='noopener noreferrer'>
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com/" target='_blank' rel='noopener noreferrer'>
          Chakra UI
        </Link>
      </Box>
      <Box fontSize="sm">
        Deployed by{" "}
        <Link href="https://vercel.com/" target='_blank' rel='noopener noreferrer'>
          Vercel
        </Link>
      </Box>
    </Box>
  );
};
