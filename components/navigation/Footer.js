import {
  Link,
  Text,
  Container,
  Box,
  SimpleGrid,
  GridItem,
  HStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import {
  FiBriefcase,
  FiHeart,
  FiHelpCircle,
  FiShoppingBag
} from "react-icons/fi";

export default function Footer() {
  const links = [
    {
      anchor: "Bessa for iOS",
      href: "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone",
      icon: <SiAppstore />
    },
    {
      anchor: "Bessa for Android",
      href: "https://play.google.com/store/apps/details?id=com.bessa.bessa",
      icon: <SiGoogleplay />,
      margin: [0, 4]
    },
    {
      href: "https://cash.app/$getbessa",
      anchor: "Donate to LGBTQ communities",
      icon: <FiHeart />
    },
    {
      href: "https://shop.getbessa.com",
      anchor: "Shop LGBTQ Merch",
      icon: <FiShoppingBag />,
      margin: [0, 4]
    },
    {
      href: "/support",
      anchor: "Help & Support",
      icon: <FiHelpCircle />
    },
    {
      href: "/blog-content-writer",
      anchor: "Jobs",
      icon: <FiBriefcase />
    }
  ];

  const legalLinks = [
    { href: "guidelines", anchor: "Guidelines" },
    { href: "terms", anchor: "Terms & Conditions" },
    { href: "privacy", anchor: "Privacy Policy" },
    { href: "eula", anchor: "End-User License Agreement" },
    { href: "cookies", anchor: "Cookie Policy" }
  ];

  return (
    <Box>
      <Container maxW={"container.xl"} py={4}>
        <SimpleGrid columns={[1, 2]} spacing={4} mb={4}>
          <GridItem>
            {links.map((link) => (
              <HStack key={link.href} mb={link?.margin}>
                {link.icon}
                <Link
                  href={link.href}
                  title={`${link.anchor} | Bessa | An LGBTQ Social Media App`}
                  mr={4}
                >
                  {link.anchor}
                </Link>
              </HStack>
            ))}
          </GridItem>
          <GridItem>
            {legalLinks.map((link) => (
              <Text key={link.href}>
                <Link
                  href={`/${link.href}`}
                  title={`${link.anchor} | Bessa | An LGBTQ Social Media App`}
                  mr={4}
                >
                  {link.anchor}
                </Link>
              </Text>
            ))}
          </GridItem>
        </SimpleGrid>
        <Text color={"gray.600"}>
          Copyright &copy; 2024{" "}
          <Link
            as={NextLink}
            href={"/"}
            title={"Bessa | An LGBTQ Social Media App"}
          >
            Bessa Community Apps LLC
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
