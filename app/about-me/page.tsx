import Image from "next/image";
import imageMe from "@/public/me.png";

export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <h1 id="about-me">About Me</h1>

            <div className="grid grid-flow-dense md:grid-cols-2 items-center align-middle gap-4 xl:max-w-3/4">
                <div className="md:col-2 flex flex-col items-center gap-2">
                    <p>Hi, my name is Laurin, and I am a game designer from Belgium. I love programming, and do consider myself excellent at it.</p>
                    <p>{"Blender is a program I've used for quite a while now too, having meddled around in it since high school in my free time."}</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src={imageMe} width={1920} height={1920} alt="" className="select-none" priority placeholder="blur" />
                    <p>Laurin Winter</p>
                </div>
            </div>
        </div>
    );
}