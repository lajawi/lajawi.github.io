import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";
import comp from "@/public/projects/3-props/composition.jpg";
import toaster from "@/public/projects/3-props/toaster.jpg";
import meatGrinder from "@/public/projects/3-props/meat-grinder.jpg";
import chainsaw from "@/public/projects/3-props/chainsaw.jpg";
import uvs from "@/public/projects/3-props/uv.png";
import Image from "@/app/components/image";
import Link from "next/link";

const project = projects["3-props"];

export const metadata: Metadata = project.metadata;

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <Image id="composition" src={comp} width={1919} height={822} alt="" className="md:max-w-3/4" />

            <div className="grid md:grid-cols-2 items-center align-middle gap-4">
                <div className="flex flex-col gap-2">
                    <p>The idea behind this small project was to create three props in the style of a game, that aren{"'"}t yet in that game. The game I choose? <Link href={"https://www.team17.com/games/overcooked-2"} target="_blank">Overcooked! 2</Link>.</p>
                    <h2 id="toaster">Toaster</h2>
                    <p>{"At first, I wanted to make a microwave, a bread machine, and a toaster for my three props. The only one of those that stuck was the toaster, I ditched the other two, because they too were quite boxy, their shapes weren't that interesting."}</p>
                </div>
                <Image id="toaster" src={toaster} width={933} height={933} alt="" />
            </div>

            <div className="grid grid-flow-dense md:grid-cols-2 items-center align-middle gap-4">
                <div className="md:col-2 flex flex-col gap-2">
                    <h2 id="meat-grinder">Meat Grinder</h2>
                    <p>{"I couldn't find a meat grinder in Overcooked, so I decided to take it upon myself to create one in 3D. I am especially fond of how round and smooth it looks (besides the face corners you can see) while maintaining a very low poly count."}</p>
                    <p>This project had a cap of 6.000 faces in total, for all three models. Towards the deadline, I read the maximum face count as 600 instead, and tried removing faces, even though I only had ~700.</p>
                </div>
                <Image id="meat-grinder" src={meatGrinder} width={858} height={858} alt="" />
            </div>

            <div className="grid md:grid-cols-2 items-center align-middle gap-4">
                <div className="flex flex-col items-center gap-4">
                    <h2 id="chainsaw">Chainsaw</h2>
                    <p>{'Yes, you read that right, "Chainsaw". The idea came to be by my professor, who unironically suggested a chainsaw instead of the more boxy microwave or bread machine.'}</p>
                    <p>This model was the hardest of the three, it took me several tries to get the shapes right, and only after I actually held our chainsaw at home in my hands and looked it up close.</p>

                    <Image id="chainsaw" src={chainsaw} width={951} height={951} alt="" className="md:hidden" />

                    <h2 id="uvs">UVs</h2>
                    <p>All three models should share one UVmap.</p>
                </div>
                <Image id="chainsaw" src={chainsaw} width={951} height={951} alt="" className="not-md:hidden" />
            </div>

            <Image id="uvs" src={uvs} width={1439} height={1343} alt="" className="md:max-w-3/4" />

            {/* TODO: Add 3D embed */}

            {/* TODO: Add read more */}
        </div>
    );
}