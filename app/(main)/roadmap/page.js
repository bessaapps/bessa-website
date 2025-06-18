import { Container, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { customMetadata, title } from "@/utils/constants";
import { LinearClient } from "@linear/sdk";

export const metadata = customMetadata({
  metadataTitle: `Roadmap | ${title}`,
  metadataDescription:
    "Explore Bessa's LGBTQ social media roadmap! See what's next, share your ideas, and help shape the future of our inclusive queer community.",
  path: "/roadmap"
});

export default async function Roadmap() {
  const linearClient = new LinearClient({
    apiKey: process.env.NEXT_PUBLIC_LINEAR_API_KEY
  });

  const issues = await linearClient.issues();

  return (
    <Container maxW={"container.xl"} my={16}>
      <Heading as={"h1"} mb={4}>
        Roadmap
      </Heading>
      <Text mb={4}>
        Discover the future of Bessa with our dynamic roadmap! Bessa is
        committed to creating a vibrant, inclusive social media experience for
        LGBTQ individuals. From exciting new features to enhanced privacy tools,
        this roadmap outlines what&apos;s next on our journey to make Bessa the
        most welcoming queer community online. Stay connected and be part of
        shaping our inclusive future!
      </Text>
      <Heading mb={4}>Have an idea for Bessa?</Heading>
      <Text mb={8}>
        Bessa is for you! If you&apos;ve got a feature in mind, an improvement
        suggestion, or feedback to make our community even better, email{" "}
        <Text as={"span"} fontWeight={700}>
          <Link href={"mailto:topher@getbessa.com"}>topher@getbessa.com</Link>
        </Text>
        .
      </Text>
      {issues?.nodes?.map(async ({ id, title, labelIds, _state }) => {
        const state = await linearClient.workflowState(_state?.id);
        const label = await linearClient.issueLabel(labelIds?.[0]);

        return (
          <Flex key={id} align={"center"} gap={2}>
            <Text fontWeight={700} mr={2}>
              {title}
            </Text>
            <Tag bg={label?.color} color={"whiteAlpha.900"}>
              {label?.name}
            </Tag>
            <Tag bg={state?.color} color={"whiteAlpha.900"}>
              {state?.name}
            </Tag>
          </Flex>
        );
      })}
    </Container>
  );
}
