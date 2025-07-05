import ProjectHeader from "@/app/components/project-header";
import { projects } from "../projects";
import { Metadata } from "next";

const project = projects["sound-design-for-a-pre-existing-game-video"];

export const metadata: Metadata = project.metadata;

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <p className="md:max-w-3/4">For a pre-existing game trailer or gameplay video, I designed the sound anew, in my case I used gameplay footage from Minecraft Dungeons. I used REAPER as my audio production program, together with the Pro Sound Effects Library.</p>

            <video controls className="page-width w-full" width={1920} height={1080}>
                <source src="/projects/sound-design-for-a-pre-existing-game-video/video.mp4" />
            </video>

            {/* TODO: Add read mroe */}
        </div>
    )
}