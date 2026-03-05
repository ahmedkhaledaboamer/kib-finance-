import {MetadataRoute} from "next";

const BASE_URL = "https://primefinancing.ae";

function getBaseUrl() {
  return BASE_URL.replace(/\/+$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const locales = ["ar", "en", "fr"] as const;

  const paths = [
    "",
    "/services",
    "/financing-path",
    "/Integrated-path",
    "/implementation-mechanism",
  ];

  const lastModified = new Date();

  return locales.flatMap((locale) =>
    paths.map((path) => {
      const pathWithLocale = path === "" ? `/${locale}` : `/${locale}${path}`;

      return {
        url: `${baseUrl}${pathWithLocale}`,
      lastModified,
      changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.8,
      };
    })
  );
}

