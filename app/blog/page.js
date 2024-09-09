import { title, url } from "@/utils/constants";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { posts, tags } from "@/utils/blog";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: `Blog | ${title}`,
  openGraph: {
    title: `Blog | ${title}`,
    url,
    siteName: title,
    images: [
      {
        url: `${url}/images/social.png`,
        width: 800,
        height: 600
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function Blog() {
  return (
    <Container maxW={"container.lg"} py={16}>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {posts.map((post, index) => (
          <BlogCard
            key={post.slug}
            post={post}
            tags={tags?.filter((tag) => tag.posts.includes(index))}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
