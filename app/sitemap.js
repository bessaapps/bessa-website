export default async function sitemap() {
  // let posts = [];
  // let categories = [];
  // let tags = [];

  // await axios
  //   .get("https://blog.getbessa.com/wp-json/wp/v2/posts")
  //   .then((response) => {
  //     posts = response?.data;
  //   });
  // await axios
  //   .get("https://blog.getbessa.com/wp-json/wp/v2/categories")
  //   .then((response) => {
  //     categories = response?.data;
  //   });
  // await axios
  //   .get("https://blog.getbessa.com/wp-json/wp/v2/tags")
  //   .then((response) => {
  //     tags = response?.data;
  //   });

  return [
    {
      url: "https://getbessa.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: "https://getbessa.com/about",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: "https://getbessa.com/become-a-sponsor",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    // ...posts?.map((post) => {
    //   return {
    //     url: `https://getbessa.com/posts/${post?.slug}`,
    //     lastModified: new Date(post?.modified),
    //     changeFrequency: "daily",
    //     priority: 0.8
    //   };
    // }),
    // ...categories?.map((category) => {
    //   return {
    //     url: `https://getbessa.com/categories/${category?.slug}`,
    //     lastModified: new Date(),
    //     changeFrequency: "daily",
    //     priority: 0.8
    //   };
    // }),
    // ...tags?.map((tag) => {
    //   return {
    //     url: `https://getbessa.com/tag/${tag?.slug}`,
    //     lastModified: new Date(),
    //     changeFrequency: "daily",
    //     priority: 0.8
    //   };
    // }),
    // {
    //   url: "https://getbessa.com/blog-content-writer",
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 0.8
    // },
    {
      url: "https://getbessa.com/support",
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
    {
      url: "https://getbessa.com/cookies",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5
    },
    {
      url: "https://getbessa.com/eula",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5
    },
    {
      url: "https://getbessa.com/privacy",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5
    },
    {
      url: "https://getbessa.com/terms",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5
    }
  ];
}
