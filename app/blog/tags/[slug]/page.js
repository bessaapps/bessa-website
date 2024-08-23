import { title, url } from "@/utils/constants";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { posts, tags } from "@/utils/blog";
import BlogCard from "@/components/BlogCard";

export async function generateMetadata({ params }) {
  const tagTitle = tags?.find((tag) => tag.slug === params.slug)?.name;

  return {
    title: `${tagTitle} | ${title}`,
    openGraph: {
      title: `${tagTitle} | ${title}`,
      url: `${url}/blog/tags/${params.slug}`,
      siteName: "Bessa",
      locale: "en_US",
      type: "website"
    }
  };
}

export default function Category({ params }) {
  const tagTitle = tags?.find((tag) => tag.slug === params.slug)?.name;

  return (
    <Container maxW={"container.lg"} py={16}>
      <Heading as={"h1"} mb={4}>
        {tagTitle}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {posts
          ?.filter((_, index) =>
            tags.find((tag) => tag.slug === params.slug).posts.includes(index)
          )
          ?.map((post, index) => (
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
