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
        title: `${post?.title?.rendered} | Bessa | An LGBTQ Social Media App`,
        description: post?.excerpt?.rendered,
        authors: [
          {
            name: post?.post?._embedded?.author?.[0]?.name,
            url: `https://${process.env?.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/authors/${post?._embedded?.author?.[0]?.name?.toLowerCase()?.replace(" ", "-")}`
          }
        ],
        languages: {
          "en-US": "/en-US"
        },
        openGraph: {
          title: `${post?.title?.rendered} | Bessa | An LGBTQ Social Media App`,
          description: post?.excerpt?.rendered,
          url: `https://${process.env?.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
          siteName: "Bessa | An LGBTQ Social Media App",
          images: [
            {
              url: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
              width: 800,
              height: 600
            }
          ],
          locale: "en_US",
          type: "article",
          publishedTime: dayjs(post?.date)?.format(),
          authors: [post?._embedded?.author?.[0]?.name]
        },
        twitter: {
          card: "summary_large_image",
          title: `${post?.title?.rendered} | Bessa | An LGBTQ Social Media App`,
          description: post?.excerpt?.rendered,
          creator: "@getbessa",
          images: {
            url: post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
            alt: post?.title?.rendered
          }
        },
        appLinks: {
          ios: {
            url: "https://apps.apple.com/us/app/bessa-lgbtq-social-media-app/id6471383138?platform=iphone",
            app_store_id: 6471383138
          },
          android: {
            package: "com.bessa.bessa",
            app_name: "Bessa LGBTQ Social Media App"
          }
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
