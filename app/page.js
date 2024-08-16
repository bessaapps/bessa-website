import {
  Box,
  Button,
  Container,
  Fade,
  Flex,
  GridItem,
  Highlight,
  Heading,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Logo from "@/images/logo.png";
import Mockup1 from "../images/mockups/1.png";
import Mockup2 from "../images/mockups/2.png";
import Mockup3 from "../images/mockups/3.png";
import Mockup4 from "../images/mockups/4.png";
import Mockup5 from "../images/mockups/5.png";
import Image from "next/image";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { description, title, url } from "@/utils/constants";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
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
  },
  alternates: { canonical: url }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Bessa",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  applicationCategory: "SocialNetworkingApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "3"
  },
  operatingSystem: "ANDROID"
};

export default function Home() {
  const appStores = [
    {
      name: "iOS",
      href: "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone",
      icon: <SiAppstore />
    },
    {
      name: "Android",
      href: "https://play.google.com/store/apps/details?id=com.bessa.bessa",
      icon: <SiGoogleplay />
    }
  ];
  const mockups = [
    {
      heading: "Be Heard!",
      text: "Sharing your LGBTQ pride is now as fun as ever. By sharing updates, images, videos, and audio recordings, you can express yourself to the ones you love and make new queer friends as well.",
      image: Mockup1
    },
    {
      heading: "Make New Friends",
      text: "Networking is a huge part of building queer community. Find LGBTQ members with shared interests near you and make queer friends, connections, and maybe more. Chat, upload a selfie, update your profile, and add flair to join the fun!",
      image: Mockup2
    },
    {
      heading: "Discover your Gayborhood",
      text: "Find and support the best parts of your community. Use the map to find user-vetted, safe, and inclusive LGBTQ businesses, organizations, and resources around you. ",
      image: Mockup3
    },
    {
      heading: "Find a Community",
      text: "Events can be a great way to find and involve yourself in LGBTQ communities. Find anything from groups, volunteer opportunities, or just fun things to do and meet new people at.",
      image: Mockup4
    },
    {
      heading: "Build a Following",
      text: "Share your LGBTQ thoughts, ideas, and other good stuff through updates, images, videos, and even audio to an LGBTQ audience and build a following of LGBTQ fans.",
      image: Mockup5
    }
  ];

  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box bg={"primary.500"} color={"gray.100"}>
        <Flex minH={"calc(100vh - 59px)"} align={"center"} justify={"center"}>
          <Container maxW={"container.lg"} py={16}>
            <Flex justify={"center"} direction={["column", "row"]}>
              <Flex direction={"column"} w={["100%", "50%"]} justify={"center"}>
                <Fade in={true} transition={{ enter: { duration: 0.66 } }}>
                  <Heading as={"h1"} color={"white"} mb={[4, 8]}>
                    An LGBTQ Social Media App
                  </Heading>
                </Fade>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 0.66 } }}
                >
                  <Text mb={[4, 8]}>
                    Bessa is an inclusive LGBTQ community of all genders,
                    colors, shapes, and sizes who want to safely connect with
                    new and existing friends, family, and others.
                  </Text>
                </Fade>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 1.32 } }}
                >
                  <Heading as={"h3"} mb={[2, 4]}>
                    Join for FREE!
                  </Heading>
                  <Flex gap={4} flexWrap={"wrap"}>
                    {appStores.map((store) => (
                      <Link key={store.name} href={store.href}>
                        <Button
                          colorScheme={"primary"}
                          bg={"primary.800"}
                          color={"white"}
                          size={"lg"}
                          w={["100%", "auto"]}
                        >
                          <Flex mr={2}>{store.icon}</Flex>
                          {store.name}
                        </Button>
                      </Link>
                    ))}
                  </Flex>
                </Fade>
              </Flex>
              <Flex w={["100%", "50%"]}>
                <Image src={Logo} alt={"The LGBTQ Social Media App Unicorn"} />
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <Container maxW={"container.lg"} pb={32}>
          <Heading lineHeight={"tall"}>
            <Highlight
              query={[
                "be proud",
                "share who you are",
                "build strong relationships",
                "safe community"
              ]}
              styles={{
                px: "2",
                py: "1",
                bg: "primary.800",
                color: "white",
                rounded: "md"
              }}
            >
              Through posting social media like updates, media, events, and
              places, you can be proud to share who you are with your community.
              Through likes, replies, direct messages, and a directory of
              people, events, and places online and around your area, you can
              find and build strong relationships within your community. Bessa
              works hard, through moderation and dangerous content filters, to
              make it a safe community.
            </Highlight>
          </Heading>
        </Container>
        <Container maxW={"container.xl"} py={32}>
          <SimpleGrid columns={[1, 5]} gap={[4, 8]}>
            {mockups?.map((mockup, index) => (
              <GridItem key={index}>
                <Box mb={[4, 8]}>
                  <Image
                    src={mockup.image}
                    alt={`${mockup.heading} | An LGBTQ Social Media App`}
                  />
                </Box>
                <Heading my={4}>{mockup.heading}</Heading>
                <Text mb={4}>{mockup.text}</Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
        <Container maxW={"container.lg"} py={32}>
          <Heading as={"h2"} mb={4}>
            Like Bessa?
          </Heading>
          <Text mb={4}>
            Help our community grow by lettings others know how much you like
            Bessa with a review.
          </Text>
          <Flex gap={4} flexWrap={"wrap"}>
            <Link
              href={
                "https://apps.apple.com/app/apple-store/id6471383138?action=write-review"
              }
            >
              <Button
                colorScheme={"primary"}
                bg={"primary.800"}
                color={"white"}
                size={"lg"}
              >
                Review on App Store
              </Button>
            </Link>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.bessa.bessa"
              }
            >
              <Button
                colorScheme={"primary"}
                bg={"primary.800"}
                color={"white"}
                size={"lg"}
              >
                Review on Google Play
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>
    </section>
  );
}
