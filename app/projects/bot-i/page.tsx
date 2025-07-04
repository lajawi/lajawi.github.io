import { Metadata } from "next";
import { projects } from "../projects";
import YouTubeEmbed from "@/app/components/youtube";
import ProjectHeader from "@/app/components/project-header";
import Image from "@/app/components/image";
import protSide from "@/public/projects/bot-i/prototype-side-view.png";
import protTop from "@/public/projects/bot-i/prototype-top-view.png";
import levelDesign from "@/public/projects/bot-i/level-designing.png";
import lookFeel from "@/public/projects/bot-i/look-and-feel.png";
import Link from "next/link";

const project = projects["bot-i"];

export const metadata: Metadata = project.metadata;

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <YouTubeEmbed ytId="Hm15QAn2duE" width={1920/2} height={1080/2} />

            <p className="md:max-w-3/4">Second year of Game Design at LUCA School of Arts, our personal project of the year had to be a puzzle game. My game went to be about a little robot with a limited battery, and you have to reach the end before the battery runs out, while potentially charging the battery during the game.</p>

            <h2 id="prototyping">Prototyping</h2>

            <p className="md:max-w-3/4">With a game idea in mind, I went to solve the most important question I had: side view or top down? After some prototyping with both ideas, and gaining valueable insights from others, I choose the top down grid-based approach.</p>

            <div className="grid md:grid-cols-2 items-center align-middle gap-2">
                <Image id="prototype-side" src={protSide} width={1920} height={1080} alt="Side" />
                <Image id="prototype-top" src={protTop} width={1920} height={1080} alt="Top down grid" />
            </div>

            <div className="grid md:grid-cols-2 items-center align-middle gap-4 xl:max-w-3/4">
                <div>
                    <h2 id="level-designing">Level Designing</h2>
                    <p>While my professors warned me that the limited mechanics might prove to be difficult to make ten interesting levels with, I proved them wrong. It took loads of playtesting and shuffling around of levels, but in the end, the progression between levels was on point, with a few harder levels at the end to show how the game could scale up.</p>
                </div>
                <Image id="level-designing" src={levelDesign} width={1920} height={1080} alt="" />
            </div>

            <div className="grid grid-flow-dense md:grid-cols-2 items-center align-middle gap-4 xl:max-w-3/4">
                <div className="md:col-2 flex flex-col gap-2">
                    <h2>Visuals & Sounds</h2>
                    <p>{"Of course, a game is only halfway done without visuals or sounds. So once the levels were mostly done, I focused completely on enhancing the game's look and feel. This includes not only 3D models and 2D textures, but lighting, camera view, UI, sound effects, and music too."}</p>
                    <p>That concludes my project BOT-i, which I released on Itch, playable in the browser!</p>
                </div>
                <Image id="look-and-feel" src={lookFeel} width={1920} height={1080} alt="" />
            </div>

            <p>You can play the game on <Link href="https://lajawi.itch.io/bot-i/" target="_blank">Itch</Link>
            {/* TODO: Uncomment line after game embed has been added */}
            {/* , or at the end of this page */}
            .</p>

            {/* TODO: Add game embed */}

            {/* TODO: Add read more */}
        </div>
    );
}