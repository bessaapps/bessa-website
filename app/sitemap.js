import { getInterviewsAPI } from "@/utils/api";

export default async function sitemap() {
  const { data } = await getInterviewsAPI();
  const interviews = data?.data;

  return [
    {
      url: "https://getbessa.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: "https://getbessa.com/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://getbessa.com/donate",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://getbessa.com/support",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://getbessa.com/faq",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://getbessa.com/whats-new",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://getbessa.com/roadmap",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://getbessa.com/guidelines",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    ...interviews?.map((interview) => ({
      url: `https://getbessa.com/queer-mdade/${interview?.Slug}`,
      lastModified: new Date(),
      changeFrequency: "daily"
    })),
    {
      url: "https://getbessa.com/privacy",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.3
    }
  ];
}
