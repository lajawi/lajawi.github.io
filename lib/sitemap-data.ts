import { sortedProjects } from "@/app/projects/projects";
import { Metadata, MetadataRoute } from "next";

type ArrayElement<T> = T extends (infer U)[] ? U : never;

type SitemapItem = ArrayElement<MetadataRoute.Sitemap> & Metadata;

export function sitemapData(): SitemapItem[] {
    const urls: SitemapItem[] = [];
    urls.push({ url: "/projects" });

    sortedProjects("rank", false).map((project) => {
        urls.push({
            url: `/projects/${project.id}`,
            title: project.metadata.title,
        });
    });

    return urls;
}