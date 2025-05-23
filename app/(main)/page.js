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
  Tag
} from "@chakra-ui/react";
import Mockup1 from "../../images/mockups/1.png";
import Mockup2 from "../../images/mockups/2.png";
import Mockup3 from "../../images/mockups/3.png";
import Mockup4 from "../../images/mockups/4.png";
import Image from "next/image";
import { appStores, url } from "@/utils/constants";
import { Ban, Check, CircleDollarSign } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bessa LGBTQ Social Networking App",
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

// async function getData() {
//   return await axios
//     .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
//       params: { _embed: ["wp:term", "author"], per_page: 5 }
//     })
//     .then((response) => {
//       return { posts: response?.data };
//     });
// }

export default async function Home() {
  // const { posts } = await getData();

  const comparisons = [
    {
      app: "Other Apps",
      features: [
        {
          icon: <Ban />,
          description: "Map"
        },
        { icon: <Ban />, description: "Places" },
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
          description: "Social Feed"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Members Directory"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Alerts and Messaging"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Brows Places"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Browse Events"
        },
        {
          icon: <Check color={"var(--chakra-colors-success-500)"} />,
          description: "Read Receipts"
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
                Building Queer Community and Connection
              </Heading>
              <Text mb={8}>
                Bessa is an{" "}
                <Text as={"strong"}>LGBTQ social networking app</Text> and
                inclusive community of all genders, colors, shapes, sizes, and
                abilities. Bessa is a hub for queer connections, places, and
                events.
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
              <Image src={Mockup1} alt={"LGBTQ Social Networking App Mockup"} />
            </GridItem>
            <GridItem>
              <Image src={Mockup2} alt={"LGBTQ Social Networking App Mockup"} />
            </GridItem>
          </SimpleGrid>
        </Container>
        <Box bg={"gray.900"}>
          <Container maxW={"container.lg"} py={[8, 32]}>
            <Heading as={"h3"} color={"primary.50"} textAlign={"center"} mb={4}>
              <Highlight
                query={["connections", "social", "community"]}
                styles={{
                  color: "secondary.400"
                }}
              >
                Welcome to Bessa, the LGBTQ social networking app built by LGBTQ
                people for LGBTQ people. Bessa&apos;s all about real
                connections, queer-friendly locations, and showing up for
                community events that matter. It&apos;s more than just an app;
                it&apos;s your space to be seen, be heard, and be yourself.
              </Highlight>
            </Heading>
          </Container>
        </Box>
        <Container maxW={"container.md"} my={[8, 32]}>
          <Center>
            <Box w={["100%", "75%"]}>
              <Tag mb={2}>People</Tag>
              <Heading mb={4}>Find your Tribe</Heading>
              <Text mb={4}>
                Bessa is more than just a place to scroll; it&apos;s where real
                connections happen. Whether you&apos;re looking for friends,
                chosen family, or community you can count on, Bessa helps you
                find your people.
              </Text>
              <Text>
                As an LGBTQ social networking app, Bessa is designed to bring
                queer people together in meaningful, authentic ways. Bessa makes
                it easier to find your people. It&apos;s not just about likes
                and followers, it&apos;s about shared experiences and building
                lasting connections with others who get you.
              </Text>
            </Box>
          </Center>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <SimpleGrid columns={[1, 4]} gap={8} alignItems={"center"}>
            <GridItem>
              <Image src={Mockup3} alt={"LGBTQ Social Networking App Mockup"} />
            </GridItem>
            <GridItem colSpan={[1, 2]} w={["100%", "75%"]}>
              <Tag mb={2}>Places</Tag>
              <Heading mb={4}>Discover your Gayborhood</Heading>
              <Text mb={4}>
                Bessa, the LGBTQ social networking app, helps you discover
                queer-friendly places wherever you are such as laid-back coffee
                shops, lively nightlife, and community centers. Every location
                is recommended and reviewed by LGBTQ people who know what it
                means to feel welcome.
              </Text>
              <Text>
                You can easily find new hangouts or share your own favorite
                spots to help others explore their communities with confidence.
                It&apos;s more than just a list; it&apos;s a living map built by
                the community, for the community. Whether you&apos;re traveling
                or looking for a new local favorite, Bessa connects you to
                spaces that celebrate all identities and experiences.
              </Text>
            </GridItem>
          </SimpleGrid>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Container maxW={"container.sm"} textAlign={"center"}>
            <Tag mb={2}>Download for FREE!</Tag>
            <Heading mb={4}>
              Discover More, Connect Deeper, Pay Nothing!
            </Heading>
            <Text mb={4}>
              Bessa is the LGBTQ social networking app that lets you get started
              exploring and building real connections without paying a dime.
              Unlike Grindr, Twitter, Scruff, HER, Taimi, Walla, Tinder, Hinge,
              or Jack&apos;d, Bessa is free. There aren&apos;t even any annoying
              ads!
            </Text>
            <Text mb={4}>
              But Bessa isn&apos;t just another app to scroll through; i&apos;s
              packed with unique community-building features that apps like
              Twitter and Grindr don&apos;t offer. Here, you can truly engage
              with others and discover queer-friendly spaces and events, all
              while connecting with people who genuinely get you.
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
                  <Heading mb={4}>Find your Vibe</Heading>
                  <Text mb={4}>
                    Bessa, the LGBTQ social networking app, lets you browse
                    upcoming queer events near you so you never miss out on
                    community gatherings, parties, or activism. You can also
                    post your own events to invite others and help build a
                    stronger, more connected community.
                  </Text>
                  <Text>
                    With Bessa&apos;s events listings, organizing and
                    discovering inclusive spaces has never been easier. This
                    LGBTQ social networking app puts the power in your hands to
                    create meaningful experiences and bring people together.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Image src={Mockup4} alt={"LGBTQ Social Networking App Mockup"} />
            </GridItem>
          </SimpleGrid>
        </Container>
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Card>
            <Container maxW={"container.sm"} my={[4, 16]}>
              <Heading color={"gray.900"} textAlign={"center"} mb={4}>
                Why fit in when you can log on and belong?
              </Heading>
              <Text textAlign={"center"} mb={8}>
                Bessa is the free LGBTQ social networking app built by and for
                our community. Find friends, discover queer-friendly spots, and
                show up for events. Whether you&apos;re looking for chosen fam,
                a new hangout, or a reason to get out and connect, Bessa&apos;s
                got you. Download Bessa today and start building the community
                you&apos;ve always wanted.
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
        {/*<Container maxW={"container.xl"} my={[8, 32]}>*/}
        {/*  <Heading mb={8}>From the Bessa Bulletin:</Heading>*/}
        {/*  <Table variant={"simple"} maxW={"100%"}>*/}
        {/*    <Tbody>*/}
        {/*      {posts?.map((post) => (*/}
        {/*        <Tr key={post?.id}>*/}
        {/*          <Td*/}
        {/*            borderTop={"solid 1px"}*/}
        {/*            borderBottom={"none"}*/}
        {/*            borderColor={"gray.900"}*/}
        {/*            pl={0}*/}
        {/*          >*/}
        {/*            <Link href={`/posts/${post?.slug}`}>*/}
        {/*              <Heading*/}
        {/*                as={"h3"}*/}
        {/*                dangerouslySetInnerHTML={{*/}
        {/*                  __html: post?.title?.rendered*/}
        {/*                }}*/}
        {/*                fontWeight={500}*/}
        {/*              />*/}
        {/*            </Link>*/}
        {/*          </Td>*/}
        {/*          <Td*/}
        {/*            borderTop={"solid 1px"}*/}
        {/*            borderBottom={"none"}*/}
        {/*            borderColor={"gray.900"}*/}
        {/*          >*/}
        {/*            {dayjs(post?.date)?.format("MMM D, YYYY")} &middot; by{" "}*/}
        {/*            <Link*/}
        {/*              key={post?._embedded?.author?.[0]?.slug}*/}
        {/*              href={`/authors/${post?._embedded?.author?.[0]?.slug}`}*/}
        {/*              fontWeight={500}*/}
        {/*            >*/}
        {/*              {post?._embedded?.author?.[0]?.name}*/}
        {/*            </Link>{" "}*/}
        {/*            in{" "}*/}
        {/*            <Link*/}
        {/*              key={post?._embedded?.["wp:term"]?.[0]?.[0]?.id}*/}
        {/*              href={`/categories/${post?._embedded?.["wp:term"]?.[0]?.[0]?.slug}`}*/}
        {/*              fontWeight={"bold"}*/}
        {/*            >*/}
        {/*              {post?._embedded?.["wp:term"]?.[0]?.[0]?.name}*/}
        {/*            </Link>*/}
        {/*          </Td>*/}
        {/*        </Tr>*/}
        {/*      ))}*/}
        {/*    </Tbody>*/}
        {/*  </Table>*/}
        {/*</Container>*/}
        <Container maxW={"container.xl"} my={[8, 32]}>
          <Container maxW={"container.sm"} textAlign={"center"}>
            <Tag mb={2}>Share!</Tag>
            <Heading mb={4}>Loving Bessa?</Heading>
            <Text mb={8}>
              Help us grow the vibe! If Bessa has made a difference for you,
              leave a review on the App Store or Google Play. It helps more
              people find this amazing LGBTQ social media app. And don&apos;t
              keep it to yourself. Tell your friends, your group chat, your
              chosen fam. The more of us here, the better it gets!
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
        </Container>
      </>
    </section>
  );
}
