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
  Divider,
  Center,
  List,
  ListItem,
  Table,
  Td,
  Tr,
  Tbody,
  Tag
} from "@chakra-ui/react";
import Mockup1 from "../images/mockups/1.png";
import Mockup2 from "../images/mockups/2.png";
import Mockup3 from "../images/mockups/3.png";
import Mockup4 from "../images/mockups/4.png";
import Image from "next/image";
import { appStores, url } from "@/utils/constants";
import axios from "axios";
import dayjs from "dayjs";
import { Ban, Check, CircleDollarSign } from "lucide-react";

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

  const comparisons = [
    {
      app: "Other Apps",
      features: [
        {
          icon: <Ban />,
          description: "Map"
        },
        { icon: <Ban />, description: "Events" },
        {
          icon: <CircleDollarSign />,
          description: "Read Receipts"
        }
      ]
    },
    {
      app: "Bessa",
      features: [
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Map"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Events"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Read Receipts"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Social Feed"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
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
            <GridItem w={["100%", "90%"]} colSpan={[1, 2]}>
              <Tag mb={2}>Join for FREE!</Tag>
              <Heading as={"h1"} mb={4}>
                Your LGBTQ Community is Waiting for You.
              </Heading>
              <Text mb={8}>
                Bessa is an LGBTQ social media app and inclusive community of
                all genders, colors, shapes, sizes, and abilities. Here people
                can safely engage with other queer people and discover new super
                gay things.
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
                    900+
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
            <Heading as={"h3"} color={"primary.50"} textAlign={"center"} mb={4}>
              <Highlight
                query={["inclusive", "community!", "share"]}
                styles={{
                  color: "secondary.400"
                }}
              >
                Bessa is a vibrant, inclusive social media app for the LGBTQ
                community! Whether you&apos;re looking to share your thoughts,
                find new friends, or discover gay-friendly places and events,
                Bessa has everything you need in one safe and welcoming space.
              </Highlight>
            </Heading>
          </Container>
        </Box>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <SimpleGrid columns={[1, 4]} gap={8} alignItems={"center"}>
            <GridItem>
              <Image src={Mockup3} alt={"An LGBTQ Social Media App Mockup"} />
            </GridItem>
            <GridItem colSpan={[1, 2]} w={["100%", "75%"]}>
              <Tag mb={2}>Places</Tag>
              <Heading mb={4}>Discover your Gayborhood</Heading>
              <Text mb={4}>
                Find and support the best parts of your community. Use the map
                to find user-vetted, safe, and inclusive LGBTQ businesses,
                organizations, and resources around you on Bessa, an LGBTQ
                social media app.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Container maxW={"container.sm"} textAlign={"center"}>
            <Tag mb={2}>Download for FREE!</Tag>
            <Heading mb={4}>Start to discover and engage for FREE!</Heading>
            <Text mb={4}>
              Unlike other apps like Twitter, Grindr, HER, and OkCupid, you can
              get this LGBTQ social media app for absolutely nothing.
              Additionally, Bessa is loaded with community-building features
              Twitter and Grindr don&apos;t offer. On Bessa you can begin to
              connect with others and discover new things for free.
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
                  <Tag mb={2}>Events</Tag>
                  <Heading mb={4}>Where&apos;s the Party At?!</Heading>
                  <Text>
                    Find and involve yourself in queer, gay, and trans
                    communities on this LGBTQ social media app. Find anything
                    from groups, volunteer opportunities, or just fun things to
                    do and meet new people at around you.
                  </Text>
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
                Find other gay members with shared interests near you on this
                LGBTQ social media app. Make queer friends, connections, and
                maybe more. Upload a selfie, update your profile, and start
                chatting. Join the fun today!
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
                Help this LGBTQ social media app grow by lettings others know
                how much you like the Bessa community by writing a review.
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
