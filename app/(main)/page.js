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
  Center
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
                Building Queer Community and Connection
              </Heading>
              <Text mb={8}>
                Bessa is a <Text as={"strong"}>gay social media app</Text> and
                inclusive community of all genders, colors, shapes, sizes, and
                abilities. Bessa is a hub for queer connections, places, and
                events.
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
        <Box bg={"gray.900"} minH={sectionHeight}>
          <Center minH={"calc(100vh - 129px)"} p={[8, 32]}>
            <Heading
              as={"h3"}
              lineHeight={1.5}
              color={"primary.50"}
              textAlign={"center"}
              mb={4}
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
                matter. It’s more than just an LGBTQ social media app. It’s your
                space to be seen, be heard, and be yourself.
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
            <Flex gap={4} mb={8}>
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
            likes or followers; it’s about shared experiences and lasting
            connections through an inclusive social platform designed with
            community in mind.
          </Text>
        </MediaRight>
        <MediaLeft
          heading={"Discover your Gayborhood"}
          image={<Image src={Mockup3} alt={title} />}
        >
          <Text>
            Bessa, the LGBTQ social networking app, helps you discover
            queer-friendly places wherever you are such as laid-back coffee
            shops, lively nightlife, and community centers. Every location is
            recommended and reviewed by LGBTQ people who know what it means to
            feel welcome.
          </Text>
          <Text>
            You can easily find new hangouts or share your own favorite spots to
            help others explore their communities with confidence. It&apos;s
            more than just a list; it&apos;s a living map built by the
            community, for the community. Whether you&apos;re traveling or
            looking for a new local favorite, Bessa connects you to spaces that
            celebrate all identities and experiences.
          </Text>
        </MediaLeft>
        <Section>
          <Heading mb={4}>Discover More, Connect Deeper, Pay Nothing!</Heading>
          <Text>
            Bessa is the LGBTQ social networking app that lets you get started
            exploring and building real connections without paying a dime.
            Unlike Grindr, Twitter, Scruff, HER, Taimi, Walla, Tinder, Hinge, or
            Jack&apos;d, Bessa is free. There aren&apos;t even any annoying ads!
          </Text>
          <Text>
            But Bessa isn&apos;t just another app to scroll through; i&apos;s
            packed with unique community-building features that apps like
            Twitter and Grindr don&apos;t offer. Here, you can truly engage with
            others and discover queer-friendly spaces and events, all while
            connecting with people who genuinely get you.
          </Text>
        </Section>
        <MediaLeft
          heading={"Find your Vibe"}
          image={<Image src={Mockup4} alt={title} />}
        >
          <Text>
            Bessa, the LGBTQ social networking app, lets you browse upcoming
            queer events near you so you never miss out on community gatherings,
            parties, or activism. You can also post your own events to invite
            others and help build a stronger, more connected community.
          </Text>
          <Text>
            With Bessa&apos;s events listings, organizing and discovering
            inclusive spaces has never been easier. This LGBTQ social networking
            app puts the power in your hands to create meaningful experiences
            and bring people together.
          </Text>
        </MediaLeft>
        <Section>
          <Heading mb={4}>Why fit in when you can log on and belong?</Heading>
          <Text>
            Bessa is the free LGBTQ social networking app built by and for our
            community. Find friends, discover queer-friendly spots, and show up
            for events. Whether you&apos;re looking for chosen fam, a new
            hangout, or a reason to get out and connect, Bessa&apos;s got you.
            Download Bessa today and start building the community you&apos;ve
            always wanted.
          </Text>
          <Flex gap={4} flexWrap={"wrap"}>
            {appStores.map((store) => (
              <Link key={store.href} href={store.href}>
                <Button colorScheme={"primary"} size={"lg"} w={["100%", 140]}>
                  <Flex mr={2}>{store.icon}</Flex>
                  {store.name}
                </Button>
              </Link>
            ))}
          </Flex>
        </Section>
        <Section>
          <Heading mb={4}>Loving Bessa?</Heading>
          <Text>
            Help us grow the vibe! If Bessa has made a difference for you, leave
            a review on the App Store or Google Play. It helps more people find
            this amazing LGBTQ social media app. And don&apos;t keep it to
            yourself. Tell your friends, your group chat, your chosen fam. The
            more of us here, the better it gets!
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
