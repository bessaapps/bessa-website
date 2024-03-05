import {
  Button,
  Container,
  Fade,
  Flex,
  Heading,
  Link,
  Text
} from "@chakra-ui/react";
import { IoLogoAppleAppstore } from "react-icons/io5";
import Logo from "@/images/logo.png";
import Image from "next/image";

export const metadata = {
  title:
    "Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community",
  description:
    "Bessa is a safe inclusive and body-positive community of LGBTQIA+ people who want to connect with others and socialize with their friends, family, and others.",
  openGraph: {
    "twitter:card": "summary_large_image",
    "twitter:site": "@bessaapp",
    "twitter:title": "Safe Inclusive Body-Positive LGBTQIA+ Community",
    "twitter:description":
      "Bessa is a safe inclusive and body-positive community of LGBTQIA+ people who want to connect with others and socialize with their friends, family, and others.",
    "twitter:image": "https://bessssssa.com/twitter.png"
  }
};

// todo: update
// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Software",
//   name: "Bessa LGBTQIA+ Community App",
//   description:
//     "Bessa is a safe inclusive and body-positive community of LGBTQIA+ people who want to connect with others and socialize with their friends, family, and others.",
// };

export default function Home() {
  return (
    <>
      {/*<script*/}
      {/*  type={"application/ld+json"}*/}
      {/*  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}*/}
      {/*/>*/}
      <Flex
        bg={"primary.500"}
        minH={"calc(100vh - 61px - 48px)"}
        // bgImage={"url('/splash.png')"}
        // bgPosition={"center"}
        // bgRepeat={"no-repeat"}
        // bgSize={"cover"}
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
                <Text color={"gray.100"} mb={4}>
                  Bessa is a safe, inclusive, and body-positive community of
                  lesbian, gay, bisexual, transgender, queer, intersex, and
                  asexual (LGBTQIA+) people who want to connect with others and
                  socialize with their friends, family, and others.
                </Text>
              </Fade>
              {/*<Text color={"gray.100"} mb={4}>*/}
              {/*  Through posting social media likes updates and media, people can*/}
              {/*  be proud to share who they are with their community. Through*/}
              {/*  likes, replies, direct messages, and a directory of people online*/}
              {/*  and around your area, people can find and build strong*/}
              {/*  relationships within their community.*/}
              {/*</Text>*/}
              {/*<Text color={"gray.100"} mb={8}>*/}
              {/*  Bessa works hard, through moderation and filtering dangerous*/}
              {/*  content, to keep this digital community a safe one.*/}
              {/*</Text>*/}
              {/*<Flex direction={["column", "row"]} gap={4}>*/}
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
                    colorScheme={"blackAlpha"}
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
    </>
  );
}
