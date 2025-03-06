import axios from "axios";
import {
  AspectRatio,
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Tag,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
const { convert } = require("html-to-text");

async function getData(slug) {
  return await axios
    .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
      params: {
        slug,
        _embed: ["wp:term", "wp:featuredmedia", "author"]
      }
    })
    .then((response) => response?.data?.[0]);
}

export default async function Post({ params }) {
  const { postSlug } = await params;
  const post = await getData(postSlug);

  return (
    <>
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
        <Heading
          as={"h1"}
          textAlign={"center"}
          mb={4}
          dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
        />
        <Flex align={"center"} justify={"center"} gap={2}>
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
            name={post?._embedded?.author?.[0]?.name}
          />
          <Text fontWeight={500}>{post?._embedded?.author?.[0]?.name}</Text>
          &middot;
          <Text>{dayjs(post?.date)?.format("MMM D, YYYY")}</Text>
        </Flex>
      </Container>
      {post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <Container maxW={"container.xl"} my={[8, 32]}>
          <AspectRatio ratio={1.75} borderRadius={8} overflow={"hidden"} mb={1}>
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={convert(post?.title?.rendered)}
              fill
            />
          </AspectRatio>
          {post?._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered && (
            <Text
              as={"span"}
              dangerouslySetInnerHTML={{
                __html:
                  post?._embedded?.["wp:featuredmedia"]?.[0]?.caption?.rendered
              }}
              color={"gray.800"}
              fontSize={12}
              mb={8}
            />
          )}
        </Container>
      )}
      <Container maxW={"container.sm"} my={[8, 32]}>
        <Box
          dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
          sx={{
            p: { mb: 4 },
            h2: { lineHeight: 1.2, mb: 4 },
            a: { color: "primary.500", fontWeight: 800 }
          }}
          mb={8}
        />
        <Flex gap={2} flexWrap={"wrap"}>
          {post?._embedded?.["wp:term"]?.[1]?.map((tag) => (
            <Link key={tag?.id} href={`/tags/${tag?.slug}`}>
              <Tag colorScheme={"blackAlpha"} size={"lg"}>
                {tag?.name}
              </Tag>
            </Link>
          ))}
        </Flex>
      </Container>
    </>
  );
}
