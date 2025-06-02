import { Metadata } from "next";
import Link from "next/link";
import { sortedProjectsAsArray } from "./projects";
import Image from "next/image";
import clsx from "clsx";
import DateDisplay from "../components/date";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Page() {
    const pathname = '/projects';

    const date = new Date();
    date.setMonth(date.getMonth() - 3);

    return (
        <div className="page-width w-full">
            <h1>Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 mt-4">
                    {sortedProjectsAsArray()?.map((proj, i) => {
                        const id = proj[0];
                        const project = proj[1];
                        return (
                            <Link href={`${pathname}/${id}`} key={id}
                            className={clsx("flex flex-col items-center bg-(--off-background) rounded-[5px] overflow-hidden project-card transition-colors",
                                {
                                    "xl:flex-row": i % 2 === 0,
                                    "xl:flex-row-reverse": i % 2 !== 0,
                                },
                            )}>
                                {project.data.image && <Image src={`/projects/${id}/cover.png`} alt={project.metadata?.description || ""} width={500} height={300} className="object-cover xl:w-[60%] w-full h-[250] xl:h-[300] opacity-75 transition-opacity"/>}

                                <div className="flex flex-col p-4 min-w-full xl:min-w-[400] xl:w-[40%]">
                                    <h2>{project.metadata?.title?.toString()}</h2>

                                    {
                                        project.data.date &&
                                        <span className="flex flex-row justify-center items-center pb-2 gap-4">
                                            <DateDisplay date={project.data.date.date} detail={project.data.date.detail} className="text-xs font-thin text-center" />
                                            {date <= project.data.date.date &&
                                            <span className="relative flex size-3">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                                            </span>
                                            }
                                        </span>
                                    }

                                    {project.metadata?.description && <p className="text-sm font-light whitespace-pre-line">{project.metadata.description}</p>}
                                </div>
                            </Link>
                        );
                    })}
                </div>
        </div>
    );
}