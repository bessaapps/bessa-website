import {
  Container,
  Heading,
  Text,
  AspectRatio,
  SimpleGrid,
  GridItem,
  Button,
  AlertIcon,
  Alert,
  List,
  ListItem
} from "@chakra-ui/react";
import Image from "next/image";
import IcedCoffeeGlass from "@/images/products/stereotypically-gay-iced-coffee-glass.png";
import { title, url } from "@/utils/constants";
import Link from "next/link";

export const metadata = {
  title: `Stereotypically Gay Iced Coffee Glass | ${title}`,
  description:
    "Make every coffee break gay AF with this stereotypically gay iced coffee glass with the Bessa logo, a purple unicorn.",
  openGraph: {
    title: `Stereotypically Gay Iced Coffee Glass | ${title}`,
    description:
      "Make every coffee break gay AF with this stereotypically gay iced coffee glass with the Bessa logo, a purple unicorn.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Stereotypically Gay Iced Coffee Glass",
  description:
    "Make every coffee break gay AF with this stereotypically gay iced coffee glass with the Bessa logo, a purple unicorn.",
  offers: [
    {
      "@type": "Offer",
      // "name": "Default Title",
      availability: "https://schema.org/InStock",
      price: 12,
      priceCurrency: "USD"
      // "priceValidUntil": "2024-03-31","url": "/products/3-step-brightening-system?variant=43098868056293"
    }
  ],
  // "category": "Hyperpigmentation",
  url: `${url}/products/stereotypically-gay-iced-coffee-glass`
  // "sku": "",
  // todo: add image
  // image: {
  //   "@type": "ImageObject",
  //   url: "https://shop.drherschthal.com/cdn/shop/products/cycpera_1024x.jpg?v=1657055636",
  //   image:
  //     "https://shop.drherschthal.com/cdn/shop/products/cycpera_1024x.jpg?v=1657055636",
  //   name: "3 Step Brightening System",
  //   width: "1024",
  //   height: "1024"
  // },
};

export default function StereotypicallyGayIcedCoffeeGlass() {
  return (
    <section>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              Make every coffee break gay AF with this stereotypically gay iced
              coffee glass with the Bessa logo, a purple unicorn.
            </Text>
            <Heading mb={4}>Description</Heading>
            <Text mb={4}>
              Iced coffee and cold brew is great, but this glass is for so much
              more! Make your favorite cocktail in this glass or pour a
              refreshing glass of lemonade, juice, or soda. And, remember; iced
              coffee is not just for gays! 😂
            </Text>
            <List mb={4}>
              <ListItem>Glass</ListItem>
              <ListItem>16 oz. (473 ml)</ListItem>
              <ListItem>Not dishwasher or microwave safe</ListItem>
            </List>
            <Text fontSize={"1.476rem"} fontWeight={"bold"} mb={2}>
              From $12
            </Text>
            <Link href={"https://bessa.printful.me/product/iced-coffee-glass"}>
              <Button colorScheme={"primary"}>Get yours Now!</Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </Container>
    </section>
  );
}
