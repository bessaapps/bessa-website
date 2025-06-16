import { SiAppstore, SiGoogleplay } from "react-icons/si";

export const keyword = "Gay Social Media";
export const title = `Bessa ${keyword}`;
export const description =
  "Bessa is an LGBTQ social networking app and inclusive community of all genders, colors, shapes, sizes, and abilities. Bessa is a hub for queer connections, places, and events.";
export const url = "https://getbessa.com";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  applicationCategory: "SocialNetworkingApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "3"
  },
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "USD"
  },
  url,
  image: `${url}/images/social.png`,
  operatingSystem: ["ANDROID", "iOS"]
};

export const customMetadata = ({ title, description, path, imagePath }) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${url}${path}`,
      images: [
        {
          url: `${url}${imagePath}`
        }
      ]
    },
    twitter: {
      title,
      description,
      images: {
        url: `${url}${imagePath}`,
        alt: title
      }
    }
  };
};

export const appStores = [
  {
    name: "iOS",
    href: "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone",
    icon: <SiAppstore />
  },
  {
    name: "Android",
    href: "https://play.google.com/store/apps/details?id=com.bessa.bessa",
    icon: <SiGoogleplay />
  }
];

export const sectionHeight = "calc(100vh - 80px)";
