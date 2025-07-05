import { Metadata } from "next";
import { projects } from "../projects";
import Link from "next/link";
import YouTubeEmbed from "@/app/components/youtube";
import ProjectHeader from "@/app/components/project-header";

const project = projects["sticky-getaway"];

export const metadata: Metadata = project.metadata;

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <p>The assignment was simple, create a game with mainly primitive shapes. Together with <Link href={"https://retsaski.wixsite.com/portfolio/"} target="_blank">Aster Sciot</Link> and <Link href={"https://www.instagram.com/zekutomo/"} target="_blank">Zeno Mertens</Link>, we created <i>Sticky Getaway</i>, a game where you need to dash through levels to escape their premises, without dying.</p>
            <p className="w-full">Aster did almost all of the art, Zeno focused on visual effects and helped me with programming.</p>

            <p className="w-full">You can play Sticky Getaway on <Link href={"https://lajawi.itch.io/sticky-getaway"} target="_blank">Itch</Link>
            {/* TODO: Uncomment line after game embed has been added */}
            {/* , or below */}
            .</p>

            {/* TODO: Add game embed */}

            <YouTubeEmbed ytId="LSCupvcyICI" />

            {/* TODO: Add read more */}
        </div>
    );
}