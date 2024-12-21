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

export async function generateMetadata({ params }) {
  return await axios
    .get("https://blog.getbessa.com/wp-json/wp/v2/posts", {
      params: {
        slug: params?.postSlug,
        _embed: ["wp:term", "wp:featuredmedia", "author"]
      }
    })
    .then((response) => {
      const post = response?.data?.[0];
      //     title: `${post.title} | ${title}`,
      //         openGraph: {
      //     title: `${post.title} | ${title}`,
      //         url: `${url}/blog/${post.category.slug}/${post.slug}`,
      //         siteName: "Bessa",
      //         images: [
      //       {
      //         url: `${url}/images/${post.slug}.png`,
      //         width: 800,
      //         height: 600
      //       }
      //     ],
      //         locale: "en_US",
      //         type: "website"
      //   },
      //     alternates: {
      //       canonical: `${url}/blog/${post.category.slug}/${post.slug}`
      //     }
      //   };
      //   setPost(response?.data?.[0])
      // });
      return {
        title: `${post?.title?.rendered} | Bessa | An LGBTQ Social Media App`,
        openGraph: {
          title: `${post?.title?.rendered} | Bessa | An LGBTQ Social Media App`,
          url: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
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
              Be with Friends!{process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}
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
