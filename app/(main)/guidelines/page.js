import {
  Container,
  Heading,
  Text,
  Link,
  AspectRatio,
  AlertDescription,
  AlertIcon,
  Alert,
  Box
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
          Bessa is about creating a fun, safe, and healthy online community for
          LGBTQ people. Bessa values diversity, strength and wellbeing inside
          our communities, and spaces free of closed-minded corporations and
          marketing. Because of this, Bessa has a no-tolerance rule for
          discrimination, bullying, and harm. Bessa also does not condone
          illegal activity or spam.
        </Text>
        <Box spacing={2} mb={4}>
          <Text>
            🚫 Your account will be deleted immediately if you express
            discrimination, bullying, or harm against anyone regarding their
            sex, gender, sexual orientation, race, ethnicity, HIV status, age,
            nationality, or religion.
          </Text>
          <Text>
            🚫 The promotion of illegal drugs, illegal sexual acts, including
            escorting and massage, and any other illegal activity is not
            allowed.
          </Text>
          <Text>
            🚫 Excessive promotional content, including posts of any kind, or
            messages or the creation of new accounts is not allowed.
          </Text>
        </Box>
        <Heading mb={2}>Profile Pictures and Text</Heading>
        <Text mb={4}>
          Your profile and profile picture gives you an identity on the app.
          Text that is descriptive and accurate, and pictures that represent
          your likeness, are clear, and are recent, help you stand out on the
          app allowing you build LGBTQ connections.
        </Text>
        <Box spacing={2} mb={4}>
          <Text>✅ Show us your face; not your pets!</Text>
          <Text>✅ Use a clear and recent profile picture.</Text>
          <Text>✅ Update your profile text accurately and regularly.</Text>
          <Text>
            🚫 Your profile picture should not be sexually suggestive or depict
            genitalia.
          </Text>
          <Text>
            🚫 Your profile picture or text should not depict or describe
            violence towards anyone.
          </Text>
          <Text>
            🚫 Your profile picture or text should not impersonate anyone.
          </Text>
          <Text>
            🚫 Symbols, text, or images of racism, intolerance, or bigotry are
            not allowed.
          </Text>
          <Text>
            🚫 Ads or any sort of advertising is not allowed as a profile
            picture.
          </Text>
        </Box>
        <Heading mb={4}>Posts, Places, Events, and Reviews</Heading>
        <Text mb={4}>
          Bessa gives you plenty of opportunity to share interesting content for
          other members. Posts you make should be in the interest of having fun
          and building a social and safe LGBTQ community. List your places,
          events, and reviews in the interest of helping other find safe, fun,
          and beneficial LGBTQ resources. This included user-generated text,
          audio, images, and videos.
        </Text>
        <Box spacing={2} mb={4}>
          <Text>
            ✅ Post content that&apos;s fun and interesting to LGBTQ people!
          </Text>
          <Text>
            🚫 Your content should not express violence towards anyone.
          </Text>
          <Text>
            🚫 Violent, racist, or intolerant material is not allowed.
          </Text>
          <Text>🚫 Your content should not be false or misleading.</Text>
          <Text>🚫 Copyrighted content is not allowed.</Text>
        </Box>
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
