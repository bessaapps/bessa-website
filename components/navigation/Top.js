"use client";

import {
  AspectRatio,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  Show,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/logo.png";
import { FiMenu } from "react-icons/fi";
import { appStores } from "@/utils/constants";

export default function Top() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const links = [
    {
      href: "/about",
      anchor: "Story"
    },
    // {
    //   href: "/blog",
    //   anchor: "Blog"
    // },
    // {
    //   href: "https://cash.app/$getbessa",
    //   anchor: "Donate"
    // },
    {
      href: "/become-a-sponsor",
      anchor: "Sponsor or Donate"
    }
    // {
    //   href: "/blog-content-writer",
    //   anchor: "Jobs"
    // }
  ];

  return (
    <>
      <Box bg={"gray.50"}>
        <Container maxW={"container.xl"} py={4}>
          <Flex align={"center"} justify={"space-between"}>
            <Flex align={"center"} gap={4}>
              <Link href={"/"} title={"Bessa | LGBTQ Social Networking App"}>
                <AspectRatio ratio={1} w={12}>
                  <Image
                    src={Logo}
                    alt={"Bessa | LGBTQ Social Networking App"}
                  />
                </AspectRatio>
              </Link>
              <Text fontSize={"1.25rem"} fontWeight={800} mr={4}>
                <Link href={"/"} title={"Bessa | LGBTQ Social Networking App"}>
                  Bessa
                </Link>
              </Text>
              <Show above={"sm"}>
                <Flex>
                  {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button variant={"ghost"} fontWeight={500}>
                        {link.anchor}
                      </Button>
                    </Link>
                  ))}
                </Flex>
              </Show>
            </Flex>
            <Show above={"sm"}>
              <Flex gap={4}>
                {appStores.map((store) => (
                  <Link key={store.name} href={store.href}>
                    <Button colorScheme={"primary"}>
                      <Flex mr={2}>{store.icon}</Flex>
                      {store.name}
                    </Button>
                  </Link>
                ))}
              </Flex>
            </Show>
            <Hide above={"sm"}>
              <FiMenu
                size={27}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </Hide>
          </Flex>
        </Container>
      </Box>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"#f2f2f2"} />
          <DrawerBody
            bg={"primary.500"}
            display={"flex"}
            alignItems={"center"}
            h={"100%"}
          >
            <Box>
              {links.map((link) => (
                <Flex
                  key={link.href}
                  alignItems={"center"}
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push(link.href);
                  }}
                >
                  <Text color={"gray.50"}>{link.anchor}</Text>
                </Flex>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
