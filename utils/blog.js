import SafelyFindingLGBTQIACommunityOnAndOffline from "../images/safely-finding-lgbtqai-community-on-and-offline.png";
import CelebratingInternationalTransgenderDayOfVisibility from "../images/celebrating-international-transgender-day-of-visibility.png";

export const categories = [
  { name: "Guides", slug: "guides" }
  // { name: "Travel", slug: "travel" },
  // { name: "Tech", slug: "tech" },
  // { name: "Sexual Health", slug: "sexual-health" },
  // { name: "Rights", slug: "rights" },
  // { name: "Politics", slug: "politics" },
  // { name: "Pop Culture", slug: "pop-culture" },
  // { name: "News", slug: "news" },
  // { name: "Sex", slug: "sex" },
  // { name: "Dating", slug: "dating" },
  // { name: "Entertainment", slug: "entertainment" }
];

export const authors = [
  {
    name: "Topher",
    slug: "topher",
    image: "https://getbessa.com/images/social.png"
  }
];

export const posts = [
  {
    title: "Safely Finding LGBTQIA+ Community On- and Offline",
    slug: "safely-finding-lgbtqai-community-on-and-offline",
    image: SafelyFindingLGBTQIACommunityOnAndOffline,
    category: categories[0],
    author: authors[0]
  },
  {
    title: "Celebrating International Transgender Day of Visibility",
    slug: "celebrating-international-transgender-day-of-visibility",
    image: CelebratingInternationalTransgenderDayOfVisibility,
    category: categories[0],
    author: authors[0]
  }
];

export const tags = [
  {
    name: "Transgender Day of Visibility",
    slug: "transgender-day-of-visibility",
    posts: [1]
  },
  {
    name: "Gender Identity",
    slug: "gender-identity",
    posts: [1]
  },
  {
    name: "Transgender People",
    slug: "transgender-people",
    posts: [1]
  },
  {
    name: "Gender Unicorn",
    slug: "gender-unicorn",
    posts: [1]
  },
  {
    name: "LGBTQ Rights",
    slug: "lgbtq-rights",
    posts: [1]
  },
  {
    name: "LGBTQ Community",
    slug: "lgbtq-community",
    posts: [1]
  },
  { name: "LGBTQ Meaning", slug: "lgbtq-meaning", posts: [0] },
  { name: "Gay People", slug: "gay-people", posts: [0] },
  { name: "Sexual Orientation", slug: "sexual-orientation", posts: [0] }
];
