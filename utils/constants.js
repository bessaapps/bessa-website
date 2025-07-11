import { SiAppstore, SiGoogleplay } from "react-icons/si";
import {
  BookOpen,
  CircleHelp,
  CirclePlus,
  Heart,
  LifeBuoy,
  Map
} from "lucide-react";

export const keyword = "Gay Social Media";
export const title = `Bessa ${keyword}`;
export const description =
  "Bessa is an LGBTQ social networking app and inclusive community of all genders, colors, shapes, sizes, and abilities. Bessa is a hub for queer connections, places, and events.";
export const url = "https://getbessa.com";

export const links = [
  {
    href: "/about",
    anchor: "About",
    icon: <BookOpen size={"1rem"} color={"#f2f2f2"} />
  },
  {
    href: "/donate",
    anchor: "Donate",
    icon: <Heart size={"1rem"} color={"#f2f2f2"} />
  },
  {
    href: "/support",
    anchor: "Help & Support",
    icon: <LifeBuoy size={"1rem"} color={"#f2f2f2"} />
  },
  {
    href: "/faq",
    anchor: "FAQ's",
    icon: <CircleHelp size={"1rem"} color={"#f2f2f2"} />
  },
  {
    href: "/whats-new",
    anchor: "What's New",
    icon: <CirclePlus size={"1rem"} color={"#f2f2f2"} />
  },
  {
    href: "/roadmap",
    anchor: "Roadmap",
    icon: <Map size={"1rem"} color={"#f2f2f2"} />
  }
];

export const legalLinks = [
  { href: "/guidelines", anchor: "Guidelines" },
  { href: "/privacy", anchor: "Privacy Policy" }
];

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

export const customMetadata = ({
  metadataTitle,
  metadataDescription,
  path,
  imagePath
}) => {
  return {
    title: metadataTitle,
    description: metadataDescription,
    languages: {
      "en-US": "/en-US"
    },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: `${url}${path}`,
      siteName: title,
      images: [
        {
          url: `${url}${imagePath}`
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      creator: "@getbessa",
      images: {
        url: `${url}${imagePath}`,
        alt: metadataTitle
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

export const titles = {
  about: "Gay Social Media for Real LGBTQ Community Building",
  donate: "Fuel the Next Generation of Gay Social Media",
  faq: "Answers About the Best Gay Social Media App Around",
  guidelines: "What's Cool, and What's Not, on Bessa, the Gay Social Media App",
  roadmap: "What's Next for the Best LGBTQ Social Media App",
  whatsNew: "More Ways to Connect on LGBTQ Social Media"
};

export const sectionHeight = "calc(100vh - 80px)";
