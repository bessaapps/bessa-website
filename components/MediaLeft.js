import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

export default function MediaLeft({ heading, image, children }) {
  return (
    <Flex
      direction={["column", "row"]}
      align={"center"}
      minH={"calc(100vh - 80px)"}
      py={[16, 32, 64]}
    >
      <Box w={["100%", "50%"]}>{image}</Box>
      <Box w={["100%", "50%"]} p={[4, 8, 16]}>
        <Stack>
          <Heading mb={4}>{heading}</Heading>
          {children}
        </Stack>
      </Box>
    </Flex>
  );
}
