import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  Flex
} from "@chakra-ui/react";
import apple from "@/images/wishlist/apple.png";
import expo from "@/images/wishlist/expo.png";
import photoshop from "@/images/wishlist/photoshop.png";
import play from "@/images/wishlist/play.png";
import workspace from "@/images/wishlist/workspace.png";
import vercel from "@/images/wishlist/vercel.png";
import brevo from "@/images/wishlist/brevo.png";
import heart from "@/images/heart.jpg";
import NextImage from "next/image";

export const metadata = {
  title:
    "Give | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
};

export default function Donate() {
  const links = [
    {
      image: expo,
      heading: "Expo",
      description:
        "This is how code gets turned into your favorite LGBTQIA+ Apple or Android social media app. It compiles the 1's and 0's, builds them into a mobile app, and helps publish it to the Apple App Store and Google Play.",
      price: "99/mo"
    },
    {
      image: vercel,
      heading: "Vercel",
      description:
        "An API is like the backbone to any mobile app. It helps handle all those posts, messages, and other information running around Bessa. Vercel helps to build, publish, and maintain the API for Bessa.",
      price: "20/mo"
    },
    {
      image: photoshop,
      heading: "Photoshop",
      description:
        "Photoshop comes in handy for creating fun graphics for the app, snapshots of what Bessa can do, and more!",
      price: "9.99/mo"
    },
    {
      image: apple,
      heading: "Apple Developer Program",
      description: "Required to publish the app to the Apple app store",
      price: "99/yr"
    },
    {
      image: brevo,
      heading: "Brevo",
      description: "A tool for sending you alerts from your community",
      price: "9/mo"
    },
    {
      image: workspace,
      heading: "Google Workspace",
      description:
        "Gmail, Google Drive, and other tools needed to keep things running",
      price: "7.20/mo"
    },
    {
      image: play,
      heading: "Google Play",
      description: "Required to publish the app to the Google Play store",
      price: "25/lifetime"
    }
  ];

  return (
    <Container maxW={"container.lg"} py={16}>
      <Box mb={4}>
        <Image
          as={NextImage}
          src={heart}
          alt={"Inclusive, Body-Positive LGBTQIA+ Community"}
          height={100}
          width={100}
        />
      </Box>
      <Heading as={"h1"} mb={4}>
        Support Inclusive, Body-Positive LGBTQIA+ Community
      </Heading>
      <Text mb={4}>
        Bessa is a safe, inclusive, and body-positive community of lesbian, gay,
        bisexual, transgender, queer, intersex, and asexual (LGBTQIA+) people
        who want to connect with others and socialize with their friends,
        family, and others. Your donation pays for services needed to keep this
        safe and inclusive community alive.
      </Text>
      <Link href={"https://donorbox.org/bessssssa2024"}>
        <Button
          colorScheme={"primary"}
          size={"lg"}
          minW={["100%", "48px"]}
          mb={4}
        >
          Donate
        </Button>
      </Link>
      <Heading textAlign={"center"} mb={4}>
        The Light Bill
      </Heading>
      <Flex direction={"column"} gap={4}>
        {links.map((link) => (
          <Card
            key={link.heading}
            direction={"row"}
            overflow={"hidden"}
            variant={"outline"}
          >
            <Image
              as={NextImage}
              objectFit={"cover"}
              maxW={200}
              src={link.image}
              alt={link.description}
            />
            <Stack>
              <CardBody>
                <Heading mb={2}>{link.heading}</Heading>
                <Text>{link.description}</Text>
                <Text fontWeight={"bold"}>${link.price}</Text>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}
