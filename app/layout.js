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
          <header>
            <nav>
              <Top />
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <nav>
              <Footer />
            </nav>
          </footer>
        </Providers>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
