import { Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import {
  customMetadata,
  formatTitle,
  title,
  pageTitles
} from "@/utils/constants";
import { LinearClient } from "@linear/sdk";
import Section from "@/components/Section";

export const metadata = customMetadata({
  metadataTitle: formatTitle(pageTitles.roadmap),
  metadataDescription:
    "Explore upcoming features on Bessa, the best LGBTQ social media app. See what's next for this inclusive social platform and help shape the future of queer connection.",
  path: "/roadmap"
});

export default async function Roadmap() {
  const linearClient = new LinearClient({
    apiKey: process.env.NEXT_PUBLIC_LINEAR_API_KEY
  });

  const issues = await linearClient.issues();

  return (
    <Section>
      <Heading as={"h1"} mb={4}>
        {pageTitles.roadmap}
      </Heading>
      <Text mb={4}>
        Bessa isn&apos;t just another gay social media app. It&apos;s a growing,
        community-powered movement. The roadmap outlines what&apos;s next for
        this LGBTQ social networking app, from new ways to post and share LGBTQ
        content to features that help you find LGBTQ friends online and connect
        with local LGBTQ people. Everything being built is shaped by your
        feedback and grounded in the belief that queer-friendly social apps
        should prioritize connection.
      </Text>
      <Text mb={4}>
        As an inclusive social platform, Bessa is constantly evolving. Whether
        it&apos;s improving LGBTQ messaging and media sharing, launching better
        tools for trans and nonbinary users, or adding location-based event
        discovery, each update brings us closer to a richer, more dynamic space
        for queer connection. This page is your front-row seat to everything
        we&apos;re working on. And you&apos;re always invited to help shape what
        comes next. Just email{" "}
        <Text as={"span"} fontWeight={700}>
          <Link href={"mailto:topher@getbessa.com"}>topher@getbessa.com</Link>
        </Text>
        .
      </Text>
      <Stack>
        {issues?.nodes
          ?.filter(
            ({ _state }) =>
              _state?.id === "8d2aed5e-8d0a-473a-9276-7111c89d7c55"
          )
          .sort((a, b) => {
            const stateA = a.labelIds?.[0];
            const stateB = b.labelIds?.[0];

            return stateB > stateA ? -1 : stateB < stateA ? 1 : 0;
          })
          ?.map(async ({ id, title, labelIds }) => {
            const label = await linearClient.issueLabel(labelIds?.[0]);

            return (
              <Flex key={id} align={"center"} gap={2}>
                <Text fontWeight={700} mr={2}>
                  {title}
                </Text>
                <Tag bg={label?.color} color={"whiteAlpha.900"}>
                  {label?.name}
                </Tag>
              </Flex>
            );
          })}
      </Stack>
    </Section>
  );
}
