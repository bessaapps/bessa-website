import {
  Text,
  Link,
  Button,
  Flex,
  Center,
  Stack,
  Heading,
  Container
} from "@chakra-ui/react";
import { jsonLd, sectionHeight, title, url } from "@/utils/constants";
import Hero from "@/components/Hero";
import MediaRight from "@/components/MediaRight";
import MediaLeft from "@/components/MediaLeft";
import LeftImage from "@/images/stock/about.jpg";
import Image from "next/image";

export const metadata = {
  title: "Bessa | A Gay Social Media App for Inclusive LGBTQ Connection",
  description:
    "Discover Bessa, a gay social media app designed for real LGBTQ connection. Built by a queer developer, Bessa is an inclusive social platform where you can post, message, and share with a diverse global community.",
  openGraph: {
    title: "Bessa | A Gay Social Media App for Inclusive LGBTQ Connection",
    description:
      "Discover Bessa, a gay social media app designed for real LGBTQ connection. Built by a queer developer, Bessa is an inclusive social platform where you can post, message, and share with a diverse global community.",
    url: `${url}/about`,
    images: [
      {
        url: `${url}/images/stock/gay-community.jpg`
      }
    ]
  },
  twitter: {
    title: "Bessa | A Gay Social Media App for Inclusive LGBTQ Connection",
    description:
      "Discover Bessa, a gay social media app designed for real LGBTQ connection. Built by a queer developer, Bessa is an inclusive social platform where you can post, message, and share with a diverse global community.",
    images: {
      url: `${url}/images/stock/gay-community.jpg`,
      alt: `About ${title}`
    }
  }
};

export default function About() {
  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <Hero
        heading={"Gay Social Media for Real LGBTQ Community Building"}
        lead={"Building Belonging with Gay Social Media"}
        bgImage={"/images/stock/gay-community.jpg"}
      />
      <MediaRight
        lead={
          "Bessa is a gay social media app that helps you connect with both new and familiar faces in LGBTQ communities. As an inclusive social platform, it’s built to make discovering, posting, and interacting feel effortless and welcoming. Members can share updates, send messages, and highlight LGBTQ-friendly events and places. This LGBTQ social media app also includes community guidelines to keep the vibe respectful and engaging. Bessa is where queer connection, content, and community come together."
        }
        content={
          <>
            <Text>
              I&apos;m Topher; I&apos;m the creator behind Bessa, a gay social
              media app built with community at its core. As a queer software
              engineer based in Las Vegas, I&apos;m focused on building an
              inclusive social platform where LGBTQ people of all genders,
              ethnicities, ages, and abilities can feel seen and connected.
              Bessa is more than just an LGBTQ community app. It&apos;s a space
              for real connection, thoughtful design, and queer tech done right.
            </Text>
          </>
        }
        bottomContent={
          <Flex w={"100%"} gap={2} flexWrap={"wrap"}>
            <Link href={"/"} title={title}>
              <Button colorScheme={"primary"} size={"lg"}>
                Learn More
              </Button>
            </Link>
            <Link href={"/donate"} title={`Sponsor & Donate | ${title}`}>
              <Button colorScheme={"primary"} size={"lg"}>
                Donate
              </Button>
            </Link>
          </Flex>
        }
        bgImage={"/images/stock/oakland.jpg"}
      />
      <Container maxW={"container.xl"}>
        <Center minH={sectionHeight} py={[16, 32, 64]}>
          <Stack gap={4}>
            <Heading>
              Building Inclusive Communities Through Gay Social Media
            </Heading>
            <Text>
              What does inclusivity really mean, and how far can it go without
              diluting the heart of a community? Bessa is a gay social media app
              built as an experiment to find out just how inclusive an online
              space can be while still preserving the culture, values, and
              identity of the group. It’s a platform designed to balance
              openness with authenticity, and to ask important questions about
              how communities grow and evolve.
            </Text>
            <Text>
              The inspiration for Bessa came while I was living in Oakland, CA,
              surrounded by an incredible variety of communities. I saw
              firsthand how some groups created deeply rooted spaces where
              members could thrive, express themselves, and celebrate their
              culture. Some communities welcomed everyone with open arms, while
              others protected their identity by staying more closed. Both
              approaches have value, and I became fascinated by the tension
              between being inclusive and staying grounded.
            </Text>
            <Text>
              As a queer bisexual man, I chose to begin with the LGBTQ
              community. Bessa is an LGBTQ community app built for all genders,
              body types, ethnicities, and ages; an inclusive social platform
              where diversity isn’t just welcomed, it’s central to the mission.
              My hope is that Bessa continues to grow into one of the most
              inclusive LGBTQ social media apps out there, connecting people
              around the world who are ready to show up, speak out, and be
              themselves.
            </Text>
          </Stack>
        </Center>
      </Container>
      <MediaLeft
        heading={"Explore Places, Events, and Community on Gay Social Media"}
        image={
          <Image
            src={LeftImage}
            alt={"Gay Social Media for Real LGBTQ Community Building"}
          />
        }
      >
        <Text>
          Bessa is a gay social media app where LGBTQ members can post and share
          content that reflects their true selves. Whether it’s a casual update,
          a creative photo, or a thought-provoking moment, the platform is built
          to make self-expression feel easy and meaningful. As an LGBTQ
          community app, Bessa gives users the space to connect through shared
          stories, reactions, and conversations without the pressure of hookup
          culture.
        </Text>
        <Text>
          In addition to content sharing, Bessa lets members highlight and
          explore LGBTQ-friendly places. From queer-owned coffee shops to
          inclusive bookstores and nightlife, users can recommend local spots
          and browse what others have shared. This feature turns Bessa into more
          than just a queer-friendly social app. It becomes a tool to help you
          connect with local LGBTQ people and support safe, welcoming spaces.
        </Text>
        <Text>
          Events are a key part of building real connections on gay social
          media, and Bessa makes it simple to discover and share them. Whether
          it&apos;s a grassroots gathering, a virtual hangout, or a major pride
          celebration, members can post upcoming events that matter to the
          community. This helps Bessa grow as an inclusive social platform where
          people don’t just scroll; they show up, participate, and co-create a
          vibrant, connected queer future.
        </Text>
      </MediaLeft>
    </section>
  );
}
