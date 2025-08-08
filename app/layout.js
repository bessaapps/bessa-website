import Top from "@/components/navigation/Top";
import Providers from "@/app/providers";
import { GoogleAnalytics } from "@next/third-parties/google";
import { description, formatTitle, title, url } from "@/utils/constants";
import "./global.css";
import TopBanner from "@/components/navigation/TopBanner";

export const metadata = {
  title: formatTitle(),
  description,
  languages: {
    "en-US": "/en-US"
  },
  openGraph: {
    title: formatTitle(),
    description,
    url,
    siteName: formatTitle(),
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
    title: formatTitle(),
    description,
    creator: "@getbessa",
    images: {
      url: `${url}/images/social.png`,
      alt: formatTitle()
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
          <div style={{ position: "static" }}>
            <TopBanner />
          </div>
          <header style={{ position: "sticky", top: 0, zIndex: 950 }}>
            <nav>
              <Top />
            </nav>
          </header>
          {children}
        </Providers>
      </body>
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
    </html>
  );
}
