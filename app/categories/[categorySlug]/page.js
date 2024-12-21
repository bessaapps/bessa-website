"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  AspectRatio,
  Container,
  Flex,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Post({ params }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
        params: {
          category: params?.categorySlug,
          _embed: ["wp:term", "wp:featuredmedia"]
        }
      })
      .then((response) => setPosts(response?.data));
  }, []);

  return (
    <>
      <Heading as={"h1"} textAlign={"center"} my={[8, 32]}>
        {posts?.[0]?._embedded?.["wp:term"]?.[0]?.[0]?.name}
      </Heading>
      <Container maxW={"container.xl"} my={[8, 32]}>
        {posts?.map((post) => (
          <SimpleGrid key={post?.id} columns={4}>
            <GridItem colSpan={3}>
              <LinkBox as={"article"}>
                <Heading mb={4}>
                  <LinkOverlay href={`/posts/${post?.slug}`}>
                    {post?.title?.rendered}
                  </LinkOverlay>
                </Heading>
                <Flex gap={2}>
                  {post?._embedded?.["wp:term"]?.[1]?.map((tag) => (
                    <Link key={tag?.id} href={`/tags/${tag?.slug}`}>
                      <Tag>{tag?.name}</Tag>
                    </Link>
                  ))}
                </Flex>
              </LinkBox>
            </GridItem>
            <GridItem>
              <Link href={`/posts/${post?.slug}`}>
                <AspectRatio ratio={1.75} borderRadius={8} overflow={"hidden"}>
                  <Image
                    src={post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                    alt={post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
                    fill
                  />
                </AspectRatio>
              </Link>
            </GridItem>
          </SimpleGrid>
        ))}
      </Container>
    </>
  );
}
