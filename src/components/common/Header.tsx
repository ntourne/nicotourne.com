import { useState } from "react";

import { Flex, useColorMode, Button, Spacer, Box } from "@chakra-ui/react";
import { SocialMedia } from "@components/common";
import { FaSun, FaMoon } from "react-icons/fa";
import { ContactEmail } from ".";

export const Header = ({ isBack }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction="row" align="center">
      {/*
      {isBack ? (
        <Link href="/" passHref>
          <a>
            <Button leftIcon={<FaChevronLeft />}>Home</Button>
          </a>
        </Link>
      ) : (
        <SocialMedia />
      )}

      <Spacer />
      {!isBack && (
        <Link href="/contact" passHref>
          <a>
            <Button leftIcon={<FaEnvelope />} mr={2}>
              Contact me
            </Button>
          </a>
        </Link>
      )}
      */}

      <SocialMedia />
      <Spacer />

      <Box display={{ base: "none", sm: "block" }}>
        <ContactEmail />
      </Box>
      <Button
        onClick={toggleColorMode}
        alt="Switch light/dark mode"
        aria-label="Switch light/dark mode"
      >
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </Flex>
  );
};
