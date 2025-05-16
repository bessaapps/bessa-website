import Footer from "@/components/navigation/Footer";
import { description, title, url } from "@/utils/constants";
import "../global.css";

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
    <>
      <main style={{ overflowX: "hidden" }}>{children}</main>
      <footer>
        <nav>
          <Footer />
        </nav>
      </footer>
    </>
  );
}
