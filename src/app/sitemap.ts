import { MetadataRoute } from "next";
import { metaData } from "./lib/config";

// Required for Next.js static export
export const dynamic = "force-static";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  let routes = ["", "experience", "projects"].map((route) => ({
    url: `${BaseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}