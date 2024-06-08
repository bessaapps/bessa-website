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
  Text,
  Tooltip
} from "@chakra-ui/react";
import Logo from "@/images/logo.png";
import Mockup1 from "../images/mockups/1.png";
import Mockup2 from "../images/mockups/2.png";
import Mockup3 from "../images/mockups/3.png";
import Image from "next/image";
import { SiAmazon, SiAppstore, SiGoogleplay, SiSamsung } from "react-icons/si";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Software",
  name: "Bessa LGBTQIA+ Community App",
  description:
    "Bessa is a safe inclusive and body-positive community of LGBTQIA+ people who want to connect with others and socialize with their friends, family, and others."
};

export default function Home() {
  const appStores = [
    {
      name: "iOS",
      href: "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone",
      icon: <SiAppstore />
    },
    {
      name: "Amazon",
      href: "https://www.amazon.com/gp/product/B0D6K568Z9",
      icon: <SiAmazon />
    },
    { name: "Google", href: "", icon: <SiGoogleplay />, isDisabled: true },
    { name: "Samsung", href: "", icon: <SiSamsung />, isDisabled: true }
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
                    Safe Inclusive Body-Positive LGBTQIA+ Community
                  </Heading>
                </Fade>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 0.66 } }}
                >
                  <Text mb={4}>
                    Bessa is a safe, inclusive, and body-positive community of
                    lesbian, gay, bisexual, transgender, queer, intersex, and
                    asexual (LGBTQIA+) people who want to connect with others
                    and socialize with their friends, family, and others.
                  </Text>
                </Fade>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 1.32 } }}
                >
                  <Heading as={"h2"} mb={2}>
                    Bessa is FREE!
                  </Heading>
                  <Flex gap={4} flexWrap={"wrap"}>
                    {appStores.map((store) =>
                      store.isDisabled ? (
                        <Tooltip
                          key={store.name}
                          label={"Coming Soon!"}
                          placement={"top"}
                        >
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
                        </Tooltip>
                      ) : (
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
                      )
                    )}
                  </Flex>
                </Fade>
              </Flex>
              <Flex w={["100%", "50%"]}>
                <Image
                  src={Logo}
                  alt={"Safe Inclusive Body-Positive LGBTQIA+ Community"}
                />
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
              <Image
                src={Mockup1}
                alt={
                  "Make some Noise! | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
                }
              />
              <Heading my={4}>Make some Noise!</Heading>
              <Text mb={4}>
                Sharing your LGBTQ pride is now as fun as ever. By sharing
                updates, images, videos, and audio recordings, you can express
                yourself to the ones you love and make new queer friends as
                well.
              </Text>
            </GridItem>
            <GridItem>
              <Image
                src={Mockup2}
                alt={
                  "Socialize with Community | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
                }
              />
              <Heading my={4}>Socialize with Community</Heading>
              <Text mb={4}>
                Networking is a huge part of building queer community. Find
                LGBTQ members with shared interests near you and make queer
                friends, connections, and maybe more. Chat, upload a selfie,
                update your profile, and add flair to join the fun!
              </Text>
            </GridItem>
            <GridItem>
              <Image
                src={Mockup3}
                alt={
                  "Socialize with Community | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
                }
              />
              <Heading my={4}>Build your Following</Heading>
              <Text mb={4}>
                Share your LGBTQ thoughts, ideas, and other good stuff through
                text, images, videos, event listings, and even audio to an LGBTQ
                audience and build a following of LGBTQ fans.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
}
