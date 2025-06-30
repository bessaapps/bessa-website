import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Highlight,
  Heading,
  Link,
  SimpleGrid,
  Text,
  Divider,
  Center,
  Stack
} from "@chakra-ui/react";
import Mockup1 from "../../images/mockups/1.png";
import Mockup2 from "../../images/mockups/2.png";
import Mockup3 from "../../images/mockups/3.png";
import Mockup4 from "../../images/mockups/4.png";
import Image from "next/image";
import {
  appStores,
  customMetadata,
  description,
  jsonLd,
  sectionHeight,
  title
} from "@/utils/constants";
import MediaRight from "@/components/MediaRight";
import MediaLeft from "@/components/MediaLeft";
import Section from "@/components/Section";

export const metadata = customMetadata({
  metadataTitle: title,
  metadataDescription: description,
  imagePath: "/images/social.png"
});

export default async function Home() {
  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <SimpleGrid columns={[1, 4]} alignItems={"center"} gap={8}>
            <GridItem w={["100%", "90%"]} colSpan={[1, 2]}>
              <Heading as={"h1"} mb={4}>
                Your New Favorite Queer Community
              </Heading>
              <Text mb={8}>
                Bessa is a gay social media app and inclusive community of all
                genders, colors, shapes, sizes, and abilities. Bessa is a hub
                for queer connections, places, and events.
              </Text>
              <Flex align={"center"} gap={8} h={"100px"}>
                <Box>
                  <Heading as={"h3"} textAlign={"center"}>
                    5
                  </Heading>
                  <Text textAlign={"center"}>Star Rating</Text>
                </Box>
                <Center height={"50px"}>
                  <Divider
                    orientation={"vertical"}
                    borderColor={"gray.900"}
                    borderWidth={1}
                  />
                </Center>
                <Box>
                  <Heading as={"h3"} textAlign={"center"}>
                    1K+
                  </Heading>
                  <Text textAlign={"center"}>Downloads</Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Image src={Mockup1} alt={"LGBTQ Social Networking App Mockup"} />
            </GridItem>
            <GridItem>
              <Image src={Mockup2} alt={"LGBTQ Social Networking App Mockup"} />
            </GridItem>
          </SimpleGrid>
        </Container>
        <Box bg={"gray.900"}>
          <Center minH={sectionHeight} p={[8, 32]}>
            <Heading
              as={"h3"}
              lineHeight={1.5}
              color={"primary.50"}
              textAlign={"center"}
              fontSize={"1.5rem !important"}
            >
              <Highlight
                query={["connections", "community"]}
                styles={{
                  color: "secondary.400"
                }}
              >
                Welcome to Bessa, the gay social media app built by LGBTQ people
                for the LGBTQ community. Bessa helps you make real connections,
                discover queer-friendly places, and find events that truly
                matter. It&apos;s more than just an LGBTQ social media app.
                It&apos;s your space to be seen, be heard, and be yourself.
              </Highlight>
            </Heading>
          </Center>
        </Box>
        <MediaRight
          lead={
            "Bessa is a gay social media app designed for real connection, not just endless scrolling. As an LGBTQ social media app, it helps you find friends, chosen family, and a supportive community through shared experiences and authentic interaction."
          }
          bgImage={"/images/stock/main.jpg"}
          bottomContent={
            <Flex gap={4}>
              {appStores.map((store) => (
                <Link key={store.href} href={store.href}>
                  <Button colorScheme={"primary"} size={"lg"} w={140}>
                    <Flex mr={2}>{store.icon}</Flex>
                    {store.name}
                  </Button>
                </Link>
              ))}
            </Flex>
          }
        >
          <Text>
            Bessa is more than just a place to scroll. It&apos;s a gay social
            media app where real connections happen. Whether you&apos;re looking
            for friends, chosen family, or a supportive queer community, Bessa
            helps you find your people and feel at home.
          </Text>
          <Text>
            As an LGBTQ social media app, Bessa is built to bring queer folks
            together in meaningful, authentic ways. It&apos;s not about chasing
            likes or followers; it&apos;s about shared experiences and lasting
            connections through an inclusive social platform designed with
            community in mind.
          </Text>
        </MediaRight>
        <Box>
          <Center minH={sectionHeight} p={[8, 64]}>
            <Stack>
              <Text fontSize={"1.5rem"} lineHeight={1.5} textAlign={"center"}>
                &ldquo;Created by a team of the community, for community &
                allies, an app thoughtfully created to bring people together for
                fun times and new connections.&rdquo;
              </Text>
              <Text textAlign={"right"}>May 20, 2025 - Blackunik0rn</Text>
            </Stack>
          </Center>
        </Box>
        <MediaLeft
          heading={"Discover your Gayborhood"}
          image={<Image src={Mockup3} alt={title} />}
        >
          <Text>
            Bessa is the gay social media app that makes it easy to find
            queer-friendly places wherever you go. Whether you&apos;re looking
            for a chill café, a lively bar, or a welcoming community space,
            Bessa has listings recommended and reviewed by LGBTQ people
            who&apos;ve actually been there. It&apos;s all about finding spots
            where you can relax, connect, and feel like you belong.
          </Text>
          <Text>
            With Bessa, the gay social media app, you can easily discover new
            hangouts or share your favorite queer-friendly spots to help others
            explore their communities with confidence. It&apos;s more than just
            a directory—it&apos;s a living map shaped by LGBTQ people, for LGBTQ
            people. Whether you&apos;re traveling or searching for a new local
            favorite, Bessa connects you to inclusive spaces that celebrate
            queer identities and lived experiences.
          </Text>
        </MediaLeft>
        <Section>
          <Heading mb={4}>Free, Fun, and Full of Queer Community</Heading>
          <Text>
            Bessa is the gay social media app that&apos;s completely free to
            use, with no forced subscriptions. Unlike many platforms that
            prioritize dating, hookups, or ads, Bessa is all about community.
            It&apos;s a space to post and share LGBTQ content, connect with
            local LGBTQ people, and build lasting friendships without swiping or
            algorithms getting in the way.
          </Text>
          <Text>
            What makes Bessa different from Grindr, Twitter, Scruff, HER, Taimi,
            Walla, Tinder, Hinge, or Jack&apos;d is its focus on genuine queer
            connection. Bessa isn&apos;t a dating app; it&apos;s an LGBTQ social
            media app designed to help you find LGBTQ friends online, discover
            queer events, and explore LGBTQ-vetted places. It&apos;s a
            queer-friendly social app where everyone can show up as their full
            self and actually feel seen.
          </Text>
        </Section>
        <MediaLeft
          heading={"Party with your People"}
          image={<Image src={Mockup4} alt={title} />}
        >
          <Text>
            Bessa is the gay social media app that helps you stay connected to
            the LGBTQ community by browsing upcoming queer events near you. From
            parties to protests, Bessa makes it easy to find gatherings that
            matter and even post your own to invite others. It&apos;s all about
            building a stronger, more connected LGBTQ social network, one event
            at a time.
          </Text>
          <Text>
            With Bessa&apos;s event listings, the gay social media app makes it
            easier than ever to discover and organize inclusive queer spaces.
            Bessa puts the power in your hands to create meaningful experiences,
            share your own events, and bring LGBTQ people together in real life.
          </Text>
        </MediaLeft>
        <Section>
          <Heading mb={4}>Drop a Review and Tell your Friends</Heading>
          <Text>
            Help us grow the vibe on the gay social media app everyone’s talking
            about! If Bessa has made a difference for you, leave a review on the
            App Store or Google Play. It helps more people discover this LGBTQ
            social media app built for real queer connection. And don’t keep it
            to yourself. Tell your friends, your group chat, and your chosen
            fam. The more LGBTQ people who join Bessa, the better and more
            vibrant our community becomes.
          </Text>
          <Flex gap={4} flexWrap={"wrap"}>
            <Link
              href={
                "https://apps.apple.com/app/apple-store/id6471383138?action=write-review"
              }
            >
              <Button colorScheme={"primary"} size={"lg"} w={240}>
                Review on App Store
              </Button>
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.bessa.bessa"
              }
            >
              <Button colorScheme={"primary"} size={"lg"} w={240}>
                Review on Google Play
              </Button>
            </Link>
          </Flex>
        </Section>
      </>
    </section>
  );
}
