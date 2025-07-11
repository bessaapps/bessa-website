import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <Box
      bgImage={"url('/images/gradients/mesh-7.png')"}
      bgPosition={"center"}
      bgSize={"cover"}
    >
      <Container maxW={"container.xl"} py={2}>
        <Flex align={"center"} justify={"center"} gap={2}>
          <Text fontWeight={"bold"} color={"gray.50"}>
            Support LGBTQ communities.
          </Text>
          <Link href={"https://buymeacoffee.com/getbessa"} target={"_blank"}>
            <Button colorScheme={"primary"} size={"sm"}>
              Donate
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
