"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/chakra";
import { UserProvider } from "@/context/UserContext";

export default function Providers({ children }) {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </UserProvider>
  );
}
