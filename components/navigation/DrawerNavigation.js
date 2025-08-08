"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Link,
  Stack
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  formatTitle,
  legalLinks,
  links,
  title,
  titles
} from "@/utils/constants";

export default function DrawerNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Box
        cursor={"pointer"}
        p={2}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <FiMenu size={27} />
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
            <Stack>
              {links.map(({ href, anchor }) => (
                <Link
                  key={href}
                  color={"gray.50"}
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push(href);
                  }}
                  title={formatTitle(titles[href?.slice(1)])}
                >
                  {anchor}
                </Link>
              ))}
              {legalLinks.map(({ href, anchor }) => (
                <Link
                  key={href}
                  color={"gray.50"}
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push(href);
                  }}
                  title={formatTitle(titles[href?.slice(1)])}
                >
                  {anchor}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
