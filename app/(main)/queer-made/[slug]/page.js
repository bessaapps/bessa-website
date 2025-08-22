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
          <Stack gap={2}>
            <Heading as={"h1"}>{article.Title}</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              aperiam at deleniti deserunt esse harum illum ipsam maxime
              molestias neque non odio, optio, possimus praesentium quas quo
              quod quos temporibus!
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              aperiam delectus est itaque maiores quia repellendus sed sint!
              Aliquam at corporis delectus error fuga harum id ipsam nulla
              officiis voluptate.
            </Text>
            <Flex align={"center"} gap={4}>
              <Avatar
                src={"/images/queer-made/rocio-headshot-Rocio-Sanchez.jpg"}
                size={"xl"}
              />
              <Box>
                <Heading as={"h3"}>Rocio</Heading>
                <Text>Creator of Marketing by Rocio</Text>
                <Flex gap={4}>
                  <Text fontWeight={600}>
                    <Link href={"https://instagram.com/marketingbyrocio"}>
                      @marketingbyrocio
                    </Link>
                  </Text>
                  <Text fontWeight={600}>
                    <Link
                      href={"https://marketingbyrocio.com/"}
                      title={"Marketing by Rocio"}
                    >
                      marketingbyrocio.com
                    </Link>
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Stack>
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
