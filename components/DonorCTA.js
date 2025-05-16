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
import { Heart, Instagram, Linkedin, Send, Twitter } from "lucide-react";

export default function DonorCTA() {
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

  return (
    <Flex
      bgImage={"url('/images/gradients/mesh-8.png')"}
      bgPosition={"center"}
      bgSize={"cover"}
      py={16}
    >
      <Container maxW={"container.xl"} my={"auto"}>
        <SimpleGrid columns={[1, 4]} spacing={8} minW={"100%"}>
          <GridItem colSpan={[1, 3]}>
            <Heading as={"p"} color={"gray.50"} size={"3xl"} mb={8}>
              For just $190 a month, your donation will help Bessa become a home
              for thousands of LGBTQ people who need safe, inclusive connection.
            </Heading>
            <Link href={"https://givebutter.com/getbessa"} target={"_blank"}>
              <Button bg={"gray.50"} color={"gray.900"} size={"lg"}>
                <Flex mr={2}>
                  <Heart />
                </Flex>
                Start Now!
              </Button>
            </Link>
          </GridItem>
          <GridItem colSpan={[1, 4]}>
            <Flex justify={"right"} gap={4} mb={4}>
              {socialLinks?.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.icon}
                </Link>
              ))}
            </Flex>
            <Flex justify={"right"} gap={4}>
              <Flex align={"center"} gap={2}>
                <Send size={"1rem"} color={"#f2f2f2"} />
                <Text color={"gray.50"} fontSize={18}>
                  <Link href={"mailto:topher@getbessa.com"}>
                    topher@getbessa.com
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
