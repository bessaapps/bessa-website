import {
  Link,
  Text,
  Container,
  Flex,
  Heading,
  Button,
  Box
} from "@chakra-ui/react";
import { Instagram, Linkedin, Send, Twitter, Youtube } from "lucide-react";

export default function DonorCTA() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/getbessa/about",
      icon: <Linkedin size={32} color={"#f2f2f2"} />
    },
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
    }
  ];

  return (
    <Flex
      bgImage={"url('/images/gradients/mesh-8.png')"}
      bgPosition={"center"}
      bgSize={"cover"}
      minH={"calc(100vh - 5rem)"}
      py={16}
    >
      <Container maxW={"container.xl"} my={"auto"}>
        <Flex gap={8} mb={8}>
          <Box>
            <Heading as={"p"} color={"gray.50"} size={"3xl"} mb={8}>
              Support the space where we show up as our full selves today
            </Heading>
            <Flex w={"100%"} gap={2} flexWrap={"wrap"} mb={12}>
              <Link
                href={
                  "https://www.indiegogo.com/projects/the-social-app-that-puts-queer-community-first"
                }
                target={"_blank"}
              >
                <Button colorScheme={"primary"} size={"lg"}>
                  Sponsor
                </Button>
              </Link>
              <Link
                href={
                  "https://www.indiegogo.com/projects/the-social-app-that-puts-queer-community-first"
                }
                target={"_blank"}
              >
                <Button colorScheme={"whiteAlpha"} size={"lg"}>
                  Donate
                </Button>
              </Link>
            </Flex>
          </Box>
          <Box minW={[0, 440]} />
        </Flex>
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
      </Container>
    </Flex>
  );
}
