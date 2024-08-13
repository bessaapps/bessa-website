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
  Td,
  Tr,
  Tbody,
  Th,
  Table,
  TableContainer,
  Thead
} from "@chakra-ui/react";
import { title, url } from "@/utils/constants";
import Image from "next/image";
import Article from "@/images/whats-new.png";
import { FiCheck, FiX } from "react-icons/fi";

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
          and free! On Bessa you can connect, share, discover, and engage, all
          for absolutely nothing!
        </Text>
      </Container>
      <Container maxW={"container.lg"} mb={16}>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th />
                <Th>Bessa</Th>
                <Th>Twitter</Th>
                <Th>Grindr</Th>
                <Th>OkCupid</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Map</Td>
                <Td>FREE!</Td>
                <Td>
                  <FiX />
                </Td>
                <Td>
                  <FiX />
                </Td>
                <Td>
                  <FiX />
                </Td>
              </Tr>
              <Tr>
                <Td>Events</Td>
                <Td>FREE!</Td>
                <Td>
                  <FiX />
                </Td>
                <Td>
                  <FiX />
                </Td>
                <Td>
                  <FiX />
                </Td>
              </Tr>
              <Tr>
                <Td>Read Receipts</Td>
                <Td>FREE!</Td>
                <Td>
                  <FiCheck />
                </Td>
                <Td>Premium</Td>
                <Td>Premium</Td>
              </Tr>
              <Tr>
                <Td>Social Feed</Td>
                <Td>FREE!</Td>
                <Td>
                  <FiCheck />
                </Td>
                <Td>
                  <FiX />
                </Td>

                <Td>
                  <FiX />
                </Td>
              </Tr>
              <Tr>
                <Td>Members Directory</Td>
                <Td>FREE!</Td>
                <Td>
                  <FiX />
                </Td>
                <Td>
                  <FiCheck />
                </Td>

                <Td>
                  <FiCheck />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </section>
  );
}
