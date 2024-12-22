import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function TopBanner() {
  return (
    <Box bgGradient={"linear(to-r,primary.300, primary.800)"} color={"white"}>
      <Container maxW={"container.xl"} py={2}>
        <Flex align={"center"} justify={"center"} gap={2}>
          <Text>Help this inclusive LGBTQ community operate without ads.</Text>
          <Link href={"https://cash.app/$getbessa"} target={"_blank"}>
            <Button colorScheme={"secondary"} size={"sm"}>
              Donate
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
