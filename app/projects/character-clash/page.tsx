import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";
import sketch from "@/public/projects/character-clash/sketch.png";
import modelsheet from "@/public/projects/character-clash/modelsheet.png";
import modelling from "@/public/projects/character-clash/modelling.png";
import rigging from "@/public/projects/character-clash/rigging.png";
import render from "@/public/projects/character-clash/render.png";
import ideation from "@/public/projects/character-clash/ideation.png";
import Image from "@/app/components/image";
import Link from "next/link";

const project = projects["character-clash"];

export const metadata: Metadata = project.metadata;

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <div className="md:max-w-3/4 flex flex-col gap-4">
                <p>For the module Game Visuals at the Zurich University of the Arts, we first had to draw a bunch of small characters (66 to be exact), and then pick out which one we were going to develop further, based on the quick interactions we came up with between our characters.</p>
                <p>With a character chosen, I dove straight into creating a modelsheet...</p>
            </div>

            <br />

            <div className="grid sm:grid-cols-2 items-center align-middle gap-2">
                <Image id="sketch" src={sketch} width={1920} height={1917} alt="" />
                <Image id="modelsheet" src={modelsheet} width={1920} height={1920} alt="" />
            </div>

            <br />

            <p>... modelling and rigging soon followed...</p>

            <br />

            <div className="grid sm:grid-cols-2 items-center align-middle gap-2">
                <Image id="modelling" src={modelling} width={1920} height={1920} alt="" />
                <Image id="rigging" src={rigging} width={1920} height={1920} alt="" />
            </div>

            <br />

            <p>... and the animations and simple textures put the icing on the cake.</p>

            <br />

            <div className="grid sm:grid-cols-2 items-center align-middle gap-2">
                <video controls loop muted width={1080} height={1080}>
                    <source src="/projects/character-clash/walk-cycle.mp4" />
                </video>
                <Image id="render" src={render} width={1080} height={1080} alt="" />
            </div>

            <br />

            <p className="md:max-w-3/4">Of course, this assignment doesn&apos;t seem to be much of a Character Clash yet. The pea you see in my pan character (I call her Marie la Sauteuse), comes from <Link href={"https://maxegli.com/"} target="_blank">Max Egli</Link>&apos;s pea-head character. Before we even started modelling our characters, we put our minds together to come up with creative ideas on how our characters could clash - aha, there it is. Max&apos; character would be able to pick out a pea-head, and Marie la Sauteuse could pick it up and play with it, throwing it about etc.</p>

            <Image id="ideation" src={ideation} width={3000} height={2131} alt="Our brainstorm on how our characters could interact" className="md:max-w-3/4" />

            <br />

            <p>Due to limited time, we didn&apos;t get to implement both of our characters in one Unity scene, however, I was able to get Marie la Sauteuse fully working, as seen below.</p>

            <video controls loop muted width={1920} height={1080}>
                <source src="/projects/character-clash/unity.mp4" />
            </video>

            {/* TODO: Add read more */}
        </div>
    );
}