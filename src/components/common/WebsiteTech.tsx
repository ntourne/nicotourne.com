import { Box, Link, Divider } from "@chakra-ui/react";

export const WebsiteTech = () => {
  return (
    <Box py={8}>
      <Divider />
      <Box fontSize="sm" mt={4}>
        This website is built using{" "}
        <Link href="https://nextjs.org/" isExternal>
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://chakra-ui.com/" isExternal>
          Chakra UI
        </Link>
      </Box>
      <Box fontSize="sm">
        Deployed by{" "}
        <Link href="https://vercel.com/" isExternal>
          Vercel
        </Link>
      </Box>
    </Box>
  );
};
