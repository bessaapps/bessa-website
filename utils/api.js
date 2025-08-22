import axios from "axios";

export const getInterviewAPI = (slug) =>
  axios
    .get(
      `https://bessa-website-cms-production.up.railway.app/api/interviews?filters[Slug][$eq]=${slug}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`
        }
      }
    )
    .then((response) => response);
