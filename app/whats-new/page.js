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
  AccordionIcon
} from "@chakra-ui/react";
import { title, url } from "@/utils/constants";

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
      <Container py={16}>
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
        <Accordion>
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
      </Container>
    </section>
  );
}
