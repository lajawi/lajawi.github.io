import { MetadataRoute } from "next";
import { sitemapData } from "@/lib/sitemap-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return sitemapData().map((entry) => ({
        url: `${baseUrl}${entry.url}`,
        lastModified: entry.lastModified,
        changeFrequency: entry.changeFrequency,
        priority: entry.priority,
        alternates: entry.alternates,
        images: entry.images,
        videos: entry.videos,
    }));
}