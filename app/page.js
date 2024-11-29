"use client";

import {
  chakra,
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
  LinkBox,
  LinkOverlay,
  shouldForwardProp,
  MenuItem,
  MenuButton,
  Menu,
  MenuList,
  AspectRatio
} from "@chakra-ui/react";
import Logo from "@/images/logo.png";
import Mockup1 from "../images/mockups/1.png";
import Mockup2 from "../images/mockups/2.png";
import Mockup3 from "../images/mockups/3.png";
import Mockup4 from "../images/mockups/4.png";
import Mockup5 from "../images/mockups/5.png";
import Image from "next/image";
import {
  // SiAmazon,
  SiAppstore,
  SiGoogleplay
} from "react-icons/si";
import { url } from "@/utils/constants";
import { FiMoreVertical, FiStar } from "react-icons/fi";
import { motion, isValidMotionProp } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaAndroid } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bessa LGBTQ Social Media App",
  applicationCategory: "SocialNetworkingApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "3"
  },
  url,
  image: `${url}/images/social.png`,
  operatingSystem: ["ANDROID", "iOS"]
};

export default function Home() {
  const [products, setProducts] = useState([]);
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

  const memberships = [
    "Empower",
    "Royal",
    "Champion",
    "Pioneer",
    "Pro",
    "Ultimate",
    "Ambassador",
    "premier",
    "VIP",
    "Elite",
    "Diamond",
    "Platinum",
    "Gold",
    "Silver",
    "Ally"
  ];

  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop)
  });

  useEffect(() => {
    axios
      .get("https://shop.getbessa.com/wp-json/wc/v3/products", {
        params: {
          consumer_key: "ck_b1289db949f857c6691168536a45f404398a41a0",
          consumer_secret: "cs_a7a6439cc7e6150f3458be3d11937a6b11fd3a47",
          per_page: 12
        }
      })
      .then((response) => setProducts(response?.data));
  }, []);

  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box>
        <Flex
          minH={"calc(100vh - 59px)"}
          align={"center"}
          justify={"center"}
          bg={"primary.500"}
        >
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
                  <Text color={"gray.100"} mb={[4, 8]}>
                    Bessa is an inclusive LGBTQ community of all genders,
                    colors, shapes, and sizes who want to safely connect with
                    new and existing friends, family, and others.
                  </Text>
                </Fade>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 1.32 } }}
                >
                  <Heading as={"h3"} color={"gray.100"} mb={[2, 4]}>
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
                    <Menu>
                      <MenuButton as={Box} cursor={"pointer"}>
                        <Button
                          colorScheme={"primary"}
                          bg={"primary.800"}
                          color={"white"}
                          size={"lg"}
                          w={["100%", "auto"]}
                        >
                          <FiMoreVertical />
                        </Button>
                      </MenuButton>
                      <MenuList>
                        {/*<MenuItem icon={<SiAmazon />}>Amazon</MenuItem>*/}
                        <MenuItem
                          icon={<FaAndroid />}
                          onClick={() =>
                            router.push(
                              "https://kwguwhiidnroftep.public.blob.vercel-storage.com/latest.apk"
                            )
                          }
                        >
                          Direct Download (Not Recommended)
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </Fade>
              </Flex>
              <Flex w={["100%", "50%"]}>
                <Fade
                  in={true}
                  transition={{ enter: { duration: 0.66, delay: 1.98 } }}
                >
                  <ChakraBox
                    animate={{
                      rotate: [5, -5, 5]
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <Image
                      src={Logo}
                      alt={"The LGBTQ Social Media App Unicorn"}
                    />
                  </ChakraBox>
                </Fade>
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <Container maxW={"container.lg"} my={32}>
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
        <Container maxW={"container.xl"} my={32}>
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
        <Container maxW={"container.lg"} my={32}>
          <Heading as={"h2"} mb={4}>
            Be with Friends!
          </Heading>
          <Text mb={4}>
            Join your LGBTQ community and link with others online instantly with
            Bessa. It&apos;s totally free!
          </Text>
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
            <Menu>
              <MenuButton as={Box} cursor={"pointer"}>
                <Button
                  colorScheme={"primary"}
                  bg={"primary.800"}
                  color={"white"}
                  size={"lg"}
                  w={["100%", "auto"]}
                >
                  <FiMoreVertical />
                </Button>
              </MenuButton>
              <MenuList>
                {/*<MenuItem icon={<SiAmazon />}>Amazon</MenuItem>*/}
                <MenuItem
                  icon={<FaAndroid />}
                  onClick={() =>
                    router.push(
                      "https://kwguwhiidnroftep.public.blob.vercel-storage.com/latest.apk"
                    )
                  }
                >
                  Direct Download (Not Recommended)
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Container>
        <Container maxW={"container.lg"} my={32}>
          <Heading as={"h2"} mb={4}>
            Become a Supporting Member
          </Heading>
          <Text mb={4}>
            Bessa is about building community, not ad revenue. If you&apos;d
            like to help out, consider becoming a supporting member! You can tap
            the banner in your app to subscribe. Your memberships helps this
            inclusive LGBTQ community operate without annoying ads. Memberships
            start at just $1 and you can cancel at anytime. ps: You&apos;ll
            receive a little extra flair on your profile and throughout the app
            to show you care about your community. You can also donate directly
            through Cash App{" "}
            <Link
              href={"https://cash.app/$getbessa"}
              target={"_blank"}
              color={"primary.500"}
              fontWeight={"bold"}
            >
              here
            </Link>
            .THANKS!
          </Text>
          <SimpleGrid columns={[1, 3]} spacingX={4}>
            {memberships?.map((membership) => (
              <GridItem key={membership}>
                <Flex align={"center"} gap={2}>
                  <FiStar color={"var(--chakra-colors-primary-500)"} />{" "}
                  {membership}
                </Flex>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
        <Container maxW={"container.lg"} my={32}>
          <Heading as={"h2"} mb={4}>
            Shop LGBTQ Merch
          </Heading>
          <Text mb={4}>
            Check out the shop for these and more! 30% of every purchase
            supports Bessa!
          </Text>
          <SimpleGrid columns={[1, 4]} spacingX={4}>
            {products?.map((product) => (
              <GridItem key={product?.id} mb={4}>
                <LinkBox>
                  <AspectRatio
                    ratio={1}
                    borderRadius={8}
                    overflow={"hidden"}
                    mb={4}
                  >
                    <Image
                      src={product?.images?.[0]?.src}
                      alt={product?.name}
                      fill
                    />
                  </AspectRatio>
                  <Text>
                    <LinkOverlay href={product?.permalink}>
                      {product?.name}
                    </LinkOverlay>
                  </Text>
                  <Text fontWeight={"bold"}>
                    From ${parseInt(product?.price)?.toFixed(2)}
                  </Text>
                </LinkBox>
              </GridItem>
            ))}
          </SimpleGrid>
          <Flex justify={"flex-end"}>
            <Button>
              <Link href={"https://shop.getbessa.com"}>Shop All</Link>
            </Button>
          </Flex>
        </Container>
        <Container maxW={"container.lg"} my={32}>
          <Heading as={"h2"} mb={4}>
            Like Bessa?
          </Heading>
          <Text mb={4}>
            Help our LGBTQ community grow by lettings others know how much you
            like Bessa with a review.
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
