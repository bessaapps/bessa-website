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
  Tag,
  Divider,
  Center,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import Mockup1 from "../images/mockups/1.png";
import Mockup2 from "../images/mockups/2.png";
import Mockup3 from "../images/mockups/3.png";
import Mockup4 from "../images/mockups/4.png";
import Image from "next/image";
import { appStores, url } from "@/utils/constants";
import { FiCheckCircle, FiDollarSign, FiStar, FiXCircle } from "react-icons/fi";
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

export default function Home({}) {
  const [posts, setPosts] = useState([]);
  const [products, setProducts] = useState([]);

  const memberships = ["Empower", "Champion", "Pioneer", "Ambassador", "Ally"];

  const comparisons = [
    {
      app: "Other Apps",
      features: [
        { icon: FiXCircle, description: "Map", color: "red.500" },
        { icon: FiXCircle, description: "Events", color: "red.500" },
        {
          icon: FiDollarSign,
          description: "Read Receipts",
          color: "red.500"
        }
      ]
    },
    {
      app: "Bessa",
      features: [
        { icon: FiCheckCircle, description: "Map", color: "green.500" },
        { icon: FiCheckCircle, description: "Events", color: "green.500" },
        {
          icon: FiCheckCircle,
          description: "Read Receipts",
          color: "green.500"
        },
        { icon: FiCheckCircle, description: "Social Feed", color: "green.500" },
        {
          icon: FiCheckCircle,
          description: "Members Directory",
          color: "green.500"
        }
      ]
    }
  ];

  useEffect(() => {
    axios
      .get("https://shop.getbessa.com/wp-json/wc/v3/products", {
        params: {
          consumer_key: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY,
          consumer_secret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET,
          per_page: 4
        }
      })
      .then((response) => setProducts(response?.data));
    axios
      .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
        params: { _embed: ["wp:term", "wp:featuredmedia"] }
      })
      .then((response) => setPosts(response?.data));
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
                <Text mb={8}>
                  Bessa is an inclusive LGBTQ community of all genders, colors,
                  shapes, and sizes who want to safely connect with new and
                  existing friends, family, and others.
                </Text>
                <Flex gap={4} mb={8}>
                  {appStores.map((store) => (
                    <Link key={store.name} href={store.href}>
                      <Button colorScheme={"primary"} size={"lg"} w={140}>
                        <Flex mr={2}>{store.icon}</Flex>
                        {store.name}
                      </Button>
                    </Link>
                  ))}
                </Flex>
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
                      700+
                    </Heading>
                    <Text textAlign={"center"}>Downloads</Text>
                  </Box>
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
            <GridItem>
              <Image src={Mockup3} alt={"An LGBTQ Social Media App Mockup"} />
            </GridItem>
            <GridItem colSpan={[1, 2]} w={["100%", "75%"]}>
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
          <Container maxW={"container.sm"} textAlign={"center"}>
            <Tag colorScheme={"primary"}>Bessa is Free!</Tag>
            <Heading mb={4}>
              Connect, share, discover, and engage for FREE!
            </Heading>
            <Text mb={4}>
              Unlike other apps like Twitter, Grindr, HER, and OkCupid, Bessa
              costs absolutely nothing. Additionally, Bessa is loaded with
              community-building features Twitter and Grindr don&apos;t offer.
              Here you can connect, share, discover, and engage with your LGBTQ
              community for free.
            </Text>
          </Container>
          <SimpleGrid columns={2} gap={8}>
            {comparisons.map((comparison) => (
              <GridItem key={comparison.app}>
                <Card h={"100%"} p={8}>
                  <Heading as={"h3"} mb={4}>
                    {comparison.app}
                  </Heading>
                  <List spacing={2}>
                    {comparison.features.map((feature) => (
                      <ListItem key={feature.description}>
                        <ListIcon as={feature.icon} color={feature.color} />
                        {feature.description}
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </GridItem>
            ))}
          </SimpleGrid>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <SimpleGrid columns={[1, 4]} gap={8} alignItems={"center"}>
            <GridItem />
            <GridItem colSpan={[1, 2]}>
              <Flex justify={"flex-end"}>
                <Box w={["100%", "75%"]}>
                  <Tag colorScheme={"primary"}>Membership</Tag>
                  <Heading mb={4}>Become a Supporting Member</Heading>
                  <Text mb={4}>
                    Bessa is about building community, not ad revenue. Consider
                    becoming a supporting member to help! Tap the banner in your
                    app to subscribe. Your memberships helps this inclusive
                    LGBTQ community operate without ads.{" "}
                    <Text as={"i"}>Thanks!</Text>
                  </Text>
                  <Text mb={4}>
                    You can also donate directly through{" "}
                    <Link
                      href={"https://cash.app/$getbessa"}
                      fontWeight={"bold"}
                    >
                      Cash App
                    </Link>
                  </Text>
                  <SimpleGrid columns={[1, 2]} spacingX={4}>
                    {memberships?.map((membership) => (
                      <GridItem key={membership}>
                        <Flex align={"center"} gap={2}>
                          <FiStar color={"var(--chakra-colors-primary-500)"} />{" "}
                          {membership}
                        </Flex>
                      </GridItem>
                    ))}
                  </SimpleGrid>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Image src={Mockup4} alt={"An LGBTQ Social Media App Mockup"} />
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
          {posts?.map((post) => (
            <LinkBox key={post?.id} as={"article"}>
              <SimpleGrid columns={4}>
                <GridItem colSpan={3}>
                  <Text fontWeight={800}>
                    <Link
                      key={post?._embedded?.["wp:term"]?.[0]?.[0]?.id}
                      href={`/categories/${post?._embedded?.["wp:term"]?.[0]?.[0]?.slug}`}
                    >
                      {post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
                    </Link>
                  </Text>
                  <Heading mb={4}>
                    <LinkOverlay href={`/${post?.slug}`}>
                      {post?.title?.rendered}
                    </LinkOverlay>
                  </Heading>
                  <Flex gap={2}>
                    {post?._embedded?.["wp:term"]?.[1]?.map((tag) => (
                      <Link key={tag?.id} href={`/tags/${tag?.slug}`}>
                        <Tag>{tag?.name}</Tag>
                      </Link>
                    ))}
                  </Flex>
                </GridItem>
                <GridItem>
                  <AspectRatio
                    ratio={1.75}
                    borderRadius={8}
                    overflow={"hidden"}
                  >
                    <Image
                      src={
                        post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                      }
                      alt={post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
                      fill
                    />
                  </AspectRatio>
                </GridItem>
              </SimpleGrid>
            </LinkBox>
          ))}
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Tag colorScheme={"primary"}>Recent Swag</Tag>
          <Heading as={"h2"} mb={4}>
            Shop LGBTQ Merch
          </Heading>
          <Text mb={4}>
            Check out the shop for these and more! 30% of every purchase
            supports Bessa!
          </Text>
          <SimpleGrid columns={[2, 4]} spacingX={4}>
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
