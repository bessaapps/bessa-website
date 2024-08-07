import { Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Script from "next/script";

export const metadata = {
  title: "Help & Support | Bessa | An LGBTQ Social Media App"
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
      <Script
        id={"5abccb96-8ac5-47b6-aa55-7a3c9b63a572"}
        data-yt-url={"https://getbessa.youtrack.cloud"}
        src={
          "https://getbessa.youtrack.cloud/static/simplified/form/form-entry.js"
        }
        data-theme={"light"}
        data-lang={"en"}
      />
      <Text mb={4}>
        You can reach me at{" "}
        <Link href={"mailto:topher@getbessa.com"} fontWeight={"bold"}>
          topher@getbessa.com
        </Link>
        !
      </Text>
      <Flex direction={["column", "row"]}>
        {buttons.map((button) => (
          <Link href={"mailto:topher@getbessa.com"} key={button}>
            <Button mb={[4, 0]} mr={[0, 4]}>
              {button}
            </Button>
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
