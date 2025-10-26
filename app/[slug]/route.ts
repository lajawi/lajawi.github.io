import { permanentRedirect } from "next/navigation";
import { projects } from "../projects/projects";

export async function generateStaticParams() {
    const projs = Object.entries(projects).filter((proj) => { return proj[0] !== 'team-tumble' && proj[0] !== 'bubble-broth' })

    return projs.map((project) => ({
        slug: project[0],
    }));
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    if (slug === "portfolio") permanentRedirect("/projects");

    permanentRedirect(`/projects/${slug}`);
}