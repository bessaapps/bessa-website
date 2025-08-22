import axios from "axios";

export const getInterviewAPI = (documentId) =>
  axios
    .get("https://bessa-website-cms-production.up.railway.app/api/interviews", {
      params: { documentId },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`
      }
    })
    .then((response) => response);
