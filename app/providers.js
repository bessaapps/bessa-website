"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/utils/chakra";

export default function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
