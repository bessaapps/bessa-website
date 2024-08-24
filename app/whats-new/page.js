import {
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionIcon,
  SimpleGrid,
  GridItem,
  List,
  Flex,
  Divider
} from "@chakra-ui/react";
import { title, url } from "@/utils/constants";
import Image from "next/image";
import Article from "@/images/whats-new.png";
import { Fragment } from "react";

export const metadata = {
  title: `What's New in Version 6! | ${title}`,
  description:
    "Being a part of the LGBTQ community gets even better in Bessa 6! It's packed full of fun ways to be a part of and interact with our LGBTQ community.",
  openGraph: {
    title: `What's New in Version 6! | ${title}`,
    description:
      "Being a part of the LGBTQ community gets even better in Bessa 6! It's packed full of fun ways to be a part of and interact with our LGBTQ community.",
    url: `${url}/whats-new`,
    siteName: "Bessa",
    images: [
      {
        url: `${url}/images/social.png`,
        width: 800,
        height: 600
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: `What's New in Version 6! | ${title}`,
  url: `${url}/whats-new`,
  image: `${url}/images/social.png`,
  datePublished: "2024-07-21T00:00:00+00:00",
  dateModified: "2024-07-21T00:00:00+00:00",
  author: "Topher"
};

export default function WhatsNew() {
  const changes = [
    {
      button: "Coming Soon",
      items: [
        "Improved LGBTQ Place Listings",
        "More Popular Posts at the Top of your Feed"
      ]
    },
    {
      button: "1.6.18",
      items: ["LGTBQ Event RSVP's"]
    },
    {
      button: "1.6.17",
      items: ["Repeating LGBTQ Events"]
    },
    {
      button: "1.6.16",
      items: ["Profile Fix", "Add Post, Event, and Place Fix"]
    },
    {
      button: "1.6.15",
      items: [
        "Post Pictures Directly from your Camera",
        "On-Profile Member Reviews and Events",
        "Ability to Flag Single Posts",
        "Ability to Flag Places and Reviews",
        "Birthday Fix"
      ]
    },
    {
      button: "1.6.14",
      items: [
        "Stronger Spam Prevention",
        "Better Moderation",
        "SF Symbols",
        "Better Loading Indicators",
        "Improved Likes Design"
      ]
    },
    {
      button: "1.6.13",
      items: [
        "Automatically Load More Members",
        "Improved Data Security",
        "Better Flagging Tools",
        "Better Login and Registration Experiences"
      ]
    },
    {
      button: "1.6.12",
      items: [
        "New Flair Banner on your Profile",
        "See Place Reviews in your Feed",
        "Search Places in the Map",
        "Birthdays!",
        "Fixed Notifications Count"
      ]
    }
  ];

  const comparisons = [
    {
      app: "Bessa",
      features: [
        "✅ Map",
        "✅ Events",
        "✅ Read Receipts",
        "✅ Social Feed",
        "✅ Members Directory"
      ]
    },
    {
      app: "Twitter",
      features: [
        "❌ Map",
        "❌ Events",
        "✅ Read Receipts",
        "✅ Social Feed",
        "❌ Members Directory"
      ]
    },
    {
      app: "Grindr",
      features: [
        "❌ Map",
        "❌ Events",
        "💰 Read Receipts",
        "❌ Social Feed",
        "✅ Members Directory"
      ]
    },
    {
      app: "OkCupid",
      features: [
        "❌ Map",
        "❌ Events",
        "💰 Read Receipts",
        "❌ Social Feed",
        "✅ Members Directory"
      ]
    }
  ];

  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container maxW={"container.lg"} py={16}>
        <Image
          src={Article}
          alt={"What's New in Version 6!"}
          style={{ borderRadius: 8 }}
        />
      </Container>
      <Container mb={8}>
        <Heading as={"h1"} mb={4}>
          What&apos;s New in Version 6
        </Heading>
        <Text mb={4}>
          Being a part of the LGBTQ community gets even better in Bessa 6! Share
          updates and media. Create a profile and browse other members&apos;
          profiles. Share and discover LGBTQ places and events near you and much
          more! Bessa 6 is packed full of fun ways to be a part of and interact
          with our LGBTQ community.
        </Text>
        <Heading as={"h2"} mb={4}>
          Change Log
        </Heading>
        <Accordion allowToggle defaultIndex={0} mb={8}>
          {changes?.map((change, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex={1} textAlign={"left"}>
                  {change?.button}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <UnorderedList spacing={2} mb={4}>
                  {change?.items?.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Heading as={"h2"} mb={4}>
          Bessa Costs Nothing!
        </Heading>
        <Text mb={4}>
          It&apos;s important that this LGBTQ social media app remain accessible
          and free! Unlike other apps like Twitter, Grindr, HER, and OkCupid,
          Bessa costs absolutely nothing. Additionally, Bessa is loaded with
          community-building features Twitter and Grindr don&apos;t offer. Here
          you can connect, share, discover, and engage with your LGBTQ community
          for free.
        </Text>
        <SimpleGrid columns={2} spacing={4}>
          {comparisons.map((comparison, i) => (
            <Fragment key={i}>
              <GridItem display={"flex"} alignItems={"center"}>
                <Heading>{comparison.app}</Heading>
              </GridItem>
              <GridItem>
                <List spacing={2}>
                  {comparison.features.map((feature, j) => (
                    <ListItem key={j}>
                      <Flex align={"center"} gap={2}>
                        {feature}
                      </Flex>
                    </ListItem>
                  ))}
                </List>
              </GridItem>
              {i < comparisons.length - 1 && (
                <GridItem colSpan={2}>
                  <Divider />
                </GridItem>
              )}
            </Fragment>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
