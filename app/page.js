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
  Card,
  Tag,
  Divider,
  Center,
  List,
  ListItem,
  Table,
  Td,
  Tr,
  Tbody
} from "@chakra-ui/react";
import Mockup1 from "../images/mockups/1.png";
import Mockup2 from "../images/mockups/2.png";
import Mockup3 from "../images/mockups/3.png";
import Mockup4 from "../images/mockups/4.png";
import Image from "next/image";
import { appStores, url } from "@/utils/constants";
import { FiCheckCircle, FiDollarSign, FiStar, FiXCircle } from "react-icons/fi";
import axios from "axios";
import dayjs from "dayjs";

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

async function getData() {
  return await axios
    .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
      params: { _embed: ["wp:term", "author"], per_page: 5 }
    })
    .then((response) => {
      return { posts: response?.data };
    });
}

export default async function Home() {
  const { posts } = await getData();

  const memberships = ["Empower", "Champion", "Pioneer", "Ambassador", "Ally"];

  const comparisons = [
    {
      app: "Other Apps",
      features: [
        {
          icon: <FiXCircle />,
          description: "Map"
        },
        { icon: <FiXCircle />, description: "Events" },
        {
          icon: <FiDollarSign />,
          description: "Read Receipts"
        }
      ]
    },
    {
      app: "Bessa",
      features: [
        { icon: <FiCheckCircle />, description: "Map" },
        { icon: <FiCheckCircle />, description: "Events" },
        {
          icon: <FiCheckCircle />,
          description: "Read Receipts"
        },
        {
          icon: <FiCheckCircle />,
          description: "Social Feed"
        },
        {
          icon: <FiCheckCircle />,
          description: "Members Directory"
        }
      ]
    }
  ];

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
              <Tag colorScheme={"primary"}>Join for FREE!</Tag>
              <Heading as={"h1"} mb={4}>
                Your community is waiting for you.
              </Heading>
              <Text mb={8}>
                Bessa is an inclusive LGBTQ community of all genders, colors,
                shapes, sizes, and abilities who want to safely connect with new
                and existing friends, family, and others.
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
                Find and involve yourself in LGBTQ communities with events. Find
                anything from groups, volunteer opportunities, or just fun
                things to do and meet new people at.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Container maxW={"container.sm"} textAlign={"center"}>
            <Tag colorScheme={"primary"}>Bessa is Free!</Tag>
            <Heading mb={4}>
              Connect, Share, Discover, and Engage for FREE!
            </Heading>
            <Text mb={4}>
              Unlike other apps like Twitter, Grindr, HER, and OkCupid, Bessa
              costs absolutely nothing. Additionally, Bessa is loaded with
              community-building features Twitter and Grindr don&apos;t offer.
              Here you can connect, share, discover, and engage with your LGBTQ
              community for free.
            </Text>
          </Container>
          <SimpleGrid columns={[1, 2]} gap={8}>
            {comparisons.map((comparison) => (
              <GridItem key={comparison.app}>
                <Card h={"100%"} p={8}>
                  <Heading as={"h3"} mb={4}>
                    {comparison.app}
                  </Heading>
                  <List spacing={2}>
                    {comparison.features.map((feature) => (
                      <ListItem key={feature.description}>
                        <Flex align={"center"} gap={2}>
                          {feature.icon}
                          {feature.description}
                        </Flex>
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
                    app to subscribe. Your membership helps this inclusive LGBTQ
                    community operate without ads. <Text as={"i"}>Thanks!</Text>
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
          <Heading mb={8}>From the Bessa Bulletin:</Heading>
          <Table variant={"simple"} maxW={"100%"}>
            <Tbody>
              {posts?.map((post) => (
                <Tr key={post?.id}>
                  <Td
                    borderTop={"solid 1px"}
                    borderBottom={"none"}
                    borderColor={"gray.900"}
                    pl={0}
                  >
                    <Link href={`/posts/${post?.slug}`}>
                      <Heading
                        as={"h3"}
                        dangerouslySetInnerHTML={{
                          __html: post?.title?.rendered
                        }}
                        fontWeight={500}
                      />
                    </Link>
                  </Td>
                  <Td
                    borderTop={"solid 1px"}
                    borderBottom={"none"}
                    borderColor={"gray.900"}
                  >
                    {dayjs(post?.date)?.format("MMM D, YYYY")} &middot; by{" "}
                    <Link
                      key={post?._embedded?.author?.[0]?.slug}
                      href={`/authors/${post?._embedded?.author?.[0]?.slug}`}
                      fontWeight={500}
                    >
                      {post?._embedded?.author?.[0]?.name}
                    </Link>{" "}
                    in{" "}
                    <Link
                      key={post?._embedded?.["wp:term"]?.[0]?.[0]?.id}
                      href={`/categories/${post?._embedded?.["wp:term"]?.[0]?.[0]?.slug}`}
                      fontWeight={"bold"}
                    >
                      {post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
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
