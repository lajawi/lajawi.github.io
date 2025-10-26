import { MetadataRoute } from "next";

export const dynamic = "force-static";

const allowedUserAgents = [
  "Googlebot",      // Google
  "Bingbot",        // Bing & Copilot
  "Applebot",       // Apple & Siri
  "DuckDuckBot",    // DuckDuckGo
  "Qwantbot",       // Qwant
  "Slurp",          // Yahoo!
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: allowedUserAgents,
                allow: "/",
                crawlDelay: 10,
            },
            {
                userAgent: "*",
                disallow: "/",
            },
        ],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    }
}