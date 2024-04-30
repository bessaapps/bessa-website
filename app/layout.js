import { Container, Flex, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import Top from "@/components/navigation/Top";
import Providers from "@/app/providers";
import Footer from "@/components/navigation/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { FaHeart } from "react-icons/fa";

export const metadata = {
  title:
    "Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community",
  description:
    "Bessa is a safe inclusive and body-positive community of LGBTQIA+ people who want to connect with others and socialize with their friends, family, and others.",
  openGraph: {
    title: "Safe Inclusive Body-Positive LGBTQIA+ Community",
    description:
      "Bessa is a safe inclusive and body-positive community of LGBTQIA+ people who want to connect with others and socialize with their friends, family, and others.",
    url: "https://bessssssa.com",
    siteName: "Bessa",
    images: [
      {
        url: "https://bessssssa.com/images/social.png",
        width: 800,
        height: 600
      }
    ],
    locale: "en_US",
    type: "website"
  }
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
                  <FaHeart color={"white"} />
                  <Text color={"white"} fontWeight={"bold"}>
                    <Link
                      href={"/donate"}
                      title={
                        "Give | Bessa LGBTQIA+ Community App | Safe Inclusive Body-Positive LGBTQIA+ Community"
                      }
                    >
                      Click here to support inclusive, body-positive LGBTQIA+
                      community
                    </Link>
                  </Text>
                </Flex>
              </Container>
            </GridItem>
          </Grid>
        </Providers>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
