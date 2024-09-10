"use client";

import {
  Container,
  Heading,
  Text,
  ListItem,
  List,
  ListIcon,
  Link,
  AspectRatio
} from "@chakra-ui/react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import Image from "next/image";
import Article from "@/images/guidelines.webp";

export default function Guidelines() {
  return (
    <>
      <Container maxW={"container.lg"} my={16}>
        <AspectRatio ratio={16 / 9}>
          <Image src={Article} alt={"Guidelines"} style={{ borderRadius: 8 }} />
        </AspectRatio>
      </Container>
      <Container maxW={"container.lg"} my={16}>
        <Heading as={"h1"} mb={4}>
          Guidelines
        </Heading>
        <Text mb={4}>
          Community-building isn&apos;t easy! But, it&apos;s important to work
          together to keep this LGBTQ community both diverse, and safe. Bessa is
          fun and open-minded, some lines are drawn to specifically to weed out
          harmful and dangerous interactions. To keep things simple, be
          respectful! And, don&apos;t be a troll! But here are a few more tips
          and tricks to help keep this a fun, diverse, and safe community.
        </Text>
        <Text fontWeight={"bold"} mb={4}>
          If you think any of the content you share may be sensitive to others,{" "}
          update your settings accordingly! Bessa reserves the right to remove
          your content or your profile from the app at any time under any
          circumstance.
        </Text>
        <Heading mb={2}>Profile Pictures</Heading>
        <Text mb={4}>
          A profile pictures gives you an identity on the app. And, pictures
          that represent your likeness, are clear, and are recent help you stand
          out on the app helping you build LGBTQ connections.
        </Text>
        <List spacing={2} mb={4}>
          <ListItem>
            <ListIcon as={FiCheckCircle} color={"green.500"} />
            Profile pictures should be of you and not your Cat!
          </ListItem>
          <ListItem>
            <ListIcon as={FiCheckCircle} color={"green.500"} />
            Your profile picture should be clear and recent.
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
            Your profile picture should not be sexually suggestive or depict
            genitalia.
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
            Your profile picture should not depict violence towards anyone.
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
            Your profile picture should not impersonate anyone.
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
            Symbols or images of racism, intolerance, or bigotry are not
            allowed.
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
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
            <ListIcon as={FiCheckCircle} color={"green.500"} />
            Post content that&apos;s fun and interesting to LGBTQ people!
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
            Your content should not express violence towards anyone.
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
            Violent, racist, or intolerant material is not allowed.
          </ListItem>
          <ListItem>
            <ListIcon as={FiXCircle} color={"red.500"} />
            Your content should not be false or misleading.
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
