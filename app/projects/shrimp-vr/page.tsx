import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import img1 from "@/public/projects/shrimp-vr/1.jpg";
import img2 from "@/public/projects/shrimp-vr/2.jpg";
import img3 from "@/public/projects/shrimp-vr/3.jpg";
import img4 from "@/public/projects/shrimp-vr/4.jpg";
import img5 from "@/public/projects/shrimp-vr/5.jpg";
import img6 from "@/public/projects/shrimp-vr/6.jpg";
import Image from "@/app/components/image";

const project = projects["shrimp-vr"];

export const metadata: Metadata = project.metadata;

const images: StaticImport[] = [
    img1, img2, img3, img4, img5, img6
];

export default function Page() {
    return(
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <div className="flex flex-col items-center gap-4 text-justify md:max-w-3/4">
                <ProjectHeader project={project} />

                <p>Simple premise, quick execution. In a matter of 30 hours, we created a lovely little baking game in VR for the very first game jam The Park in Antwerp organised. Together with <Link href="https://ragnamoller.myportfolio.com/" target="_blank">Ragna Møller</Link>, <Link href="https://fristidc.carrd.co/" target="_blank">Fristi DC</Link>, and <Link href="https://www.artstation.com/amprave" target="_blank">Jaro Landman</Link> for the assets, and <Link href="https://www.linkedin.com/in/thomas-nelen" target="_blank">Thomas Nelen</Link>, and me for programming, we came up and made this game. Even with the short time span, we were able to make a winning game, being placed first of nine.</p>

            </div>

            <video src="/projects/shrimp-vr/recording.mp4" controls className="md:max-w-[50%] sm:max-w-3/4"></video>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 items-center align-middle gap-2">
                {images.map((image, index) => {
                    return(
                        <Image id={`img-${index}`} key={`img-${index}`} src={image} alt="" placeholder="blur" />
                    );
                })}
            </div>
        </div>
    );
}