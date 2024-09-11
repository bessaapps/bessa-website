import {
  Container,
  Heading,
  Text,
  AspectRatio,
  SimpleGrid,
  GridItem,
  Button,
  AlertIcon,
  Alert
} from "@chakra-ui/react";
import Image from "next/image";
import IcedCoffeeGlass from "@/images/products/stereotypically-gay-iced-coffee-glass.png";
import { title, url } from "@/utils/constants";
import Link from "next/link";

export const metadata = {
  title: `Stereotypically Gay Iced Coffee Glass | ${title}`,
  description: "",
  openGraph: {
    title: `Stereotypically Gay Iced Coffee Glass | ${title}`,
    description: "",
    url: `${url}/products/stereotypically-gay-iced-coffee-glass`,
    siteName: title,
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

export default function StereotypicallyGayIcedCoffeeGlass() {
  return (
    <>
      <Container maxW={"container.lg"} my={16}>
        <SimpleGrid columns={[1, 3]} gap={4}>
          <GridItem>
            <AspectRatio ratio={1}>
              <Image
                src={IcedCoffeeGlass}
                alt={"Guidelines"}
                style={{ borderRadius: 8 }}
              />
            </AspectRatio>
          </GridItem>
          <GridItem colSpan={[undefined, 2]}>
            <Heading as={"h1"} mb={4}>
              Stereotypically Gay Iced Coffee Glass
            </Heading>
            <Alert status={"info"} mb={4}>
              <AlertIcon />
              30% of your purchase supports Bessa, an LGBTQ social media app!
            </Alert>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              aliquam aliquid animi architecto corporis dolorum earum error
              exercitationem mollitia necessitatibus numquam optio perferendis
              placeat porro provident quibusdam tempora, vel voluptates.
            </Text>
            <Heading mb={4}>Posts, Places, Events, and Reviews</Heading>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              at, consequuntur cupiditate earum eligendi labore maiores
              necessitatibus nemo nostrum numquam odit placeat possimus
              praesentium quis, quo, reiciendis repellendus vitae. Cupiditate.
            </Text>
            <Text fontSize={"1.476rem"} fontWeight={"bold"} mb={2}>
              From $12
            </Text>
            <Link href={"https://bessa.printful.me/product/iced-coffee-glass"}>
              <Button colorScheme={"primary"}>Get yours Now!</Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
}
