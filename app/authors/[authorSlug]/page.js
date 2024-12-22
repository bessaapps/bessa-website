import axios from "axios";
import {
  AspectRatio,
  Avatar,
  Container,
  Flex,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Tag,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

async function getData(slug) {
  return await axios
    .get("https://blog.getbessa.com/wp-json/wp/v2/users", {
      params: {
        slug
      }
    })
    .then(async (response) => {
      const author = response?.data?.[0];

      return await axios
        .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
          params: {
            author: author?.id,
            _embed: ["wp:term", "wp:featuredmedia", "author"]
          }
        })
        .then((response) => {
          return {
            author,
            posts: response?.data
          };
        });
    });
}

export default async function Category({ params }) {
  const { authorSlug } = await params;
  const { author, posts } = await getData(authorSlug);

  return (
    <>
      <Container maxW={"container.xl"} my={[8, 32]}>
        <Flex justify={"center"}>
          <Avatar
            src={
              author.avatar_urls?.[
                Object.keys(author?.avatar_urls)?.map((key) => key)?.[
                  Object.keys(author?.avatar_urls)?.map((key) => key)?.length -
                    1
                ]
              ]
            }
            size={"xl"}
            mb={4}
          />
        </Flex>
        <Heading as={"h1"} textAlign={"center"} mb={4}>
          {author?.name}
        </Heading>
        <Text textAlign={"center"}>{author?.description}</Text>
      </Container>
      <Container maxW={"container.xl"} my={[8, 32]}>
        <Stack gap={4}>
          {posts?.map((post) => (
            <SimpleGrid key={post?.id} columns={[1, 4]}>
              <GridItem colSpan={[1, 3]}>
                <LinkBox as={"article"}>
                  <Text fontWeight={800} color={"primary.500"}>
                    <Link
                      key={post?._embedded?.["wp:term"]?.[0]?.[0]?.id}
                      href={`/categories/${post?._embedded?.["wp:term"]?.[0]?.[0]?.slug}`}
                      color={"primary.500"}
                    >
                      {post?._embedded?.["wp:term"]?.[0]?.[0]?.name}
                    </Link>
                  </Text>
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
