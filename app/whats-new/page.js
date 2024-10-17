"use client";

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
  List,
  ListIcon
} from "@chakra-ui/react";
import { title, url } from "@/utils/constants";
import Image from "next/image";
import Article from "@/images/whats-new.png";
import { FiCheckCircle, FiDollarSign, FiXCircle } from "react-icons/fi";

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
      button: "1.6.34",
      items: ["Challenges", "New Icon", "Member Filter Fixes", "UI Fixes"]
    },
    {
      button: "1.6.33",
      items: [
        "More Accurate Member Locations",
        "Photo Location Detection",
        "Optional Post Locations"
      ]
    },
    {
      button: "1.6.31",
      items: ["Re-added Member Location Sorting", "UI Fixes"]
    },
    {
      button: "1.6.22",
      items: [
        "Better Push and Email Notifications Customization",
        "Scroll Fixes"
      ]
    },
    {
      button: "1.6.21",
      items: ["Profile Picture Loading Improvements"]
    },
    {
      button: "1.6.20",
      items: ["RSVP's for Specific Repeating LGBTQ Events"]
    },
    {
      button: "1.6.19",
      items: [
        "Improved LGBTQ Place Listings",
        "More Relevant LGBTQ content at the top of your Feed"
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
    },
    {
      app: "Twitter",
      features: [
        { icon: FiXCircle, description: "Map", color: "red.500" },
        { icon: FiXCircle, description: "Events", color: "red.500" },
        {
          icon: FiCheckCircle,
          description: "Read Receipts",
          color: "green.500"
        },
        { icon: FiCheckCircle, description: "Social Feed", color: "green.500" },
        {
          icon: FiXCircle,
          description: "Members Directory",
          color: "red.500"
        }
      ]
    },
    {
      app: "Grindr",
      features: [
        { icon: FiXCircle, description: "Map", color: "red.500" },
        { icon: FiXCircle, description: "Events", color: "red.500" },
        {
          icon: FiDollarSign,
          description: "Read Receipts",
          color: "red.500"
        },
        { icon: FiXCircle, description: "Social Feed", color: "red.500" },
        {
          icon: FiCheckCircle,
          description: "Members Directory",
          color: "green.500"
        }
      ]
    },
    {
      app: "OkCupid",
      features: [
        { icon: FiXCircle, description: "Map", color: "red.500" },
        { icon: FiXCircle, description: "Events", color: "red.500" },
        {
          icon: FiDollarSign,
          description: "Read Receipts",
          color: "red.500"
        },
        { icon: FiXCircle, description: "Social Feed", color: "red.500" },
        {
          icon: FiCheckCircle,
          description: "Members Directory",
          color: "green.500"
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
          updates, media, and other LGBTQ content. Create a profile and browse
          other members&apos; profiles. Share and discover LGBTQ places and
          events near you and much more! Bessa 6 is packed full of fun ways to
          be a part of and interact with our LGBTQ community.
        </Text>
        <Heading as={"h2"} mb={4}>
          Change Log
        </Heading>
        <Accordion mb={8}>
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
        {/*<SimpleGrid columns={2} spacing={4}>*/}
        {/*  {comparisons.map((comparison, i) => (*/}
        {/*    <Fragment key={i}>*/}
        {/*      <GridItem display={"flex"} alignItems={"center"}>*/}
        {/*        <Heading>{comparison.app}</Heading>*/}
        {/*      </GridItem>*/}
        {/*      <GridItem>*/}
        {/*        <List spacing={2}>*/}
        {/*          {comparison.features.map((feature, j) => (*/}
        {/*            <ListItem key={j}>*/}
        {/*              <Flex align={"center"} gap={2}>*/}
        {/*                {feature}*/}
        {/*              </Flex>*/}
        {/*            </ListItem>*/}
        {/*          ))}*/}
        {/*        </List>*/}
        {/*      </GridItem>*/}
        {/*      {i < comparisons.length - 1 && (*/}
        {/*        <GridItem colSpan={2}>*/}
        {/*          <Divider />*/}
        {/*        </GridItem>*/}
        {/*      )}*/}
        {/*    </Fragment>*/}
        {/*  ))}*/}
        {/*</SimpleGrid>*/}
        {comparisons?.map((comparison) => (
          <Box key={comparison.app} mb={4}>
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
          </Box>
        ))}
      </Container>
    </section>
  );
}
