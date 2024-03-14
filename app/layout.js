import { Grid, GridItem } from "@chakra-ui/react";
import Top from "@/components/navigation/Top";
import Providers from "@/app/providers";
import Footer from "@/components/navigation/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

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
        url: "https://bessssssa.com/api/og",
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
            <GridItem area={"header"} bg={"primary.600"} px={4} py={4}>
              <header>
                <nav>
                  <Top />
                </nav>
              </header>
            </GridItem>
            <GridItem area={"main"} overflowY={"auto"}>
              <main>{children}</main>
            </GridItem>
            <GridItem area={"footer"} bg={"gray.900"} px={4} py={2}>
              <footer>
                <nav>
                  <Footer />
                </nav>
              </footer>
            </GridItem>
          </Grid>
        </Providers>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
    </html>
  );
}
