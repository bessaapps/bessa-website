import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";

export default function Hero({ heading, lead, bgImage }) {
  return (
    <Box bgImage={bgImage} bgPosition={"center"} bgSize={"cover"}>
      <Center minH={"calc(100vh - 129px)"} p={4}>
        <Stack textAlign={"center"}>
          {lead && (
            <Text color={"white"} fontSize={"1rem !important"} mb={4}>
              {lead}
            </Text>
          )}
          <Heading as={"h1"} color={"white"} textAlign={"center"}>
            {heading}
          </Heading>
        </Stack>
      </Center>
    </Box>
  );
}
