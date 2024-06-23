import axios from "axios";
import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Article from "@/images/celebrating-international-transgender-day-of-visibility.png";

async function getData(slug) {
  return axios
    .get("https://chrkno21.dreamhosters.com/wp-json/wp/v2/posts", {
      params: { slug }
    })
    .then((response) => response.data?.[0])
    .catch((error) => console.error(error));
}

export default async function Page({ params }) {
  const data = await getData(params.slug);

  return (
    <section>
      <Container maxW={"container.lg"} py={16}>
        <Image
          src={Article}
          alt={"Celebrating International Transgender Day of Visibility"}
        />
      </Container>
      <Container pb={16}>
        <Heading as={"h1"} mb={4}>
          {data?.title?.rendered}
        </Heading>
        <Box dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
      </Container>
    </section>
  );
}
