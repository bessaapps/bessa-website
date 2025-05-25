import {
  Container,
  Heading,
  Text,
  Link,
  AspectRatio,
  AlertDescription,
  AlertIcon,
  Alert,
  Box,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";
import Image from "next/image";
import Hero from "@/images/ai/firefly-2.jpg";
import { title, url } from "@/utils/constants";

export const metadata = {
  title: `Guidelines | ${title}`,
  description:
    "It's important to work together to keep this LGBTQ community both diverse, and safe. Bessa is fun and open-minded, some lines are drawn to specifically to weed out harmful and dangerous interactions. To keep things simple, be respectful! And don&apos;t be a troll.",
  openGraph: {
    title: `Guidelines | ${title}`,
    description:
      "It's important to work together to keep this LGBTQ community both diverse, and safe. Bessa is fun and open-minded, some lines are drawn to specifically to weed out harmful and dangerous interactions. To keep things simple, be respectful! And don&apos;t be a troll.",
    url: `${url}/guidelines`,
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

export default function Guidelines() {
  return (
    <>
      <Container maxW={"container.xl"} my={16}>
        <AspectRatio ratio={16 / 9}>
          <Image src={Hero} alt={"Bessa Guidelines"} />
        </AspectRatio>
      </Container>
      <Container maxW={"container.xl"} my={16}>
        <Heading as={"h1"} mb={4}>
          Guidelines
        </Heading>
        <Text mb={4}>
          Community-building isn&apos;t easy! But, it&apos;s important to work
          together to keep this LGBTQ community both diverse, and safe. Bessa is
          fun and open-minded, but some lines are drawn specifically to weed out
          harmful and dangerous interactions. To keep things simple, be
          respectful! And, don&apos;t be a troll! But here are a few more tips
          and tricks to help keep this a fun, diverse, and safe community.
        </Text>
        <Alert status={"info"} colorScheme={"secondary"} mb={4}>
          <AlertIcon />
          <AlertDescription>
            If you think any of the content you share may be sensitive to
            others, update your settings accordingly! Bessa reserves the right
            to remove your content or your profile from the app at any time
            under any circumstance.
          </AlertDescription>
        </Alert>
        <Heading mb={4}>Conduct</Heading>
        <Text mb={4}>
          Bessa is a vibrant online community built to foster fun, safety, and
          wellbeing for LGBTQ people. We stand for diversity and inclusivity,
          steering clear of corporate marketing spaces and upholding a strict
          no-tolerance policy for any form of discrimination, bullying, or harm.
          Illegal activity and spam are not condoned, ensuring that Bessa
          remains a secure and supportive environment for everyone.
        </Text>
        <Box spacing={2} mb={4}>
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
        <Heading mb={2}>Profile Pictures</Heading>
        <Text mb={4}>
          Profile pictures should be clear and recent images that show your
          face, helping to foster a genuine and trustworthy community. However,
          pictures that promote hate, violence, or the use of illegal drugs are
          not allowed, as well as any sexually explicit content. Impersonation
          of others is also strictly prohibited to ensure a safe and authentic
          environment for all members.
        </Text>
        <SimpleGrid columns={[1, 2]} gap={4} mb={4}>
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
        <Heading mb={2}>Posts, Places, Events, and Reviews</Heading>
        <Text mb={4}>
          To keep Bessa a fun and engaging space for LGBTQ people, posts should
          never contain hateful or violent content. Impersonating others,
          spreading misleading or false information, and sharing copyrighted
          content without proper rights are also strictly not allowed.
          Let&apos;s keep our posts positive, creative, and authentic for
          everyone!
        </Text>
        <SimpleGrid columns={[1, 2]} gap={4} mb={4}>
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
        <Heading mb={2}>Direct Messages</Heading>
        <Text mb={4}>
          Bessa prohibits the following types of content to ensure a safe and
          inclusive community: hate speech or expressions of hate, violent
          content or threats, harassment of any kind, promotion or encouragement
          of self-harm, and any illegal activities. These rules are in place to
          protect the wellbeing of all users and maintain a healthy, supportive
          environment.
        </Text>
        <SimpleGrid columns={[1, 2]} gap={4} mb={4}>
          <GridItem />
          <GridItem>
            <Text>🚫 Hate</Text>
            <Text>🚫 Violence</Text>
            <Text>🚫 Harassment</Text>
            <Text>🚫 Self-Harm</Text>
            <Text>🚫 Illegal</Text>
          </GridItem>
        </SimpleGrid>
        <Text>
          Have questions? Email{" "}
          <Text as={"b"}>
            <Link href={"mailto:topher@getbessa.com"}>topher@getbessa.com</Link>
          </Text>
        </Text>
      </Container>
    </>
  );
}
