import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";

const project = projects["walking-animation"];

export const metadata: Metadata = project.metadata;

export default function Page() {
    return (
        <div className="page-width w-full flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <p>Two simple walking animations I made on a humanoid rig I created previously.</p>

            <iframe title="Walking Animation" className="border-0 w-full h-96" allowFullScreen allow="autoplay; fullscreen" src="https://sketchfab.com/models/7094a148d86b42bfa98337e3c08e8246/embed?camera=0&ui_hint=2"></iframe>

            {/* TODO: Add custom 3D embed */}

            {/* TODO: Add read more */}
        </div>
    );
}