"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Hide,
  Link,
  useColorMode
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

export default function Top() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const { setColorMode } = useColorMode();

  const links = [
    {
      href: "https://cash.app/$getbessa",
      anchor: "Donate to LGBTQ communities"
    },
    {
      href: "https://bessa.printful.me",
      anchor: "Shop LGBTQ Merch"
    },
    {
      href: "/support",
      anchor: "Help & Support"
    },
    {
      href: "/whats-new",
      anchor: "What's New in Version 6!"
    },
    {
      href: "/blog",
      anchor: "Blog"
    },
    {
      href: "/blog-content-writer",
      anchor: "Jobs"
    }
  ];

  return (
    <>
      <Flex align={"center"} justify={"space-between"}>
        <Flex align={"center"}>
          <Heading color={"white"} mr={4}>
            <Link
              as={NextLink}
              href={"/"}
              title={"Bessa | An LGBTQ Social Media App"}
            >
              Bessa
            </Link>
          </Heading>
        </Flex>
        <Flex align={"center"} gap={4}>
          <ButtonGroup isAttached variant={"outline"}>
            <Button size={"sm"} onClick={() => setColorMode("light")}>
              <FiSun color={"white"} />
            </Button>
            <Button size={"sm"} onClick={() => setColorMode("dark")}>
              <FiMoon color={"white"} />
            </Button>
          </ButtonGroup>
          <ButtonGroup isAttached variant={"outline"}>
            <Button
              size={"sm"}
              onClick={() =>
                router.push(
                  "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone"
                )
              }
            >
              <SiAppstore color={"white"} />
            </Button>
            <Button
              size={"sm"}
              onClick={() =>
                router.push(
                  "https://play.google.com/store/apps/details?id=com.bessa.bessa"
                )
              }
            >
              <SiGoogleplay color={"white"} />
            </Button>
          </ButtonGroup>
          <Hide above={"md"}>
            <FiMenu
              color={"white"}
              size={27}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            />
          </Hide>
        </Flex>
      </Flex>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
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
                  <Link color={"white"}>{link.anchor}</Link>
                </Flex>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
