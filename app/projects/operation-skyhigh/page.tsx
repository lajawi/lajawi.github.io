import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";
import controller from "@/public/projects/operation-skyhigh/controller.jpg";
import screen1 from "@/public/projects/operation-skyhigh/1.png";
import screen2 from "@/public/projects/operation-skyhigh/2.png";
import screen3 from "@/public/projects/operation-skyhigh/3.png";
import screen4 from "@/public/projects/operation-skyhigh/4.png";
import screen5 from "@/public/projects/operation-skyhigh/5.png";
import screen6 from "@/public/projects/operation-skyhigh/6.png";
import screen7 from "@/public/projects/operation-skyhigh/7.png";
import screen8 from "@/public/projects/operation-skyhigh/8.png";
import screen9 from "@/public/projects/operation-skyhigh/9.png";
import screen10 from "@/public/projects/operation-skyhigh/10.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "@/app/components/image";
import YouTubeEmbed from "@/app/components/youtube";

const project = projects["operation-skyhigh"];

export const metadata: Metadata = project.metadata;

const screens: StaticImport[] = [
    screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10,
];

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <div className="grid md:grid-cols-2 items-center align-middle gap-4">
                <div className="gap-4">
                    <p>In a team of three, we created a two-player-game, fully playable with an arcade-ish like controller, only utilising its 2 joysticks - one per player - and 2 buttons per player. I, like in most projects, cared for the technical side and programmed most, if not all, mechanics and functionality.</p>
                    <p>This project was a collaboration between Mirte Bosmans, Kjenta Gevaert, and me.</p>
                </div>
                <Image id="controller" src={controller} width={1920} height={1080} alt="" />
            </div>

            <YouTubeEmbed ytId="mopUZYKPTCA" />

            <div className="grid md:grid-cols-2 items-center align-middle gap-2">
                {screens.map((image, index) => {
                    return (
                        <Image id={`screenshot-${index}`} key={`screenshot-${index}`} src={image} width={1600} height={900} alt={`Screenshot ${index + 1}`} />
                    );
                })}
            </div>

            {/* TODO: Add read more */}
        </div>
    );
}