import { projects } from "../projects";
import { Metadata } from "next";
import Image from "@/app/components/image";
import DateDisplay from "@/app/components/date";
import Link from "next/link";
import title from "@/public/projects/bubble-broth/title.png";

const project = projects["bubble-broth"];

export const metadata: Metadata = project.metadata;

export default function Page() {
    return (
        <div className="flex flex-col items-center gap-4 text-justify w-full">
            <span className="w-dvw flex justify-center bg-[#ffe2aa]">
                <Image className="md:mask-x-from-95%" id="bubble-broth-title" src={title} width={1920 * 0.5} height={640 * 0.5} alt="" />
            </span>

            <div className="page-width flex flex-col items-center">
                <div className="flex flex-col items-center gap-4 text-justify md:max-w-3/4">
                    <div className="text-center font-light text-sm">
                        <p className="opacity-75">{project.metadata.description}</p>
                        <DateDisplay className="opacity-75" date={project.data.date?.date} detail={project.data.date?.detail} />
                    </div>

                    <p>During our production days - a four-day module trying to simulate how it would be working in a game studio - we had to make a game from scratch in a team of 14 people, based on the old game <Link href='https://en.wikipedia.org/wiki/Bubble_Bobble_(video_game)' target="_blank">Bubble Bobble</Link>, while pretending it was an order from a game company. Our team was made up of one producer, two people for game mechanics, three programmers - one of which was me -, five artists, one narrator, one sound designer, and one for marketing.</p>

                    <h2>Ideation</h2>
                    <p>First thing we did was come up with ideas around Bubble Bobble, and how we could change it to make it fit into this modern world. Lots of ideas were thrown on the table, lots of ideas were trashed, until we ended up with a game in which you need catch enemies - who stole your grandma&apos;s ingredients - and get the ingredients back.</p>

                    <h2>Programming</h2>
                    <p>Within our team of programmers, I was tasked with setting up the Git repository for the Unity project. Once set up and running, every one of us worked on a different part. I for one, started off with trying to create platforms that are passable from the bottom, which is super easy nowadays, because there is a component that makes it a one-click solution - the Platform Effector 2D component.</p>
                    <p>With that out of the way, I created a system for scene management, so we could easily add and remove levels, without having to reconnect them in every level separately. Afterwards I set out to create the functionality for the three enemies that the mechanics team designed.</p>
                    <p>Our game was supposed to be played by two players, which meant to deal with two controller inputs. After quite a lot of struggling and figuring out, I managed to get it to work.</p>
                    <p>With not much time left, we went on to combine everything. Importing assets & sounds, combining all scripts, fixing, and tweaking.</p>

                    <h2>Presenting</h2>
                    <p>While presenting our game, we encountered a major bug that rendered the game unplayable because the players wouldn&apos;t spawn. We tried fixing it minutes before the presentation but to no avail. Only after the presentation, when I went to check for yet another time, I found the culprit - two instances of one singleton in the very first scene. This meant that everytime the scene loaded, *one* of the two would be destroyed, so sometimes the game worked, other times it didn&apos;t, depending on which of the two got destroyed.</p>
                </div>

                {/* TODO: Add credits */}

                {/* TODO: Add read more */}
            </div>
        </div>
    );
}