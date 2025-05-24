import {
  Alert,
  AlertIcon,
  Box,
  Container,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Text
} from "@chakra-ui/react";
import { title } from "@/utils/constants";

export const metadata = {
  title: `Help & Support | ${title}`
};

export default function Support() {
  const guides = [
    { heading: "How to Share a Post", id: "how-to-share-a-post" },
    {
      heading: "How to Share an LGBTQ-Friendly Place",
      id: "how-to-share-an-lgbtq-friendly-place"
    },
    {
      heading: "How to Share an LGBTQ Event",
      id: "how-to-share-an-lgbtq-event"
    }
  ];

  return (
    <>
      <Container maxW={"container.xl"} my={16}>
        <Heading as={"h1"} mb={4}>
          Help &amp; Support
        </Heading>
        <Text mb={4}>
          For help with your account, feature requests, discussion around
          inclusion, and bug fixes, email{" "}
          <Link href={"mailto:topher@getbessa.com"} fontWeight={"bold"}>
            topher@getbessa.com
          </Link>
        </Text>
        <Text>
          Check out the new{" "}
          <Link href={"https://www.youtube.com/@getbessa"} fontWeight={"bold"}>
            YouTube channel
          </Link>{" "}
          for more help and tutorials.
        </Text>
      </Container>
      <Container maxW={"container.xl"} my={16}>
        <Heading mb={4}>Guides</Heading>
        <Box mb={8}>
          {guides.map((guide, index) => (
            <Text key={index} fontWeight={"bold"}>
              <Link href={`#${guide.id}`}>{guide.heading}</Link>
            </Text>
          ))}
        </Box>
        <Heading id={"how-to-share-a-post"} mb={4}>
          How to Share a Post
        </Heading>
        <Alert status={"info"} colorScheme={"primary"} my={4}>
          <AlertIcon />
          Posts must be approved by a moderator to appear to all members.
        </Alert>
        <OrderedList mb={8}>
          <ListItem>
            From the home screen, press the &quot;
            <Text as={"span"} fontWeight={"bold"}>
              +
            </Text>
            &quot;
          </ListItem>
          <ListItem>
            You can optionally add a picture or video with the icons at the
            bottom.
          </ListItem>
          <ListItem>
            Fill out the filed with something you&apos;d like to share.
          </ListItem>
          <ListItem>
            Tap the{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Share
            </Text>{" "}
            button in the upper right.
          </ListItem>
        </OrderedList>
        <Heading id={"how-to-share-an-lgbtq-friendly-place"} mb={4}>
          How to Share an LGBTQ-Friendly Place
        </Heading>
        <Alert status={"error"} colorScheme={"danger"} my={4}>
          <AlertIcon />A paid subscription is required to share places.
        </Alert>
        <Alert status={"info"} colorScheme={"primary"} my={4}>
          <AlertIcon />
          Places must be approved by a moderator to appear to all members.
        </Alert>
        <OrderedList mb={8}>
          <ListItem>
            From the places screen, press the button at the top
          </ListItem>
          <ListItem>
            Tap the box that says{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Select an image
            </Text>{" "}
            to add an image from your library.
          </ListItem>
          <ListItem>
            Fill out all the required fields. Optional fields are marked.
          </ListItem>
          <ListItem>
            Tap the{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Share
            </Text>{" "}
            button
          </ListItem>
        </OrderedList>
        <Heading id={"how-to-share-an-lgbtq-event"} mb={4}>
          How to Share an LGBTQ Event
        </Heading>
        <Alert status={"error"} colorScheme={"danger"} my={4}>
          <AlertIcon />A paid subscription is required to share events.
        </Alert>
        <Alert status={"info"} colorScheme={"primary"} my={4}>
          <AlertIcon />
          Events must be approved by a moderator to appear to all members.
        </Alert>
        <OrderedList mb={8}>
          <ListItem>
            From the events screen, press the button at the top
          </ListItem>
          <ListItem>
            Tap the box that says{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Select an image
            </Text>{" "}
            to add an image from your library.
          </ListItem>
          <ListItem>
            Fill out all the required fields. Optional fields are marked.
          </ListItem>
          <ListItem>
            Tap the{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Share
            </Text>{" "}
            button
          </ListItem>
        </OrderedList>
      </Container>
    </>
  );
}
