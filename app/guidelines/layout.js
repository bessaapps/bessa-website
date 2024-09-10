import { title, url } from "@/utils/constants";

export const metadata = {
  title: `Guidelines | ${title}`,
  description:
    "It's important to work together to keep this LGBTQ community both diverse, and safe. Bessa is fun and open-minded, some lines are drawn to specifically to weed out harmful and dangerous interactions. To keep things simple, be respectful! And don&apos;t be a troll.",
  openGraph: {
    title: `Guidelines | ${title}`,
    description:
      "It's important to work together to keep this LGBTQ community both diverse, and safe. Bessa is fun and open-minded, some lines are drawn to specifically to weed out harmful and dangerous interactions. To keep things simple, be respectful! And don&apos;t be a troll.",
    url: `${url}/guidelines`,
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

export default function GuidelinesLayout({ children }) {
  return children;
}
