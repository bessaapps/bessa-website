import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Show,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/logo.png";
import { appStores, formatTitle, title, titles } from "@/utils/constants";
import DrawerNavigation from "@/components/navigation/DrawerNavigation";

export default function Top() {
  const links = [
    {
      href: "/about",
      anchor: "About"
    },
    {
      href: "/donate",
      anchor: "Donate"
    }
  ];

  return (
    <>
      <Box bg={"gray.50"}>
        <Container maxW={"container.xl"} py={4}>
          <Flex align={"center"} justify={"space-between"}>
            <Flex align={"center"} gap={4}>
              <Link href={"/"} title={formatTitle()}>
                <AspectRatio ratio={1} w={12}>
                  <Image src={Logo} alt={formatTitle()} />
                </AspectRatio>
              </Link>
              <Text fontSize={"1.25rem"} fontWeight={800} mr={4}>
                <Link href={"/"} title={formatTitle()}>
                  Bessa
                </Link>
              </Text>
              <Show above={"sm"}>
                <Flex>
                  {links.map(({ href, anchor }) => (
                    <Link
                      key={href}
                      href={href}
                      title={formatTitle(titles[href?.slice(1)])}
                    >
                      <Button variant={"ghost"} fontWeight={500}>
                        {anchor}
                      </Button>
                    </Link>
                  ))}
                </Flex>
              </Show>
            </Flex>
            <Flex align={"center"} gap={8}>
              <Show above={"sm"}>
                <Flex gap={4}>
                  {appStores.map(({ name, href, icon }) => (
                    <Link key={name} href={href}>
                      <Button colorScheme={"primary"}>
                        <Flex mr={2}>{icon}</Flex>
                        {name}
                      </Button>
                    </Link>
                  ))}
                </Flex>
              </Show>
              <DrawerNavigation />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
