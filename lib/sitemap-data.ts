import { sortedProjects } from "@/app/projects/projects";
import { Metadata, MetadataRoute } from "next";

type ArrayElement<T> = T extends (infer U)[] ? U : never;

type SitemapItem = ArrayElement<MetadataRoute.Sitemap> & Metadata;

export function sitemapData(): SitemapItem[] {
    const urls: SitemapItem[] = [];

    const staticPages: SitemapItem[] = [
        { url: "/" },
        { url: "/projects" },
        { url: "/about-me" },
    ]

    urls.push(...staticPages);

    sortedProjects("rank", false).map((project) => {
        urls.push({
            url: `/projects/${project.id}`,
            title: project.metadata.title,
        });
    });

    // Add defaults to all object that don't define the variables
    const changedUrls = urls.map(url => ({
        ...url,
        changeFrequency: url.changeFrequency ?? "weekly",
        lastModified: url.lastModified ?? new Date().toISOString().split("T")[0],
    }));

    return changedUrls;
}