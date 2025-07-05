import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";
import YouTubeEmbed from "@/app/components/youtube";
import screen1 from "@/public/projects/monumental/1.png";
import screen2 from "@/public/projects/monumental/2.png";
import screen3 from "@/public/projects/monumental/3.png";
import screen4 from "@/public/projects/monumental/4.png";
import screen5 from "@/public/projects/monumental/5.png";
import screen6 from "@/public/projects/monumental/6.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "@/app/components/image";

const project = projects.monumental;

export const metadata: Metadata = project.metadata;

const screens: StaticImport[] = [
    screen1, screen2, screen3, screen4, screen5, screen6,
];

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <p>This game is all about solving interesting puzzles, with and around well-known monuments around the world! For the deadline, I designed three different puzzles, all with unique challenges.</p>
            <p className="w-full">This game was an individual project, which means I designed all mechanics, did all the programming, and made all the assets myself.</p>

            <div className="grid md:grid-cols-2 items-center align-middle justify-items-center gap-2">
                <YouTubeEmbed ytId="dTumA04i_So" width={1920} height={1080} />
                <YouTubeEmbed ytId="aFuB-gmq9eg" width={1920} height={1080} />
                {screens.map((image, index) => {
                    return (
                        <Image id={`screenshot-${index}`} key={`screenshot-${index}`} src={image} width={1920} height={1080} alt={`Screenshot ${index}`} />
                    );
                })}
            </div>

            {/* TODO: Add read more */}
        </div>
    );
}