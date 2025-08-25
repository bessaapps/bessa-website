import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { customMetadata, formatTitle } from "@/utils/constants";
import Link from "next/link";
import { getInterviewAPI } from "@/utils/api";
import { Fragment } from "react";
import MediaRight from "@/components/MediaRight";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data } = await getInterviewAPI(slug);
  const article = data?.data?.[0];

  return customMetadata({
    metadataTitle: formatTitle(article?.Title),
    metadataDescription:
      "Explore the Queer-Made interview with Rocio of Marketing by Rocio, where they share insights on community building online and offline. Learn how queer identity shapes digital spaces, visibility, and connection in this inspiring story on our gay social media platform.",
    path: `/queer-made/${article?.slug}`,
    imagePath: article?.Hero?.url
  });
}

export default async function Interview({ params }) {
  const { slug } = await params;
  const { data } = await getInterviewAPI(slug);
  const article = data?.data?.[0];

  return (
    <>
      <MediaRight
        bottomContent={
          <Flex align={"center"} gap={4}>
            <Avatar src={article?.Profile?.url} size={"xl"} />
            <Box>
              <Heading as={"h3"}>{article?.Name}</Heading>
              <Text>{article?.Position}</Text>
              <Flex gap={4}>
                <Text fontWeight={600}>
                  <Link href={article?.SocialURL} target={"_blank"}>
                    @{article?.SocialHandle}
                  </Link>
                </Text>
                <Text fontWeight={600}>
                  <Link href={`https://${article?.Website}`} target={"_blank"}>
                    {article?.Website}
                  </Link>
                </Text>
              </Flex>
            </Box>
          </Flex>
        }
        bgImage={article?.Hero?.url}
      >
        <Stack gap={4} mb={8}>
          <Heading as={"h1"}>{article.Title}</Heading>
          {article?.Summary?.map((item, i) => (
            <Text key={i}>
              {item?.children?.map((child, j) => (
                <Text as={child?.italic ? "i" : "span"} key={j}>
                  {child?.text}
                </Text>
              ))}
            </Text>
          ))}
        </Stack>
      </MediaRight>
      <Container maxW={"container.xl"} py={[16, 32, 64]}>
        <Stack gap={4}>
          {article?.Content?.map((item, i) => {
            switch (item?.type) {
              case "heading":
                return (
                  <Heading key={i}>
                    {item?.children?.map((child, j) => (
                      <Text as={child?.italic ? "i" : "span"} key={j}>
                        {child?.text}
                      </Text>
                    ))}
                  </Heading>
                );
              case "paragraph":
                return (
                  <Text key={i}>
                    {item?.children?.map((child, j) => (
                      <Text as={child?.italic ? "i" : "span"} key={j}>
                        {child?.text}
                      </Text>
                    ))}
                  </Text>
                );
            }
          })}
        </Stack>
      </Container>
    </>
  );
}
