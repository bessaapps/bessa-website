import { blogCategories, blogPosts, title, url } from "@/utils/constants";
import {
  Box,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Tag
} from "@chakra-ui/react";
import Image from "next/image";

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
        {blogPosts.map((blogPost) => (
          <LinkBox as={"article"} key={blogPost.slug}>
            <Box mb={4}>
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                style={{ borderRadius: 8 }}
              />
            </Box>
            <Tag colorScheme={"primary"} mb={4}>
              {blogCategories[blogPost.category].name}
            </Tag>
            <Heading>
              <LinkOverlay
                href={`/blog/${blogCategories[blogPost.category].slug}/${blogPost.slug}`}
                title={`${blogPost.title} | ${title}`}
              >
                {blogPost?.title}
              </LinkOverlay>
            </Heading>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Container>
  );
}
