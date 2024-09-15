import { title, url } from "@/utils/constants";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { authors, posts, tags } from "@/utils/blog";
import BlogCard from "@/components/BlogCard";

export async function generateMetadata({ params }) {
  const authorTitle = authors?.find(
    (author) => author.slug === params.slug
  )?.name;

  return {
    title: `${authorTitle} | ${title}`,
    openGraph: {
      title: `${authorTitle} | ${title}`,
      url: `${url}/authors/${params.slug}`,
      siteName: "Bessa",
      locale: "en_US",
      type: "website"
    }
  };
}

export default function Tag({ params }) {
  const authorTitle = authors?.find(
    (author) => author.slug === params.slug
  )?.name;
  return (
    <Container maxW={"container.lg"} py={16}>
      <Heading as={"h1"} mb={4}>
        {authorTitle}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {posts
          ?.filter((post) => post.author.slug === params.slug)
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
