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

export const metadata = {
  title: "Help & Support | Bessa | LGBTQ Social Networking App"
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
            Select{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Post
            </Text>
            .
          </ListItem>
          <ListItem>
            You can optionally add a picture, video, or audio with the icons at
            the top.
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
        <OrderedList mb={8}>
          <ListItem>
            From the home screen, press the &quot;
            <Text as={"span"} fontWeight={"bold"}>
              +
            </Text>
            &quot;
          </ListItem>
          <ListItem>
            Select{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Place
            </Text>
            .
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
        <Alert status={"info"} colorScheme={"primary"} my={4}>
          <AlertIcon />
          After publishing an event, it will take a short period of time to
          appear in the app. Events must also be approved by a moderator to
          appear to all members.
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
            Select{" "}
            <Text as={"span"} fontWeight={"bold"}>
              Event
            </Text>
            .
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
