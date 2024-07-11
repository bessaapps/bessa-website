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
      href: "support",
      anchor: "Help & Support"
    },
    {
      href: "blog-content-writer",
      anchor: "Blog Content Writer"
    }
  ];
  const policies = [
    { href: "terms", anchor: "Terms & Conditions" },
    { href: "privacy", anchor: "Privacy Policy" },
    { href: "eula", anchor: "End-User License Agreement" },
    { href: "cookies", anchor: "Cookie Policy" }
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
              {[...links, ...policies]?.map((link) => (
                <Flex
                  key={link.href}
                  alignItems={"center"}
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push(`/${link.href}`);
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
