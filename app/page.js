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
  Text,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  Card,
  Tag
} from "@chakra-ui/react";
import Mockup1 from "../images/mockups/1.png";
import Mockup2 from "../images/mockups/2.png";
import Mockup3 from "../images/mockups/3.png";
import Mockup4 from "../images/mockups/4.png";
import Image from "next/image";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { url } from "@/utils/constants";
import { FiStar } from "react-icons/fi";
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

  const mockups = [Mockup3, Mockup4];

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

  useEffect(() => {
    axios
      .get("https://shop.getbessa.com/wp-json/wc/v3/products", {
        params: {
          consumer_key: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
          consumer_secret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
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
      <>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <SimpleGrid columns={[1, 4]} alignItems={"center"} gap={8}>
            <GridItem w={["100%", "80%"]} colSpan={[1, 2]}>
              <Fade in={true} transition={{ enter: { duration: 0.66 } }}>
                <Tag colorScheme={"primary"}>Join for FREE!</Tag>
                <Heading as={"h1"} mb={4}>
                  Your community is waiting for you.
                </Heading>
                <Text mb={4}>
                  Bessa is an inclusive LGBTQ community of all genders, colors,
                  shapes, and sizes who want to safely connect with new and
                  existing friends, family, and others.
                </Text>
                <Flex gap={4}>
                  {appStores.map((store) => (
                    <Link key={store.name} href={store.href}>
                      <Button colorScheme={"primary"} size={"lg"} w={140}>
                        <Flex mr={2}>{store.icon}</Flex>
                        {store.name}
                      </Button>
                    </Link>
                  ))}
                </Flex>
              </Fade>
            </GridItem>
            <GridItem>
              <Image src={Mockup1} alt={"An LGBTQ Social Media App"} />
            </GridItem>
            <GridItem>
              <Image src={Mockup2} alt={"An LGBTQ Social Media App"} />
            </GridItem>
          </SimpleGrid>
        </Container>
        <Box bg={"gray.900"}>
          <Container maxW={"container.lg"} py={[8, 32]}>
            <Heading as={"h3"} color={"white"} textAlign={"center"} mb={4}>
              <Highlight
                query={[
                  "proud",
                  "share who you are",
                  "build strong relationships"
                ]}
                styles={{
                  color: "primary.500",
                  fontWeight: 800
                }}
              >
                Be proud of who you are by posting content. Through
                communication and a directory of people, places, and events, you
                can find and build strong relationships within your community.
              </Highlight>
            </Heading>
            {/*<Text textAlign={"center"}>*/}
            {/*  Bessa works hard, through moderation and dangerous content*/}
            {/*  filters, to make it a safe community.*/}
            {/*</Text>*/}
          </Container>
        </Box>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <SimpleGrid columns={[1, 4]} gap={8} alignItems={"center"}>
            {mockups?.map((mockup, index) => (
              <GridItem key={index}>
                <Image
                  src={mockup}
                  alt={`An LGBTQ Social Media App Mockup ${index}`}
                />
              </GridItem>
            ))}
            <GridItem colSpan={[1, 2]} w={["100%", "66.66%"]}>
              <Tag colorScheme={"primary"}>Places and Events</Tag>
              <Heading mb={4}>Discover your Gayborhood</Heading>
              <Text mb={4}>
                Find and support the best parts of your community. Use the map
                to find user-vetted, safe, and inclusive LGBTQ businesses,
                organizations, and resources around you.
              </Text>
              <Text>
                Events can be a great way to find and involve yourself in LGBTQ
                communities. Find anything from groups, volunteer opportunities,
                or just fun things to do and meet new people at.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Card>
            <Container maxW={"container.sm"} my={[4, 16]}>
              <Heading color={"gray.900"} textAlign={"center"} mb={4}>
                Be with Friends!
              </Heading>
              <Text textAlign={"center"} mb={8}>
                Find LGBTQ members with shared interests near you. Make queer
                friends, connections, and maybe more. Chat, upload a selfie, and
                update your profile. Socialize and join the fun!
              </Text>
              <Flex gap={4} justify={"center"} flexWrap={"wrap"}>
                {appStores.map((store) => (
                  <Link key={store.name} href={store.href}>
                    <Button
                      colorScheme={"primary"}
                      size={"lg"}
                      w={["100%", 140]}
                    >
                      <Flex mr={2}>{store.icon}</Flex>
                      {store.name}
                    </Button>
                  </Link>
                ))}
              </Flex>
            </Container>
          </Card>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
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
        <Container maxW={"container.xl"} my={[8, 32]}>
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
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Card>
            <Container maxW={"container.sm"} my={[4, 16]}>
              <Heading color={"gray.900"} textAlign={"center"} mb={4}>
                Like Bessa?
              </Heading>
              <Text textAlign={"center"} mb={8}>
                Help our LGBTQ community grow by lettings others know how much
                you like Bessa with a review.
              </Text>
              <Flex gap={4} justify={"center"} flexWrap={"wrap"}>
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
            </Container>
          </Card>
        </Container>
      </>
    </section>
  );
}
