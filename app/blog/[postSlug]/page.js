"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  AspectRatio,
  Avatar,
  Container,
  Flex,
  Heading,
  Tag,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import Script from "next/script";

export default function Post({ params }) {
  const [post, setPost] = useState({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
        params: {
          slug: params?.postSlug,
          _embed: ["wp:term", "wp:featuredmedia", "author"]
        }
      })
      .then((response) => setPost(response?.data?.[0]));
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <Script
        id={"LDJSON"}
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: `${post?.title?.rendered} | Bessa`,
            url,
            image: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
            datePublished: dayjs(post?.date)?.format(),
            dateModified: dayjs(post?.modified)?.format(),
            author: post?._embedded?.author?.[0]?.name
          })
        }}
        strategy={"beforeInteractive"}
      />
      <Container maxW={"container.xl"} my={[8, 32]}>
        <Flex justify={"center"}>
          <Tag size={"lg"} colorScheme={"primary"} mb={4}>
            <Link
              key={post?._embedded?.["wp:term"]?.[0]?.[0]?.id}
              href={`/categories/${post?._embedded?.["wp:term"]?.[0]?.[0]?.slug}`}
            >
              {post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
            </Link>
          </Tag>
        </Flex>
        <Heading as={"h1"} textAlign={"center"} mb={4}>
          {post?.title?.rendered}
        </Heading>
        <Flex align={"center"} justify={"center"} gap={4}>
          <Avatar
            src={
              post?._embedded?.author?.[0]?.avatar_urls?.[
                Object.keys(post?._embedded?.author?.[0]?.avatar_urls)?.map(
                  (key) => key
                )?.[
                  Object.keys(post?._embedded?.author?.[0]?.avatar_urls)?.map(
                    (key) => key
                  )?.length - 1
                ]
              ]
            }
          />
          <Text fontWeight={500}>{post?._embedded?.author?.[0]?.name}</Text>
          &middot;
          <Text>{dayjs(post?.modified)?.format("MMM D, YYYY")}</Text>
        </Flex>
      </Container>
      <Container maxW={"container.xl"} my={[8, 32]}>
        <AspectRatio ratio={1.75} borderRadius={8} overflow={"hidden"} mb={8}>
          <Image
            src={post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            alt={post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
            fill
          />
        </AspectRatio>
      </Container>
      <Container maxW={"container.sm"} my={[8, 32]}>
        <Text
          dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
          sx={{ p: { mb: 4 } }}
          mb={4}
        />
      </Container>
    </>
  );
}
