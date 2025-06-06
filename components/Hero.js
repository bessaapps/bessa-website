import { Box, Center, Heading, Stack, Tag } from "@chakra-ui/react";

export default function Hero({ heading, lead, bgImage }) {
  return (
    <Box bgImage={bgImage} bgPosition={"center"} bgSize={"cover"}>
      <Center minH={"calc(100vh - 129px)"} p={4}>
        <Stack textAlign={"center"}>
          <Box>
            <Tag
              as={"h1"}
              colorScheme={"whiteAlpha"}
              size={"lg"}
              mb={4}
              fontSize={"1rem !important"}
            >
              {lead}
            </Tag>
          </Box>
          <Heading as={"h1"} color={"white"} textAlign={"center"}>
            {heading}
          </Heading>
        </Stack>
      </Center>
    </Box>
  );
}
