import { Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";

export const metadata = {
  title:
    "Help & Support | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
};

export default function Support() {
  const buttons = [
    "Let's Talk!",
    "Account",
    "Feature Requests",
    "Inclusion",
    "Bug Fixes"
  ];

  return (
    <Container maxW={"container.lg"} py={16}>
      <Heading as={"h1"} mb={4}>
        Help &amp; Support
      </Heading>
      <Text mb={4}>
        You can reach me at{" "}
        <Link href={"mailto:topher@bessssssa.com"} fontWeight={"bold"}>
          topher@bessssssa.com
        </Link>
        !
      </Text>
      <Flex direction={["column", "row"]}>
        {buttons.map((button) => (
          <Link href={"mailto:topher@bessssssa.com"} key={button}>
            <Button mb={[4, 0]} mr={[0, 4]}>
              {button}
            </Button>
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
