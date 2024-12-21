import Top from "@/components/navigation/Top";
import Providers from "@/app/providers";
import Footer from "@/components/navigation/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { description, title, url } from "@/utils/constants";
import "./global.css";

export const metadata = {
  title,
  description,
  languages: {
    "en-US": "/en-US"
  },
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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@getbessa",
    images: {
      url: `${url}/images/social.png`,
      alt: title
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
