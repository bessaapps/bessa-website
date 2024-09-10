import { authors, categories, tags } from "@/utils/blog";

export default function sitemap() {
  return [
    {
      url: "https://getbessa.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: "https://getbessa.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/blog/guides/safely-finding-lgbtqai-community-on-and-offline",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/blog/guides/celebrating-international-transgender-day-of-visibility",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    ...categories?.map((category) => {
      return {
        url: `https://getbessa.com/blog/categories/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7
      };
    }),
    ...tags?.map((tag) => {
      return {
        url: `https://getbessa.com/blog/tags/${tag.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7
      };
    }),
    ...authors?.map((author) => {
      return {
        url: `https://getbessa.com/authors/${author.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.7
      };
    }),
    {
      url: "https://getbessa.com/blog-content-writer",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/support",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/whats-new",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/guidelines",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/cookies",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/eula",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/privacy",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    },
    {
      url: "https://getbessa.com/terms",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7
    }
  ];
}
