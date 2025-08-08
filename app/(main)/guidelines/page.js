import {
  Container,
  Heading,
  Text,
  Box,
  SimpleGrid,
  GridItem,
  Center,
  Stack
} from "@chakra-ui/react";
import {
  customMetadata,
  formatTitle,
  sectionHeight,
  titles
} from "@/utils/constants";
import Hero from "@/components/Hero";
import MediaRight from "@/components/MediaRight";

export const metadata = customMetadata({
  metadataTitle: formatTitle(titles.guidelines),
  metadataDescription:
    "Learn the community guidelines for Bessa, the gay social media app built for real LGBTQ connection. Find out what's encouraged, what'’'s not allowed, and how to help keep the vibe strong.",
  path: "/guidelines",
  imagePath: "/images/stock/guidelines-1.jpg"
});

export default function Guidelines() {
  return (
    <>
      <Hero
        heading={titles.guidelines}
        lead={"Guidelines (EULA)"}
        bgImage={"/images/stock/guidelines-1.jpg"}
      />
      <MediaRight
        lead={
          "Community-building isn't easy, but it's vital! Let's work together to keep Bessa's LGBTQ community safer and inclusive. Respect each other and don't feed the trolls. Here are a few quick tips to help create a fun, diverse, and safe space for everyone."
        }
        bgImage={"/images/stock/guidelines-2.avif"}
      >
        <Text>
          Bessa reserves the right to remove your content or your profile from
          the app at any time under any circumstance.
        </Text>
        <Text>
          Bessa is a vibrant online community built to foster fun, safety, and
          wellbeing for LGBTQ people. We stand for diversity and inclusivity,
          steering clear of corporate marketing spaces and upholding a strict
          no-tolerance policy for any form of discrimination, bullying, or harm.
          Illegal activity and spam are not condoned, ensuring that Bessa
          remains a secure and supportive environment for everyone.
        </Text>
        <Box spacing={2}>
          <Text>
            🚫 Accounts will be deleted immediately for any discriminatory or
            harmful behavior based on sex, gender, sexual orientation, race,
            ethnicity, HIV status, age, nationality, or religion.
          </Text>
          <Text>
            🚫 Illegal drugs, illegal sexual acts (including escorting and
            massage), and any other unlawful activities are strictly prohibited.
          </Text>
          <Text>
            🚫 Excessive self-promotion, spam, or repeated creation of new
            accounts is not allowed.
          </Text>
        </Box>
      </MediaRight>
      <Container maxW={"container.xl"}>
        <Center minH={sectionHeight} py={[16, 32, 64]}>
          <Stack gap={4}>
            <Heading>Profile Pictures</Heading>
            <Text>
              Profile pictures should be clear and recent images that show your
              face, helping to foster a genuine and trustworthy community.
              However, pictures that promote hate, violence, or the use of
              illegal drugs are not allowed, as well as any sexually explicit
              content. Impersonation of others is also strictly prohibited to
              ensure a safe and authentic environment for all members.
            </Text>
            <SimpleGrid columns={[1, 2]} gap={4}>
              <GridItem>
                <Text>✅ A face; not your pet!</Text>
                <Text>✅ Clear and recent</Text>
              </GridItem>
              <GridItem>
                <Text>🚫 Hate</Text>
                <Text>🚫 Violence</Text>
                <Text>🚫 Sexually explicit content</Text>
                <Text>🚫 Drugs</Text>
                <Text>🚫 Impersonation</Text>
              </GridItem>
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
      <Container maxW={"container.xl"}>
        <Center minH={sectionHeight} py={[16, 32, 64]}>
          <Stack gap={4}>
            <Heading>Posts, Places, Events, and Reviews</Heading>
            <Text>
              To keep Bessa a fun and engaging space for LGBTQ people, posts
              should never contain hateful or violent content. Impersonating
              others, spreading misleading or false information, and sharing
              copyrighted content without proper rights are also strictly not
              allowed. Let&apos;s keep our posts positive, creative, and
              authentic for everyone!
            </Text>
            <SimpleGrid columns={[1, 2]} gap={4}>
              <GridItem>
                <Text>✅ Positivity</Text>
                <Text>✅ Creativity</Text>
                <Text>✅ Authenticity</Text>
              </GridItem>
              <GridItem>
                <Text>🚫 Hate</Text>
                <Text>🚫 Violence</Text>
                <Text>🚫 Impersonation</Text>
                <Text>🚫 Misleading</Text>
                <Text>🚫 Copyright content</Text>
              </GridItem>
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
      <Container maxW={"container.xl"}>
        <Center minH={sectionHeight} py={[16, 32, 64]}>
          <Stack gap={4}>
            <Heading>Direct Messages</Heading>
            <Text>
              Bessa prohibits the following types of content to ensure a safe
              and inclusive community: hate speech or expressions of hate,
              violent content or threats, harassment of any kind, promotion or
              encouragement of self-harm, and any illegal activities. These
              rules are in place to protect the wellbeing of all users and
              maintain a healthy, supportive environment.
            </Text>
            <SimpleGrid columns={[1, 2]} gap={4}>
              <GridItem />
              <GridItem>
                <Text>🚫 Hate</Text>
                <Text>🚫 Violence</Text>
                <Text>🚫 Harassment</Text>
                <Text>🚫 Self-Harm</Text>
                <Text>🚫 Illegal</Text>
              </GridItem>
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
    </>
  );
}
