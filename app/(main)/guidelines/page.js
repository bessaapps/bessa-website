"use client";

import {
  Container,
  Heading,
  Text,
  ListItem,
  List,
  ListIcon,
  Link,
  AspectRatio,
  AlertDescription,
  AlertIcon,
  Alert
} from "@chakra-ui/react";
import Image from "next/image";
import Hero from "@/images/ai/firefly-2.jpg";
import { Ban, Check } from "lucide-react";

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
        <List spacing={2} mb={4}>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Your account will be deleted immediately if you express
            discrimination, bullying, or harm against anyone regarding their
            sex, gender, sexual orientation, race, ethnicity, HIV status, age,
            nationality, or religion.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            The promotion of illegal drugs, illegal sexual acts, including
            escorting and massage, and any other illegal activity is not
            allowed.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Excessive promotional content, including posts of any kind, or
            messages or the creation of new accounts is not allowed.
          </ListItem>
        </List>
        <Heading mb={2}>Profile Pictures and Text</Heading>
        <Text mb={4}>
          Your profile and profile picture gives you an identity on the app.
          Text that is descriptive and accurate, and pictures that represent
          your likeness, are clear, and are recent, help you stand out on the
          app allowing you build LGBTQ connections.
        </Text>
        <List spacing={2} mb={4}>
          <ListItem>
            <ListIcon as={Check} color={"green.500"} />
            Show us your face; not your pets!
          </ListItem>
          <ListItem>
            <ListIcon as={Check} color={"green.500"} />
            Use a clear and recent profile picture.
          </ListItem>
          <ListItem>
            <ListIcon as={Check} color={"green.500"} />
            Update your profile text accurately and regularly.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Your profile picture should not be sexually suggestive or depict
            genitalia.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Your profile picture or text should not depict or describe violence
            towards anyone.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Your profile picture or text should not impersonate anyone.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Symbols, text, or images of racism, intolerance, or bigotry are not
            allowed.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Ads or any sort of advertising is not allowed as a profile picture.
          </ListItem>
        </List>
        <Heading mb={4}>Posts, Places, Events, and Reviews</Heading>
        <Text mb={4}>
          Bessa gives you plenty of opportunity to share interesting content for
          other members. Posts you make should be in the interest of having fun
          and building a social and safe LGBTQ community. List your places,
          events, and reviews in the interest of helping other find safe, fun,
          and beneficial LGBTQ resources. This included user-generated text,
          audio, images, and videos.
        </Text>
        <List spacing={2} mb={4}>
          <ListItem>
            <ListIcon as={Check} color={"green.500"} />
            Post content that&apos;s fun and interesting to LGBTQ people!
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Your content should not express violence towards anyone.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Violent, racist, or intolerant material is not allowed.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Your content should not be false or misleading.
          </ListItem>
          <ListItem>
            <ListIcon as={Ban} color={"red.500"} />
            Copyrighted content is not allowed.
          </ListItem>
        </List>
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
