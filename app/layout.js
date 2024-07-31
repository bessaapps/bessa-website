import {
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import Top from "@/components/navigation/Top";
import Providers from "@/app/providers";
import Footer from "@/components/navigation/Footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { description, title, url } from "@/utils/constants";
import Script from "next/script";

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
                <SimpleGrid columns={[1, 2]}>
                  <GridItem>
                    <Flex alignItems={"center"} gap={4}>
                      <FaHeart color={"var(--chakra-colors-red-500)"} />
                      <Text color={"white"} fontWeight={"bold"}>
                        <Link
                          href={"https://gofund.me/4a63173e"}
                          target={"_blank"}
                        >
                          Donate to LGBTQ communities
                        </Link>
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex alignItems={"center"} gap={4}>
                      <FaShoppingBag
                        color={"var(--chakra-colors-secondary-500)"}
                      />
                      <Text color={"white"} fontWeight={"bold"}>
                        <Link
                          href={"https://society6.com/getbessa"}
                          target={"_blank"}
                        >
                          Shop LGBTQ Merch
                        </Link>
                      </Text>
                    </Flex>
                  </GridItem>
                </SimpleGrid>
              </Container>
            </GridItem>
          </Grid>
        </Providers>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <>
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          <GoogleTagManager gtmId={"G-54V3486CCK"} />
          <Script id={"Google Ads"}>
            {`gtag('event', 'conversion', {'send_to': 'AW-16623200556/dnBYCK3IxMAZEKzSx_Y9'});`}
          </Script>
        </>
      )}
    </html>
  );
}
