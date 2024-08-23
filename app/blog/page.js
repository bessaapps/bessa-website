import { title, url } from "@/utils/constants";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import { posts, tags } from "@/utils/blog";

export const metadata = {
  title: `Blog | ${title}`,
  openGraph: {
    title: `Blog | ${title}`,
    url: `${url}/blog`,
    siteName: "Bessa",
    locale: "en_US",
    type: "website"
  }
};

export default function Blog() {
  return (
    <Container maxW={"container.lg"} py={16}>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {posts.map((post, index) => {
          const postTags = tags?.filter((tag) => tag.posts.includes(index));

          return (
            <LinkBox as={"article"} key={post.slug}>
              <Box mb={4}>
                <Image
                  src={post.image}
                  alt={post.title}
                  style={{ borderRadius: 8 }}
                />
              </Box>
              <Text color={"primary.500"} fontWeight={"bold"}>
                <Link href={`/blog/categories/${post.category.slug}`}>
                  {post.category.name}
                </Link>
              </Text>
              <Heading mb={2}>
                <LinkOverlay
                  href={`/blog/${post.category.slug}/${post.slug}`}
                  title={`${post.title} | ${title}`}
                >
                  {post?.title}
                </LinkOverlay>
              </Heading>
              <Flex gap={2} wrap={"wrap"} mb={4}>
                {postTags.map((tag) => (
                  <Tag key={tag.slug}>{tag.name}</Tag>
                ))}
              </Flex>
            </LinkBox>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
