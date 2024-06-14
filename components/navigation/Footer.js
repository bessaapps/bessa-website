import {
  Link,
  Text,
  Container,
  Box,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  const links = [
    {
      href: "support",
      anchor: "Help & Support"
    },
    {
      href: "lgbtqia-health",
      anchor: "LGBTQIA Health"
    },
    {
      href: "lgbtqia-community",
      anchor: "Community"
    },
    {
      href: "celebrating-international-transgender-day-of-visibility",
      anchor: "Trans Day"
    }
  ];

  const legalLinks = [
    { href: "terms", anchor: "Terms & Conditions" },
    { href: "privacy", anchor: "Privacy Policy" },
    { href: "eula", anchor: "End-User License Agreement" },
    { href: "cookies", anchor: "Cookie Policy" }
  ];

  return (
    <Box bg={"gray.800"}>
      <Container maxW={"container.lg"} py={4}>
        <SimpleGrid columns={[1, 2]} mb={4}>
          <GridItem>
            {links?.map((link) => (
              <Text key={link.href}>
                <Link
                  href={`/${link.href}`}
                  title={`${link.anchor} | Bessa | An LGBTQ Community App`}
                  color={"white"}
                  mr={4}
                >
                  {link.anchor}
                </Link>
              </Text>
            ))}
          </GridItem>
          <GridItem>
            {legalLinks?.map((legalLink) => (
              <Text key={legalLink.href}>
                <Link
                  href={`/${legalLink.href}`}
                  title={`${legalLink.anchor} | Bessa | An LGBTQ Community App`}
                  color={"white"}
                  mr={4}
                >
                  {legalLink.anchor}
                </Link>
              </Text>
            ))}
          </GridItem>
        </SimpleGrid>
        <Text color={"gray.500"}>
          Copyright &copy; 2024{" "}
          <Link
            as={NextLink}
            href={"/"}
            title={"Bessa | An LGBTQ Community App"}
          >
            Bessa Community Apps LLC
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
