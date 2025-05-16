import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
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
          <Text fontWeight={"bold"} color={"gray.50"}>
            Support safe and inclusive LGBTQ communities.
          </Text>
          <Link href={"/become-a-sponsor"}>
            <Button colorScheme={"primary"} size={"sm"}>
              Donate
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
