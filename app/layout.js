import { Container, Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import Top from "@/components/navigation/Top";
import Providers from "@/app/providers";
import Footer from "@/components/navigation/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { FaHeart } from "react-icons/fa";
import { description, title, url } from "@/utils/constants";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: `${url}/images/social.png`,
        width: 800,
        height: 600
      }
    ],
    locale: "en_US",
    type: "website"
  },
  alternates: { canonical: url }
};

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <body>
        <Providers>
          <Grid
            templateAreas={`"header" "main" "footer"`}
            gridTemplateRows={"auto 1fr auto"}
            h={"100vh"}
          >
            <GridItem area={"header"} bg={"primary.500"} px={4} py={4}>
              <header>
                <nav>
                  <Top />
                </nav>
              </header>
            </GridItem>
            <GridItem area={"main"} overflowY={"auto"}>
              <Grid gridTemplateRows={"1fr auto"} h={"100%"}>
                <GridItem>
                  <main>{children}</main>
                </GridItem>
                <GridItem>
                  <footer>
                    <nav>
                      <Footer />
                    </nav>
                  </footer>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem area={"footer"} bg={"gray.900"}>
              <Container maxW={"container.lg"} py={2}>
                <Flex alignItems={"center"} gap={4}>
                  <FaHeart color={"var(--chakra-colors-red-500)"} />
                  <Text color={"white"} fontWeight={"bold"}>
                    <Link href={"https://gofund.me/4a63173e"} target={"_blank"}>
                      Click here to support inclusive LGBTQ communities
                    </Link>
                  </Text>
                </Flex>
              </Container>
            </GridItem>
          </Grid>
        </Providers>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          <GoogleTagManager gtmId={"G-54V3486CCK"} />
        </>
      )}
    </html>
  );
}
