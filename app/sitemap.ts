export default async function sitemap() {
  const LINKS = [
    "about",
    "faq",
    "free-drink-coasters-for-lgbt-bars",
    "guidelines",
    "privacy"
  ];

  return [
    {
      url: "https://getbessa.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    ...LINKS.map((link) => ({
      url: `https://getbessa.com/${link}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    }))
  ];
}
