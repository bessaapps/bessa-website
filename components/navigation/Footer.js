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
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import {
  formatTitle,
  legalLinks,
  links,
  title,
  titles
} from "@/utils/constants";

export default function Footer({ buttons, children }) {
  const socialLinks = [
    {
      href: "https://www.youtube.com/@getbessa",
      icon: <Youtube size={32} color={"#f2f2f2"} />
    },
    {
      href: "https://x.com/getbessa",
      icon: <Twitter size={32} color={"#f2f2f2"} />
    },
    {
      href: "https://www.instagram.com/getbessa",
      icon: <Instagram size={32} color={"#f2f2f2"} />
    },
    {
      href: "https://www.linkedin.com/company/getbessa/about",
      icon: <Linkedin size={32} color={"#f2f2f2"} />
    }
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
            <Heading as={"p"} color={"gray.50"} size={"2xl"} mb={8}>
              {children}
            </Heading>
            <Flex gap={4} flexWrap={"wrap"}>
              {buttons.map((button) => (
                <Link key={button.anchor} href={button.href}>
                  <Button
                    bg={"gray.50"}
                    color={"gray.900"}
                    size={"lg"}
                    w={["100%", 140]}
                  >
                    {button?.icon && <Flex mr={2}>{button.icon}</Flex>}
                    {button.anchor}
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
                    title={formatTitle(titles[link.href?.slice(1)])}
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
                  href={link.href}
                  title={formatTitle(titles[link.href?.slice(1)])}
                >
                  {link.anchor}
                </Link>
              </Text>
            ))}
          </GridItem>
          <GridItem colSpan={[1, 4]}>
            <Flex justify={"right"} gap={4} mb={4}>
              {socialLinks?.map((link) => (
                <Link key={link.href} href={link.href} target={"_blank"}>
                  {link.icon}
                </Link>
              ))}
            </Flex>
            <Text color={"gray.100"} textAlign={"right"}>
              Bessa is proudly created by{" "}
              <Text as={"strong"}>
                <Link
                  as={NextLink}
                  color={"gray.50"}
                  href={"https://bessaapps.com"}
                  title={
                    "Bessa Community Apps | Mobile Application Development Service"
                  }
                  target={"_blank"}
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
