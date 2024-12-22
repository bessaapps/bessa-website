import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Text
} from "@chakra-ui/react";
import { appStores } from "@/utils/constants";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import dayjs from "dayjs";
const { convert } = require("html-to-text");

export async function generateMetadata({ params }) {
  return await axios
    .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
      params: {
        slug: params?.postSlug,
        _embed: ["wp:featuredmedia", "author"]
      }
    })
    .then((response) => {
      const post = response?.data?.[0];

      return {
        title: `${convert(post?.title?.rendered)} | Bessa | An LGBTQ Social Media App`,
        description: convert(post?.excerpt?.rendered),
        authors: [
          {
            name: post?._embedded?.author?.[0]?.name,
            url: `https://${process.env?.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/authors/${post?._embedded?.author?.[0]?.name?.toLowerCase()?.replace(" ", "-")}`
          }
        ],
        openGraph: {
          title: `${convert(post?.title?.rendered)} | Bessa | An LGBTQ Social Media App`,
          description: convert(post?.excerpt?.rendered),
          url: `https://${process.env?.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/posts/${post?.slug}`,
          siteName: "Bessa | An LGBTQ Social Media App",
          images: [
            {
              url: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
              width: 800,
              height: 600
            }
          ],
          type: "article",
          publishedTime: dayjs(post?.date)?.format(),
          authors: [post?._embedded?.author?.[0]?.name]
        },
        twitter: {
          title: `${convert(post?.title?.rendered)} | Bessa | An LGBTQ Social Media App`,
          description: convert(post?.excerpt?.rendered),
          images: {
            url: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
            alt: convert(post?.title?.rendered)
          }
        },
        alternates: {
          canonical: `https://${process.env?.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/posts/${post?.slug}`
        }
      };
    });
}

export default function PostLayout({ children }) {
  return (
    <>
      {children}
      <Container maxW={"container.xl"} my={[8, 32]}>
        <Card>
          <Container maxW={"container.sm"} my={[4, 16]}>
            <Heading color={"gray.900"} textAlign={"center"} mb={4}>
              Be with Friends!
            </Heading>
            <Text textAlign={"center"} mb={8}>
              Find LGBTQ members with shared interests near you. Make queer
              friends, connections, and maybe more. Chat, upload a selfie, and
              update your profile. Socialize and join the fun!
            </Text>
            <Flex gap={4} justify={"center"} flexWrap={"wrap"}>
              {appStores.map((store) => (
                <Link key={store.name} href={store.href}>
                  <Button colorScheme={"primary"} size={"lg"} w={["100%", 140]}>
                    <Flex mr={2}>{store.icon}</Flex>
                    {store.name}
                  </Button>
                </Link>
              ))}
            </Flex>
          </Container>
        </Card>
      </Container>
    </>
  );
}
