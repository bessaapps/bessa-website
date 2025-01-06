import {
  Link,
  Text,
  Container,
  SimpleGrid,
  GridItem,
  Card,
  Flex,
  Heading,
  Tag,
  Button
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FiBook,
  FiBriefcase,
  FiHeart,
  FiHelpCircle,
  FiInstagram,
  FiLinkedin,
  FiShoppingBag,
  FiTwitter
} from "react-icons/fi";
import { appStores } from "@/utils/constants";

export default function Footer() {
  const links = [
    {
      href: "/support",
      anchor: "Help & Support",
      icon: <FiHelpCircle color={"white"} />
    },
    {
      href: "/blog-content-writer",
      anchor: "Jobs",
      icon: <FiBriefcase color={"white"} />
    },
    {
      href: "/blog",
      anchor: "Blog",
      icon: <FiBook color={"white"} />
    },
    {
      href: "https://cash.app/$getbessa",
      anchor: "Donate to LGBTQ communities",
      icon: <FiHeart color={"white"} />
    },
    {
      href: "https://shop.getbessa.com",
      anchor: "Shop LGBTQ Merch",
      icon: <FiShoppingBag color={"white"} />
    }
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/getbessa/about",
      icon: <FiLinkedin size={32} color={"white"} />
    },
    {
      href: "https://x.com/getbessa",
      icon: <FiTwitter size={32} color={"white"} />
    },
    {
      href: "https://www.instagram.com/getbessa",
      icon: <FiInstagram size={32} color={"white"} />
    }
  ];

  const legalLinks = [
    { href: "guidelines", anchor: "Guidelines" },
    { href: "privacy", anchor: "Privacy Policy" }
  ];

  return (
    <Card bg={"black"} minH={"calc(100vh - 96px)"} m={4} py={4}>
      <Container maxW={"container.xl"} my={"auto"}>
        <SimpleGrid columns={[1, 4]} spacing={8}>
          <GridItem colSpan={[1, 2]} rowSpan={[1, 2]} w={["100%", "75%"]}>
            <Tag bg={"primary.900"} color={"primary.100"}>
              Bessa is Free!
            </Tag>
            <Heading as={"p"} color={"gray.50"} size={"4xl"} mb={8}>
              Join your Tribe Today
            </Heading>
            <Flex gap={4} flexWrap={"wrap"}>
              {appStores.map((store) => (
                <Link key={store.name} href={store.href}>
                  <Button colorScheme={"primary"} size={"lg"} w={["100%", 140]}>
                    <Flex mr={2}>{store.icon}</Flex>
                    {store.name}
                  </Button>
                </Link>
              ))}
            </Flex>
          </GridItem>
          <GridItem colSpan={[1, 2]}>
            <Flex justify={"right"} gap={4} mb={4}>
              {socialLinks?.map((link) => (
                <Link href={link.href} key={"link.href"}>
                  {link.icon}
                </Link>
              ))}
            </Flex>
          </GridItem>
          <GridItem>
            {links.map((link) => (
              <Flex key={link.href} align={"center"} gap={2}>
                {link.icon}
                <Text color={"white"}>
                  <Link
                    href={link.href}
                    title={`${link.anchor} | Bessa | An LGBTQ Social Media App`}
                  >
                    {link.anchor}
                  </Link>
                </Text>
              </Flex>
            ))}
          </GridItem>
          <GridItem>
            {legalLinks.map((link) => (
              <Text key={link.href} color={"white"}>
                <Link
                  href={`/${link.href}`}
                  title={`${link.anchor} | Bessa | An LGBTQ Social Media App`}
                >
                  {link.anchor}
                </Link>
              </Text>
            ))}
          </GridItem>
          <GridItem colSpan={[1, 2]} />
          <GridItem colSpan={[1, 2]}>
            <Text color={"gray.800"}>
              Proudly created by{" "}
              <Link
                as={NextLink}
                href={"https://bessaapps.com"}
                title={
                  "Bessa Community Apps | Mobile Application Development Service"
                }
                color={"gray.600"}
              >
                Bessa Community Apps
              </Link>
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Card>
  );
}
