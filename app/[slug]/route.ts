import { permanentRedirect } from "next/navigation";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    if (slug === "portfolio") permanentRedirect("/projects");

    permanentRedirect(`/projects/${slug}`);
}