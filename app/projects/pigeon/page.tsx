import ProjectHeader from "@/app/components/project-header";
import { projects } from "../projects";
import Image from "@/app/components/image";
import sketch from "@/public/projects/pigeon/sketch.png";
import img1 from "@/public/projects/pigeon/1.png"
import img2 from "@/public/projects/pigeon/2.png"
import img3 from "@/public/projects/pigeon/3.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const project = projects["pigeon"];

export const metadata = project.metadata;

const images: StaticImport[] = [img1, img2, img3];

export default function Page() {
    return (
        <div className="flex flex-col items-center gap-4 text-justify w-full">
            <ProjectHeader project={project} />

            <span className="w-dvw flex justify-center bg-[#7dabd1]">
                <video controls loop muted className="page-width w-full" width={1920} height={1080} poster="/projects/pigeon/poster.png">
                    <source src="/projects/pigeon/video.mp4" />
                </video>
            </span>

            <div className="page-width flex flex-col items-center gap-4">
                <div className="grid lg:grid-cols-[minmax(0,max-content)_minmax(40%,1fr)] items-center align-middle gap-4">
                    <Image id="pigeon-sketch" src={sketch} width={1920} height={1080} alt="" />
                    <div className="flex flex-col gap-2">
                        <p>This project - which I creatively called pigeon - was for showcasing our capabilities within Blender in my second year of Game Design.</p>
                        <p>I started off with coming up with an interesting idea after gathering some inspiration. I ended up at a little island with a lone house surrounded by pines, and a pigeon as the character in the scene.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 items-center align-middle gap-2">
                    {images.map((image, index) => {
                        return(
                            <Image id={`img-${index}`} key={`img-${index}`} src={image} alt="" />
                        )
                    })}
                </div>
            </div>

            {/* TODO: Add 3D embed */}

            {/* TODO: Add read more */}
        </div>
    );
}