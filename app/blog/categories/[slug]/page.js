import { title, url } from "@/utils/constants";
import {
  Box,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag
} from "@chakra-ui/react";
import Image from "next/image";
import { posts, tags } from "@/utils/blog";

export async function generateMetadata({ params }) {
  const slug = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return {
    title: `${slug} | ${title}`,
    openGraph: {
      title: `${slug} | ${title}`,
      url: `${url}/blog`,
      siteName: "Bessa",
      locale: "en_US",
      type: "website"
    }
  };
}

export default function Category({ params }) {
  return (
    <Container maxW={"container.lg"} py={16}>
      <Heading as={"h1"} mb={4}>
        {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {posts
          ?.filter((post) => post.category.slug === params.slug)
          ?.map((post, index) => {
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
