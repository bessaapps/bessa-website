import {
  Container,
  Heading,
  Text,
  ListItem,
  UnorderedList,
  Button,
  Flex,
  Stack,
  Center
} from "@chakra-ui/react";
import { sectionHeight, customMetadata, titles } from "@/utils/constants";
import Hero from "@/components/Hero";
import MediaRight from "@/components/MediaRight";
import Link from "next/link";
import Footer from "@/components/navigation/Footer";
import MediaLeft from "@/components/MediaLeft";
import LeftImage from "@/images/stock/donate.webp";
import Image from "next/image";

export const metadata = customMetadata({
  metadataTitle: titles.donate,
  metadataDescription:
    "Support Bessa, the gay social media app built for LGBTQ connection and community. Your donation helps us grow queer spaces, add features, and keep this inclusive social platform thriving.",
  path: "/donate",
  imagePath: "/images/stock/pride-flag.jpg"
});

export default function Donate() {
  return (
    <>
      <Hero
        heading={titles.donate}
        lead={"Donate"}
        bgImage={"/images/stock/pride-flag.jpg"}
      />
      <MediaRight
        lead={
          "Bessa is an LGBTQ social networking app for real connection instead of clicks or swipes. Your support helps fund queer apps made by and for our community."
        }
        bottomContent={
          <Flex w={"100%"} gap={2} flexWrap={"wrap"}>
            <Link href={"https://buymeacoffee.com/getbessa"} target={"_blank"}>
              <Button colorScheme={"primary"} size={"lg"}>
                Donate
              </Button>
            </Link>
            <Link
              href={"https://buymeacoffee.com/getbessa/membership"}
              target={"_blank"}
            >
              <Button colorScheme={"primary"} size={"lg"}>
                Sponsor
              </Button>
            </Link>
          </Flex>
        }
        bgImage={"/images/stock/photo-of-a-man-carrying-another-man.jpg"}
      >
        <Text>
          Bessa is a queer-led LGBTQ social networking app built for connection,
          creativity, and community. It&apos;s a place to post and share LGBTQ
          content, find LGBTQ friends online, and connect with local queer
          people all in one inclusive social platform. Instead of swipes, Bessa
          centers real interaction and celebrates the full spectrum of queer
          life.
        </Text>
        <Text>
          When you support Bessa, you{" "}
          <strong>support queer community apps</strong> that reflect our values.
          Your membership helps fund queer apps that prioritize people over
          profit and visibility over virality. Together, we can help build LGBTQ
          social apps that uplift our stories, amplify queer creators, and carve
          out space for joy, belonging, and collaboration in the digital world.
        </Text>
      </MediaRight>
      <Container maxW={"container.xl"}>
        <Center minH={sectionHeight} py={[16, 32, 64]}>
          <Stack gap={4}>
            <Heading>
              When you support queer community apps like Bessa, you&apos;re
              helping build the future of LGBTQ digital connection.
            </Heading>
            <Text>
              When you support queer community apps like Bessa, you&apos;re
              helping build the future of LGBTQ digital connection. Your
              membership directly funds the development of new features that
              make the app more interactive, accessible, and community-driven.
              From enhanced messaging tools to curated event listings and
              creator highlights, your support makes it possible to expand what
              Bessa offers and ensure it reflects the real needs of our
              community.
            </Text>
            <Text>
              More than just an app, Bessa is part of a growing movement to fund
              queer apps and help build LGBTQ social apps that uplift our
              voices. Every contribution helps us spotlight more queer stories,
              connect more LGBTQ people online, and create spaces where our
              culture can thrive without compromise. Supporting Bessa means
              co-creating queer tech with heart where community isn&apos;t just
              included, it&apos;s the whole point.
            </Text>
          </Stack>
        </Center>
      </Container>
      <Container maxW={"container.xl"}>
        <Center minH={sectionHeight} py={[16, 32, 64]}>
          <Stack gap={4}>
            <Heading>Membership Levels & Perks</Heading>
            <Text>
              Your support keeps Bessa growing—and we want to give something
              back. When you become a member, you&apos;re not just helping fund
              queer apps; you&apos;re joining a collective effort to help build
              LGBTQ social apps rooted in visibility, connection, and joy.
            </Text>
            <Text>
              Choose the level that fits you best and enjoy exclusive perks
              designed to highlight your role in shaping Bessa:
            </Text>
            <Heading as={"h3"}>Supporter – $3/month</Heading>
            <Text>For anyone who wants to chip in and stay in the loop.</Text>
            <UnorderedList>
              <ListItem>Early access to new features</ListItem>
              <ListItem>Your name listed on our public thank-you page</ListItem>
            </UnorderedList>
            <Heading as={"h3"}>Member – $5/month</Heading>
            <Text>For those helping shape the future of queer tech.</Text>
            <UnorderedList>
              <ListItem>Everything in Supporter</ListItem>
              <ListItem>Shoutout on Bessa&apos;s social media</ListItem>
            </UnorderedList>
            <Heading as={"h3"}>Trailblazer – $10/month</Heading>
            <Text>For community champions and believers.</Text>
            <UnorderedList>
              <ListItem>Everything in Member</ListItem>
              <ListItem>Featured in our Supporter Spotlight series</ListItem>
            </UnorderedList>
          </Stack>
        </Center>
      </Container>
      <MediaLeft
        heading={
          "Support Gay Social Media Built by the Queer Community, Not Big Tech"
        }
        image={<Image src={LeftImage} alt={titles.donate} />}
      >
        <Text>
          When you become a member, you&apos;re not just donating; you&apos;re
          helping fund queer apps that center real stories, meaningful
          connection, and the future of LGBTQ digital life. Your support helps
          us build new features, expand visibility for queer creators, and
          create more intentional spaces for community to thrive online. Every
          membership directly contributes to our mission to help build LGBTQ
          social apps that reflect who we are.
        </Text>
        <Text>
          This is your chance to be part of something bigger. Whether you join
          as a Supporter, Member, or Trailblazer, you&apos;re co-creating queer
          tech from the ground up. If you believe in the power of LGBTQ
          connection, visibility, and storytelling, now&apos;s the time to show
          it.
        </Text>
      </MediaLeft>
      <Footer
        buttons={[
          {
            anchor: "Donate",
            href: "https://buymeacoffee.com/getbessa"
          },
          {
            anchor: "Sponsor",
            href: "https://buymeacoffee.com/getbessa/membership"
          }
        ]}
      >
        Support the space where we show up as our full selves today
      </Footer>
    </>
  );
}
