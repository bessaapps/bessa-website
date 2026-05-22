export default async function sitemap() {
  const links = ["about", "donate", "faq", "guidelines", "privacy"];

  return [
    {
      url: "https://getbessa.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    ...links.map((link) => ({
      url: `https://getbessa.com/${link}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    }))
  ];
}
