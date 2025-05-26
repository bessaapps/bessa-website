import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { Container, Flex, Heading, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import { title, url } from "@/utils/constants";
import { unstable_cache } from "next/cache";

export const metadata = {
  title: `Roadmap | ${title}`,
  description:
    "Explore Bessa's LGBTQ social media roadmap! See what's next, share your ideas, and help shape the future of our inclusive queer community.",
  openGraph: {
    title: `Roadmap | ${title}`,
    description:
      "Explore Bessa's LGBTQ social media roadmap! See what's next, share your ideas, and help shape the future of our inclusive queer community.",
    url: `${url}/roadmap`,
    siteName: title,
    images: [
      {
        url: `${url}/images/social.png`,
        width: 800,
        height: 600
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const getData = unstable_cache(
  async () =>
    await axios
      .get("https://api.github.com/repos/bessaapps/bessa/issues", {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        }
      })
      .then((response) => response?.data),
  ["issues"],
  { revalidate: 3600, tags: ["issues"] }
);

export default async function Roadmap() {
  const issues = await getData();

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
      {issues?.map(({ id, title, labels }) => (
        <Flex key={id} align={"center"} gap={2}>
          <Text fontWeight={700} mr={2}>
            {title}
          </Text>
          {labels?.map(({ id, name, color }) => (
            <Tag key={id} bg={`#${color}`} color={"whiteAlpha.900"}>
              {name?.toLowerCase()}
            </Tag>
          ))}
        </Flex>
      ))}
    </Container>
  );
}
