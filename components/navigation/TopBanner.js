import { Box, Button, Container, Flex, Show, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <Box
      bgImage={"url('/images/gradients/Mesh%207.png')"}
      bgPosition={"center"}
      bgSize={"cover"}
    >
      <Container maxW={"container.xl"} py={2}>
        <Flex align={"center"} justify={"center"} gap={2}>
          <Show above={"sm"}>
            <Text fontWeight={"bold"} color={"gray.50"}>
              Help this inclusive LGBTQ community operate without ads.
            </Text>
          </Show>
          <Show below={"sm"}>
            <Text fontWeight={"bold"} color={"black"}>
              Support LGBTQ community.
            </Text>
          </Show>
          <Link href={"https://cash.app/$getbessa"} target={"_blank"}>
            <Button colorScheme={"primary"} size={"sm"}>
              Donate
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
