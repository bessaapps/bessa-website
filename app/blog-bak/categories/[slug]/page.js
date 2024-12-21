import { title, url } from "@/utils/constants";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { categories, posts, tags } from "@/utils/blog";
import BlogCard from "@/components/BlogCard";

export async function generateMetadata({ params }) {
  const categoryTitle = categories?.find(
    (category) => category.slug === params.slug
  )?.name;

  return {
    title: `${categoryTitle} | ${title}`,
    openGraph: {
      title: `${categoryTitle} | ${title}`,
      url: `${url}/blog/categories/${params.slug}`,
      siteName: "Bessa",
      locale: "en_US",
      type: "website"
    }
  };
}

export default function Category({ params }) {
  const categoryTitle = categories?.find(
    (category) => category.slug === params.slug
  )?.name;

  return (
    <Container maxW={"container.lg"} py={16}>
      <Heading as={"h1"} mb={4}>
        {categoryTitle}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {posts
          ?.filter((post) => post.category.slug === params.slug)
          ?.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              tags={tags?.filter((tag) => tag.posts.includes(index))}
              isHidingCategory
            />
          ))}
      </SimpleGrid>
    </Container>
  );
}
