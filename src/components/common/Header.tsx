import { Flex, useColorMode, Button, Spacer } from "@chakra-ui/react";
import { SocialMedia } from "@components/common";
import { FaSun, FaMoon } from "react-icons/fa";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction="row" align="center">
      <SocialMedia />
      <Spacer />
      <Button
        onClick={toggleColorMode}
        size="sm"
        alt="Switch light/dark mode"
        aria-label="Switch light/dark mode"
      >
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </Flex>
  );
};
