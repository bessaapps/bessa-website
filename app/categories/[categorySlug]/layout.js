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
    .get("https://blog.getbessa.com/wp-json/wp/v2/categories", {
      params: {
        slug: params?.categorySlug
      }
    })
    .then((response) => {
      const category = response?.data?.[0];

      return {
        title: `${category?.name} | Bessa | An LGBTQ Social Media App`,
        openGraph: {
          title: `${category?.name} | Bessa | An LGBTQ Social Media App`,
          url: `https://${process.env?.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/category/${params?.categorySlug}`,
          siteName: "Bessa | An LGBTQ Social Media App"
        },
        twitter: {
          title: `${category?.name} | Bessa | An LGBTQ Social Media App`
        }
      };
    });
}

export default function CategoryLayout({ children }) {
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
