import {
  Link,
  Text,
  Container,
  SimpleGrid,
  GridItem,
  Flex,
  Heading,
  Button
} from "@chakra-ui/react";
import NextLink from "next/link";
import { appStores } from "@/utils/constants";
import {
  BookOpen,
  BriefcaseBusiness,
  CircleHelp,
  Heart,
  Instagram,
  Linkedin,
  Rss,
  Twitter
} from "lucide-react";

export default function Footer() {
  const links = [
    {
      href: "/about",
      anchor: "Story",
      icon: <BookOpen size={"1rem"} color={"#f2f2f2"} />
    },
    {
      href: "/blog",
      anchor: "Blog",
      icon: <Rss size={"1rem"} color={"#f2f2f2"} />
    },
    {
      href: "https://cash.app/$getbessa",
      anchor: "Donate",
      icon: <Heart size={"1rem"} color={"#f2f2f2"} />
    },
    {
      href: "/blog-content-writer",
      anchor: "Jobs",
      icon: <BriefcaseBusiness size={"1rem"} color={"#f2f2f2"} />
    },
    {
      href: "/support",
      anchor: "Help & Support",
      icon: <CircleHelp size={"1rem"} color={"#f2f2f2"} />
    }
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/getbessa/about",
      icon: <Linkedin size={32} color={"#f2f2f2"} />
    },
    {
      href: "https://x.com/getbessa",
      icon: <Twitter size={32} color={"#f2f2f2"} />
    },
    {
      href: "https://www.instagram.com/getbessa",
      icon: <Instagram size={32} color={"#f2f2f2"} />
    }
  ];

  const legalLinks = [
    { href: "guidelines", anchor: "Guidelines" },
    { href: "privacy", anchor: "Privacy Policy" }
  ];

  return (
    <Flex
      bgImage={"url('/images/gradients/mesh-8.png')"}
      bgPosition={"center"}
      bgSize={"cover"}
      minH={"calc(100vh - 5rem)"}
      py={4}
    >
      <Container maxW={"container.xl"} my={"auto"}>
        <SimpleGrid columns={[1, 4]} spacing={8} minW={"100%"}>
          <GridItem colSpan={[1, 2]} w={["100%", "75%"]}>
            <Heading as={"p"} color={"gray.50"} size={"4xl"} mb={8}>
              Join your Tribe Today for FREE!
            </Heading>
            <Flex gap={4} flexWrap={"wrap"}>
              {appStores.map((store) => (
                <Link key={store.name} href={store.href}>
                  <Button
                    bg={"gray.50"}
                    color={"gray.900"}
                    size={"lg"}
                    w={["100%", 140]}
                  >
                    <Flex mr={2}>{store.icon}</Flex>
                    {store.name}
                  </Button>
                </Link>
              ))}
            </Flex>
          </GridItem>
          <GridItem colSpan={[1, 1]}>
            {links.map((link) => (
              <Flex key={link.href} align={"center"} gap={2}>
                {link.icon}
                <Text color={"gray.50"}>
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
          <GridItem colSpan={[1, 1]}>
            {legalLinks.map((link) => (
              <Text key={link.href} color={"gray.50"}>
                <Link
                  href={`/${link.href}`}
                  title={`${link.anchor} | Bessa | An LGBTQ Social Media App`}
                >
                  {link.anchor}
                </Link>
              </Text>
            ))}
          </GridItem>
          <GridItem colSpan={[1, 4]}>
            <Flex justify={"right"} gap={4} mb={4}>
              {socialLinks?.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.icon}
                </Link>
              ))}
            </Flex>
            <Text color={"gray.100"} textAlign={"right"}>
              Bessa is proudly created by{" "}
              <Text as={"strong"}>
                <Link
                  as={NextLink}
                  href={"https://bessaapps.com"}
                  title={
                    "Bessa Community Apps | Mobile Application Development Service"
                  }
                  color={"gray.50"}
                >
                  Bessa Community Apps
                </Link>
              </Text>
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
