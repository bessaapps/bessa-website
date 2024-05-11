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
import { IoLogoAppleAppstore } from "react-icons/io5";
import Logo from "@/images/logo.png";
import Image from "next/image";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Software",
  name: "Bessa LGBTQIA+ Community App",
  description:
    "Bessa is a safe inclusive and body-positive community of LGBTQIA+ people who want to connect with others and socialize with their friends, family, and others."
};

export default function Home() {
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
                  <Link
                    href={
                      "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone"
                    }
                  >
                    <Button
                      colorScheme={"primary"}
                      bg={"primary.800"}
                      color={"white"}
                      size={"lg"}
                      w={["100%", "auto"]}
                    >
                      <Flex mr={2}>
                        <IoLogoAppleAppstore />
                      </Flex>
                      Download for FREE!
                    </Button>
                  </Link>
                </Fade>
                {/*<Link href={"http://eepurl.com/iHsVDc"}>*/}
                {/*  <Button colorScheme={"primary"} size={"lg"}>*/}
                {/*    <Flex mr={2}>*/}
                {/*      <IoLogoAndroid />*/}
                {/*    </Flex>*/}
                {/*    Get Early Access!*/}
                {/*  </Button>*/}
                {/*</Link>*/}
                {/*</Flex>*/}
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
        <Container maxW={"container.lg"} py={16}>
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
              Through posting social media likes updates and media, you can be
              proud to share who you are with your community. Through likes,
              replies, direct messages, and a directory of people online and
              around your area, you can find and build strong relationships
              within your community. Bessa works hard, through moderation and
              dangerous content filters, to make it a safe community.
            </Highlight>
          </Heading>
        </Container>
        <Container maxW={"container.lg"} py={16}>
          <SimpleGrid columns={[1, 2]} gap={4}>
            <GridItem>
              <Heading my={8}>Make some Noise!</Heading>
              <Text>
                Sharing your pride is now fun as ever. Through sharing updates,
                images, videos, and audio recordings, you can express yourself
                to the ones you love. You can also build a following by posting
                in various categories like event, jobs, and more.
              </Text>
            </GridItem>
            <GridItem>
              <Heading my={8}>Socialize with Community</Heading>
              <Text>
                Networking is a huge part of building your community. Find
                members with shared interests near you and find your next
                friend, connection, or maybe more. Upload a selfie, update your
                profile, and add some flair to join the club!
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
}
