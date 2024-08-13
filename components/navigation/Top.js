"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Hide,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Top() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const links = [
    {
      anchor: "Download for iOS",
      href: "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone"
    },
    {
      anchor: "Download for Android",
      href: "https://play.google.com/store/apps/details?id=com.bessa.bessa"
    },
    {
      href: "https://gofund.me/4a63173e",
      anchor: "Donate to LGBTQ communities"
    },
    {
      href: "https://society6.com/getbessa",
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
        <Hide above={"md"}>
          <Box cursor={"pointer"}>
            <FiMenu
              color={"white"}
              size={27}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            />
          </Box>
        </Hide>
      </Flex>
      <Drawer
        isOpen={isDrawerOpen}
        placement={"left"}
        onClose={() => setIsDrawerOpen(false)}
      >
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
