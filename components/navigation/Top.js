"use client";

import {
  AspectRatio,
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/logo.png";
import { FiMenu } from "react-icons/fi";

export default function Top() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const links = [
    {
      href: "https://cash.app/$getbessa",
      anchor: "Donate to LGBTQ communities"
    },
    {
      href: "https://shop.getbessa.com",
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
      href: "https://blog.getbessa.com",
      anchor: "Blog"
    },
    {
      href: "/blog-content-writer",
      anchor: "Jobs"
    }
  ];

  return (
    <>
      <Container maxW={"container.xl"} py={4}>
        <Flex align={"center"} justify={"space-between"}>
          <Flex align={"center"} gap={4}>
            <Link href={"/"} title={"Bessa | An LGBTQ Social Media App"}>
              <AspectRatio ratio={1} w={16}>
                <Image src={Logo} alt={"Bessa | An LGBTQ Social Media App"} />
              </AspectRatio>
            </Link>
            <Text fontWeight={"bold"} mr={4}>
              <Link href={"/"} title={"Bessa | An LGBTQ Social Media App"}>
                Bessa
              </Link>
            </Text>
          </Flex>
          <Hide above={"md"}>
            <FiMenu size={27} onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
          </Hide>
        </Flex>
      </Container>
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
                  <Text color={"white"}>{link.anchor}</Text>
                </Flex>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
