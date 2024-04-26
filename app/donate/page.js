import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import apple from "@/images/wishlist/apple.png";
import expo from "@/images/wishlist/expo.png";
import photoshop from "@/images/wishlist/photoshop.png";
import play from "@/images/wishlist/play.png";
import workspace from "@/images/wishlist/workspace.png";
import Image from "next/image";
import heart from "@/images/heart.jpg";

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
        "Required to compile, build, deploy, and maintain the app for your favorite app store",
      price: "99/mo"
    },
    {
      image: apple,
      heading: "Apple Developer Program",
      description: "Required to publish the app to the Apple app store",
      price: "99/yr"
    },
    {
      image: play,
      heading: "Google Play",
      description: "Required to publish the app to the Google Play store",
      price: "25/lifetime"
    },
    {
      image: photoshop,
      heading: "Photoshop",
      description: "For the occasional image editing",
      price: "9.99/mo"
    },
    {
      image: workspace,
      heading: "Google Workspace",
      description:
        "Gmail, Google Drive, and other tools needed to keep things running",
      price: "7.20/mo"
    }
  ];

  return (
    <Container maxW={"container.lg"} py={16}>
      <Box mb={4}>
        <Image
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
        Bessa is an inclusive and body-positive community of lesbian, gay,
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
        Wishlist
      </Heading>
      <Link href={"https://donorbox.org/bessssssa2024"}>
        <SimpleGrid columns={[1, 4]} spacing={4}>
          {links.map((link) => (
            <GridItem key={link.heading}>
              <Card cursor={"pointer"} overflow={"hidden"} h={"100%"}>
                <Image src={link.image} alt={"Donate to Bessa"} />
                <CardBody
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"space-between"}
                >
                  <Box>
                    <Text fontWeight={"bold"} mb={2}>
                      {link.heading}
                    </Text>
                    <Text mb={4}>{link.description}</Text>
                  </Box>
                  <Box>
                    <Button
                      colorScheme={"primary"}
                      minW={["100%", "40px"]}
                      mb={2}
                    >
                      Give
                    </Button>
                    <Text fontWeight={"bold"} mb={2}>
                      ${link.price}
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Link>
    </Container>
  );
}
