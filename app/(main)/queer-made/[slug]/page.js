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
import { title } from "@/utils/constants";
import Link from "next/link";
import { getInterviewAPI } from "@/utils/api";

export const metadata = {
  title: "Interview with the Creator of Sin City Jacks| Queer-Made",
  description: "",
  openGraph: {
    title: "Interview with the Creator of Sin City Jacks| Queer-Made",
    description: ""
    // url: `${url}/stories`
  },
  twitter: {
    title: "Interview with the Creator of Sin City Jacks| Queer-Made",
    description: ""
  }
};

export default async function Interview() {
  const { data } = await getInterviewAPI("f4h4w6lf35rn5c7d1j14thuq");

  const article = data?.data?.[0];

  console.log(article);

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
          {article?.Content?.map((item) => {
            switch (item?.type) {
              case "heading":
                return (
                  <Heading>
                    {item?.children?.map((child) => child?.text)}
                  </Heading>
                );
              case "paragraph":
                return (
                  <Text>{item?.children?.map((child) => child?.text)}</Text>
                );
            }
          })}
        </Stack>
      </Container>
    </>
  );
}
