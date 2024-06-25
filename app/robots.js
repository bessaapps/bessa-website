export default function robots() {
  return {
    rules: [
      {
        allow: ["/api/og/*"],
        disallow: ["/deep-links/*"]
      }
    ],
    sitemap: "https://getbessa.com/sitemap.xml"
  };
}
