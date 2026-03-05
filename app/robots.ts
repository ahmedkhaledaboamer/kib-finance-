import {MetadataRoute} from "next";

const BASE_URL = "https://primefinancing.ae";

function getBaseUrl() {
  return BASE_URL.replace(/\/+$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

