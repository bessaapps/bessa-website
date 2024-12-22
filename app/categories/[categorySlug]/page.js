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
  Stack,
  Tag
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

async function getData(slug) {
  return await axios
    .get("https://blog.getbessa.com/wp-json/wp/v2/categories", {
      params: {
        slug
      }
    })
    .then(
      async (response) =>
        await axios
          .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
            params: {
              categories: response?.data?.[0]?.id,
              _embed: ["wp:term", "wp:featuredmedia"]
            }
          })
          .then((response) => response?.data)
    );
}

export default async function Category({ params }) {
  const { categorySlug } = await params;
  const posts = await getData(categorySlug);

  return (
    <>
      <Heading as={"h1"} textAlign={"center"} my={[8, 32]}>
        {posts?.[0]?._embedded?.["wp:term"]?.[0]?.[0]?.name}
      </Heading>
      <Container maxW={"container.xl"} my={[8, 32]}>
        <Stack gap={4}>
          {posts?.map((post) => (
            <SimpleGrid key={post?.id} columns={[1, 4]}>
              <GridItem colSpan={[1, 3]}>
                <LinkBox as={"article"}>
                  <LinkOverlay href={`/posts/${post?.slug}`}>
                    <Heading
                      dangerouslySetInnerHTML={{
                        __html: post?.title?.rendered
                      }}
                      mb={4}
                    />
                  </LinkOverlay>
                  <Flex gap={2} flexWrap={"wrap"}>
                    {post?._embedded?.["wp:term"]?.[1]?.map((tag) => (
                      <Link key={tag?.id} href={`/tags/${tag?.slug}`}>
                        <Tag colorScheme={"primary"}>{tag?.name}</Tag>
                      </Link>
                    ))}
                  </Flex>
                </LinkBox>
              </GridItem>
              <GridItem>
                <Link href={`/posts/${post?.slug}`}>
                  <AspectRatio
                    ratio={1.75}
                    borderRadius={8}
                    overflow={"hidden"}
                  >
                    <Image
                      src={
                        post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                      }
                      alt={post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
                      fill
                    />
                  </AspectRatio>
                </Link>
              </GridItem>
            </SimpleGrid>
          ))}
        </Stack>
      </Container>
    </>
  );
}
