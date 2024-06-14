"use client";

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
import Image from "next/image";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { useRouter } from "next/navigation";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Software",
  name: "Bessa | An LGBTQ Community App",
  description:
    "Bessa is an inclusive LGBTQ community of all genders, colors, shapes, and sizes who want to safely connect with new and existing friends, family, and others."
};

export default function Home() {
  const router = useRouter();
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

  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box bg={"primary.500"} color={"gray.100"}>
        <Flex
          minH={"calc(100vh - 61px - 48px)"}
          align={"center"}
          justify={"center"}
        >
          <Container maxW={"container.lg"} py={16}>
            <Flex justify={"center"} direction={["column", "row"]}>
              <Flex direction={"column"} w={["100%", "50%"]} justify={"center"}>
                <Fade in={true} transition={{ enter: { duration: 0.66 } }}>
                  <Heading as={"h1"} color={"white"} mb={4}>
                    LGBTQ Community
                  </Heading>
                </Fade>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 0.66 } }}
                >
                  <Text mb={4}>
                    Bessa is an inclusive LGBTQ community of all genders,
                    colors, shapes, and sizes who want to safely connect with
                    new and existing friends, family, and others.
                  </Text>
                </Fade>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 1.32 } }}
                >
                  <Heading as={"h2"} mb={4}>
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
                <Image src={Logo} alt={"The LGBTQ Community App Unicorn"} />
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
              Through posting social media like updates and media, you can be
              proud to share who you are with your community. Through likes,
              replies, direct messages, and a directory of people and events
              online and around your area, you can find and build strong
              relationships within your community. Bessa works hard, through
              moderation and dangerous content filters, to make it a safe
              community.
            </Highlight>
          </Heading>
        </Container>
        <Container maxW={"container.lg"} py={32}>
          <SimpleGrid columns={[1, 3]} gap={4}>
            <GridItem>
              <Image src={Mockup1} alt={"An LGBTQ Community App"} />
              <Heading my={4}>Make some Noise!</Heading>
              <Text mb={4}>
                Sharing your LGBTQ pride is now as fun as ever. By sharing
                updates, images, videos, and audio recordings, you can express
                yourself to the ones you love and make new queer friends as
                well.
              </Text>
            </GridItem>
            <GridItem>
              <Image src={Mockup2} alt={"An LGBTQ Community App"} />
              <Heading my={4}>Socialize with Community</Heading>
              <Text mb={4}>
                Networking is a huge part of building queer community. Find
                LGBTQ members with shared interests near you and make queer
                friends, connections, and maybe more. Chat, upload a selfie,
                update your profile, and add flair to join the fun!
              </Text>
            </GridItem>
            <GridItem>
              <Image src={Mockup3} alt={"An LGBTQ Community App"} />
              <Heading my={4}>Build your Following</Heading>
              <Text mb={4}>
                Share your LGBTQ thoughts, ideas, and other good stuff through
                text, images, videos, event listings, and even audio to an LGBTQ
                audience and build a following of LGBTQ fans.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
        <Container maxW={"container.lg"} py={32}>
          <Heading as={"h2"} mb={4}>
            Liking Bessa?
          </Heading>
          <Text mb={4}>
            Help our community grow by lettings others know how much you like
            Bessa with a review.
          </Text>
          <Flex gap={4} flexWrap={"wrap"}>
            <Button
              colorScheme={"primary"}
              bg={"primary.800"}
              color={"white"}
              size={"lg"}
              onClick={() =>
                router.push(
                  "https://apps.apple.com/app/apple-store/id6471383138?action=write-review"
                )
              }
            >
              Review on App Store
            </Button>
            <Button
              colorScheme={"primary"}
              bg={"primary.800"}
              color={"white"}
              size={"lg"}
              onClick={() =>
                router.push(
                  "https://play.google.com/store/apps/details?id=com.bessa.bessa"
                )
              }
            >
              Review on Google Play
            </Button>
          </Flex>
        </Container>
      </Box>
    </section>
  );
}
