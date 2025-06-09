import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import img1 from "@/public/projects/tussen-wet-en-geweten/1.png";
import img2 from "@/public/projects/tussen-wet-en-geweten/2.png";
import img3 from "@/public/projects/tussen-wet-en-geweten/3.png";
import img4 from "@/public/projects/tussen-wet-en-geweten/4.png";
import img5 from "@/public/projects/tussen-wet-en-geweten/5.png";
import cover from "@/public/projects/tussen-wet-en-geweten/cover.png";
import Image from "@/app/components/image";


const project = projects["tussen-wet-en-geweten"];

export const metadata: Metadata = project.metadata;

const images: StaticImport[] = [
    img1, img2, img3, img4, cover, img5,
]

export default function Page() {
    return(
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <div className="flex flex-col items-center gap-4 text-justify md:max-w-[75%]">
                <ProjectHeader project={project} />

                <p>As a group of five students from LUCA School of Arts - Mirte Bosmans, Kjenta Gevaert, <Link href="https://linktr.ee/CidarDew" target="_blank">Cidar Dewachter</Link>, and <Link href="https://linktr.ee/StijnMatu" target="_blank">Stijn Matu</Link> -, we got asked to come up with and create a prototype for a game or interactive experience that could fit in the <Link href="https://kazernedossin.eu/en/museum/" target="_blank">Kazerne Dossin Museum</Link>. Kazerne Dossin Museum is a museum based in Mechelen, Belgium, with a permanent exhibition about the persecution of Jews, Roma, and Sinti in Belgium during the Second World War, and on human rights. The topic we were tasked to focus on, is the importance of human rights which got introduced shortly after the Second World War.</p>
                <p>In our first week of the three week time frame, we went to the exhibition ourselves, observed and even talked with other visitors, and started ideating. Eventually the concept we wanted to develop further was a gamified experience in which the player(s) are the temporary mayors of the town Mechelen, and get presented with a bunch of different situations, all tied to one or more human right. Based on the decision the players make, they respect or disrespect a set of human rights, and once they played through the whole experience, they get presented with all the human rights that they faced, and which they did or did not respect.</p>
                <p>The next two weeks were reserved for creating a demo/prototype of the concept we came up with. I ended up doing most of the programming in Unity, the others were doing the art, further finalising the concept, and playtesting and choosing the situations and the human rights that will be represented by them.</p>
                <p>To play the game, you can go to <Link href="https://lajawi.itch.io/tussen-wet-en-geweten/" target="_blank">Itch</Link>
                {/* TODO: Uncomment line after game embed has been added */}
                {/*  or play it at the end of this page */}
                .</p>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 items-center align-middle gap-2">
                {images.map((image, index) => {
                    return(
                        <Image id={`img-${index}`} key={`img-${index}`} src={image} alt="" />
                    )
                })}
            </div>

            {/* TODO: Add YouTube embed */}

            {/* TODO: Add game embed */}

            {/* TODO: Add credits */}

            {/* TODO: Add read more */}
        </div>
    );
}