import {
  Avatar,
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { customMetadata, formatTitle } from "@/utils/constants";
import Link from "next/link";
import { getInterviewAPI } from "@/utils/api";
import { Fragment } from "react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data } = await getInterviewAPI(slug);
  const article = data?.data?.[0];

  return customMetadata({
    metadataTitle: formatTitle(article?.Title),
    metadataDescription:
      "Discover Bessa, a gay social media app designed for real LGBTQ connection. Built by a queer developer, Bessa is an inclusive social platform where you can post, message, and share with a diverse global community.",
    path: `/queer-made/${article?.slug}`
    // todo: imagePath: "/images/stock/gay-community.jpg"
  });
}

export default async function Interview({ params }) {
  const { slug } = await params;
  const { data } = await getInterviewAPI(slug);
  const article = data?.data?.[0];

  return (
    <>
      <SimpleGrid columns={2} gap={4}>
        <GridItem minH={"calc(100vh - 80px)"} px={[8, 16, 32]} py={[4, 8, 16]}>
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
          <Flex align={"center"} gap={4}>
            <Avatar
              src={"/images/queer-made/rocio-headshot-Rocio-Sanchez.jpg"}
              size={"xl"}
            />
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
        </GridItem>
        <GridItem
          bgImage={
            "/images/queer-made/rocio-sanchez-marketing-Rocio Sanchez.jpg"
          }
          bgPosition={"center"}
          bgSize={"cover"}
          style={{ filter: "grayscale(1)" }}
        />
      </SimpleGrid>
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
