"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text
} from "@chakra-ui/react";
import { IoLogoAppleAppstore } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/images/logo.png";

export default function DeepLinkPost({ searchParams }) {
  const router = useRouter();

  useEffect(() => {
    router.push(`bessa:///posts/${searchParams?.postId}`);
  }, []);

  return (
    <Box bg={"primary.500"} color={"gray.100"}>
      <Flex
        minH={"calc(100vh - 61px - 48px)"}
        align={"center"}
        justify={"center"}
      >
        <Container maxW={"container.lg"} py={16}>
          <Flex justify={"center"} direction={["column", "row"]}>
            <Flex direction={"column"} w={["100%", "50%"]} justify={"center"}>
              <Heading as={"h1"} color={"white"} mb={4}>
                @{searchParams?.username}
              </Heading>
              {searchParams?.description && (
                <Text mb={4}>{searchParams.description}</Text>
              )}
              <Link
                href={
                  "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone"
                }
              >
                <Button
                  colorScheme={"primary"}
                  bg={"primary.800"}
                  color={"white"}
                  size={"lg"}
                  w={["100%", "auto"]}
                >
                  <Flex mr={2}>
                    <IoLogoAppleAppstore />
                  </Flex>
                  View on Bessa
                </Button>
              </Link>
            </Flex>
            <Flex w={["100%", "50%"]}>
              <Image
                src={Logo}
                alt={"Safe Inclusive Body-Positive LGBTQ Community"}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
