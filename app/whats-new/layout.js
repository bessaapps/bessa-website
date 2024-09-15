import { title, url } from "@/utils/constants";

export const metadata = {
  title: `What's New in Version 6! | ${title}`,
  description:
    "Being a part of the LGBTQ community gets even better in Bessa 6! It's packed full of fun ways to be a part of and interact with our LGBTQ community.",
  openGraph: {
    title: `What's New in Version 6! | ${title}`,
    description:
      "Being a part of the LGBTQ community gets even better in Bessa 6! It's packed full of fun ways to be a part of and interact with our LGBTQ community.",
    url: `${url}/whats-new`,
    siteName: "Bessa",
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

export default function WhatsNewLayout({ children }) {
  return children;
}
