import { Metadata } from "next";
import { projects } from "../projects";
import ProjectHeader from "@/app/components/project-header";
import Link from "next/link";
import Image from "@/app/components/image";

const project = projects["team-tumble"];

export const metadata: Metadata = project.metadata;

const paletteImages: string[] = [
    'colour-palettes-1.png',
    'colour-palettes-2.png',
    'colour-palettes-3.png',
    'colour-palettes-4.png',
    'colour-palettes-5.png',
    'colour-palettes-6.png',
];

// TODO: Add image alts, from https://laurin-winter.name/team-tumble
export default function Page() {
    return (
        <div className="page-width flex flex-col items-center gap-4 text-justify">
            <ProjectHeader project={project} />

            <p className="md:max-w-[75%]">The basis for Team Tumble was <Link href="https://en.wikipedia.org/wiki/Boulder_Dash_(video_game)" target="_blank">Boulder Dash</Link>, a game in which you play a miner collecting diamonds against time, whilst avoiding but cleverly utilising falling boulders and enemies.</p>

            <div className="grid grid-flow-dense lg:grid-cols-[minmax(0,max-content)_minmax(40%,1fr)] items-center align-middle justify-items-center gap-4 md:max-w-[75%] lg:max-w-full">
                <div className="lg:col-2">
                    <h2 id='ideation'>Ideation</h2>
                    <p>In one of the ideas I came up with, I combined Sokoban and Boulder Dash, essentially a game where you need to make boulders fall into specific spots to finish the level by digging dirt from underneath and pushing the boulders around.</p>
                </div>
                <Image id="idea-1" src="/projects/team-tumble/idea-boulder-dash-ft-sokoban.png" width={1619} height={784} alt="Idea: Boulder Dash and Sokoban combined" />
            </div>

            <div className="grid lg:grid-cols-[minmax(0,max-content)_minmax(50%,1fr)] items-center align-middle justify-items-center gap-4 md:max-w-[75%] lg:max-w-full">
                <p>{"The second idea was inspired by the location of my home university, LUCA School of Arts in Genk. It sits atop a decommisioned coal mine, and in this concept, you would need to dig for enough coal and escape before the time runs out. The catch is, the timer is oxygen inside the mines, so instead of a global timer, it's local timers, visualised by canaries in the level, which are either standing (still enough oxygen), falling (barely enough), or dead (time ran out for that particular area)."}</p>
                <Image id="idea-2" src="/projects/team-tumble/idea-coal-mines.png" width={1499} height={775} alt="Idea: Coal Mines" />
            </div>

            <div className="grid grid-flow-dense lg:grid-cols-[minmax(0,max-content)_minmax(40%,1fr)] items-center align-middle justify-items-center gap-4 md:max-w-[75%] lg:max-w-full">
                <div className="lg:col-2 flex flex-col gap-2">
                    <p>In a third idea, I played around with the size of the player character. What if, instead of only one block, you could suddenly dig through what is essentially four blocks of dirt?</p>
                    <p>By using the sparsely distributed powerups to grow and shrink in size, you would have to dig to a hidden treasure, and escape the level before the time runs out.</p>
                </div>
                <Image id="idea-3" src="/projects/team-tumble/idea-big-small.png" width={1345} height={829} alt="Idea: Player Resising" />
            </div>

            <p className="md:max-w-[75%]">In yet another concept, I played around with the amount of characters. Why only have one, if you could have more? This idea stuck, and I went on to prototype around it.</p>

            <h2 id='prototyping'>Prototyping</h2>
            <p className="md:max-w-[75%]">With a clear vision of what my core game mechanics were, I started prototyping. At first, I worked with an object oriented approach, but that quickly became a burden, especially once I implemented the boulders. They need to know when another space is either occupied or about to be occupied in the next update.</p>
            <Image className="md:max-w-[50%]" id="object-orient" src="/projects/team-tumble/object-oriented.png" width={1600} height={900} alt="" />

            {/* TODO: Fine tune image placement on different mediums */}
            <div className="grid grid-flow-dense xl:grid-cols-[minmax(0,max-content)_minmax(50%,1fr)] items-center align-middle gap-4 md:max-w-[75%] xl:max-w-full">
                <div>
                    <p>Very early in development, I decided to switch to using tile maps in Unity (my first time, actually), which required a rewrite of my whole project as it was at that point, a task I am very glad of achieving.</p>
                    <h2 id='colour-palettes'>Colour Palettes</h2>
                    <p>Once the game was in a working state, my focus shifted towards the visuals. At first, I just updated the so-called {`"programmer art"`} to something more coherent and nice-looking, but afterwards I started experimenting with different colour palettes. I tried out different wild ideas, like black & white, a colour palette inspired heavily by <Link href="https://www.hempuli.com/baba/" target="_blank">Baba Is You</Link>, and others, until I ended up with a nice and vibrant one.</p>
                </div>
                <Image id="tilemaps" className="xl:order-1 -order-1" src="/projects/team-tumble/tilemaps.png" width={1600} height={900} alt="" />
            </div>

            <div className="grid md:grid-cols-2 items-center align-middle gap-2">
                {paletteImages.map((image, index) => {
                    return (
                        <Image id={`palette-${index}`} key={image} src={`/projects/team-tumble/${image}`} width={1600} height={900} alt={`Colour palette ${index + 1}`} />
                    )
                })}
            </div>

            <div className="grid grid-flow-dense md:grid-cols-[minmax(0,max-content)_minmax(35%,1fr)] items-center align-middle gap-4 xl:max-w-[75%]">
                <div className="md:col-2">
                    <h2 id='ui'>UI</h2>
                    <p>Up until now, the user interface had the default white boxes from Unity, but now that I decided on a colour palette, the UI received a visual update too.</p>
                </div>
                <Image id="ui" src="/projects/team-tumble/ui.png" width={1600} height={900} alt="" />
            </div>

            <h2 id='playtesting'>Playtesting</h2>
            <p className="md:max-w-[75%]">During the whole development of Team Tumble, I made sure to extensively playtest the game, to make sure the learning curve was perfect, and the levels were doable.</p>
            <p className="md:max-w-[75%]">And with that, the game was ready to be published! You can now play the 8 levels coming with the game on <Link href="https://lajawi.itch.io/team-tumble/" target="_blank">Itch</Link>
            {/* TODO: Uncomment line after game embed has been added */}
            {/* , or at the end of this page */}
            .</p>

            {/* TODO: Add game embed */}

            {/* TODO: Add read more */}
        </div>
    );
}