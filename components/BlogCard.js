import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Tag,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import { title } from "@/utils/constants";

export default function BlogCard({ post, tags, isHidingCategory }) {
  return (
    <LinkBox as={"article"} key={post.slug}>
      <Box mb={4}>
        <Image src={post.image} alt={post.title} style={{ borderRadius: 8 }} />
      </Box>
      <Flex align={"center"} gap={2} mb={6}>
        <Avatar name={post.author.name} src={post.author.image} size={"xs"} />
        <Text>
          <Link href={`/authors/${post.author.slug}`}>By Topher</Link>
        </Text>
      </Flex>
      {!isHidingCategory && (
        <Text color={"primary.500"} fontWeight={"bold"}>
          <Link
            href={`/blog/categories/${post.category.slug}`}
            title={`${post.category.name} | ${title}`}
          >
            {post.category.name}
          </Link>
        </Text>
      )}
      <Heading mb={2}>
        <LinkOverlay
          href={`/blog/${post.category.slug}/${post.slug}`}
          title={`${post.title} | ${title}`}
        >
          {post?.title}
        </LinkOverlay>
      </Heading>
      <Flex gap={2} wrap={"wrap"} mb={4}>
        {tags.map((tag) => (
          <Tag key={tag.slug}>
            <Link
              href={`/blog/tags/${tag.slug}`}
              title={`${tag.name} | ${title}`}
            >
              {tag.name}
            </Link>
          </Tag>
        ))}
      </Flex>
    </LinkBox>
  );
}
