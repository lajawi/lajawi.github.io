import { notFound } from "next/navigation";
import { projects } from "../projects";

export async function generateStaticParams() {
    const projs = Object.entries(projects).filter((proj) => { return proj[0] !== 'team-tumble' && proj[0] !== 'bubble-broth' })

    return projs.map((project) => ({
        slug: project[0],
    }));
}

export default function Page() {
    notFound();
}