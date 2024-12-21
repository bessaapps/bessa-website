import { SiAppstore, SiGoogleplay } from "react-icons/si";

export const title = "Bessa | An LGBTQ Social Media App";
export const description =
  "Bessa is an inclusive LGBTQ community of all genders, colors, shapes, and sizes who want to safely connect with new and existing friends, family, and others.";
export const url = "https://getbessa.com";

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
