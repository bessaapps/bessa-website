import { blogCategories, blogPosts } from "@/utils/constants";
import { Container, Link, Text } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Container maxW={"container.lg"} py={16}>
      {blogPosts.map((blogPost) => (
        <Text key={blogPost.slug}>
          <Link
            href={`/blog/${blogCategories[blogPost.category].slug}/${blogPost.slug}`}
          >
            {blogPost?.title}
          </Link>
        </Text>
      ))}
    </Container>
  );
}
