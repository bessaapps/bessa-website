import { Grid, GridItem } from "@chakra-ui/react";
import Top from "@/components/navigation/Top";
import Providers from "@/app/providers";
import Footer from "@/components/navigation/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { description, title, url } from "@/utils/constants";
import "./global.css";

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
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <body>
        <Providers>
          <Grid
            templateAreas={`"header" "main"`}
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
          </Grid>
        </Providers>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
