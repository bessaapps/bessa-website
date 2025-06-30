import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { title, titles } from "@/utils/constants";

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
          <Link href={"/donate"} title={`${titles.donate} | ${title}`}>
            <Button colorScheme={"primary"} size={"sm"}>
              Donate
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
