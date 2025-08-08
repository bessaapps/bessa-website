import { Heading, Stack, Text } from "@chakra-ui/react";
import {
  customMetadata,
  formatTitle,
  title,
  pageTitles
} from "@/utils/constants";
import { LinearClient } from "@linear/sdk";
import Section from "@/components/Section";

export const metadata = customMetadata({
  metadataTitle: formatTitle(pageTitles.whatsNew),
  metadataDescription:
    "Discover the latest updates on Bessa, the gay social media app built for LGBTQ connection. Explore new features for messaging, profiles, and finding your queer community.",
  path: "/whats-new"
});

export default async function WhatsNew() {
  const linearClient = new LinearClient({
    apiKey: process.env.NEXT_PUBLIC_LINEAR_API_KEY
  });

  const issues = await linearClient.issues();

  return (
    <Section>
      <Heading as={"h1"} mb={4}>
        {pageTitles.whatsNew}
      </Heading>
      <Text mb={4}>
        Big things are happening on Bessa, the gay social media app made for
        real connection, not just scrolling. Recent updates include smoother
        profile editing and an upgraded feed that makes it easier to explore
        LGBTQ content and connect with local queer folks. Whether you&apos;re
        posting updates, discovering events, or finding your people, these
        changes make the Bessa experience more vibrant, personal, and engaging.
      </Text>
      <Text mb={4}>
        This isn&apos;t just an app refresh; it&apos;s part of Bessa&apos;s
        mission to grow a stronger LGBTQ social media space. As the best gay
        social media app for building queer community, Bessa now includes new
        tools for messaging, media sharing, and following other members.
        It&apos;s everything users love, now with even more ways to share
        stories, celebrate identity, and stay connected to the LGBTQ community,
        both online and IRL.
      </Text>
      <Stack>
        {issues?.nodes
          ?.filter(
            ({ _state }) =>
              _state?.id === "6592b1ef-6cbe-4d3e-a67a-807a194cd53a"
          )
          .sort((a, b) => {
            const dateA = a.completedAt;
            const dateB = b.completedAt;

            return dateB < dateA ? -1 : dateB > dateA ? 1 : 0;
          })
          ?.map(async ({ id, title }) => {
            return (
              <Text key={id} fontWeight={700}>
                {title}
              </Text>
            );
          })}
      </Stack>
    </Section>
  );
}
