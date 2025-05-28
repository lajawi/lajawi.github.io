import { Metadata } from "next";
import Link from "next/link";
import { DateDetail, sortedProjectsAsArray } from "./projects";
import Image from "next/image";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Page() {
    const pathname = '/projects';

    return (
        <div className="page-width w-full">
            <h1>Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 mt-4">
                    {sortedProjectsAsArray()?.map((proj, i) => {
                        const id = proj[0];
                        const project = proj[1];
                        return (
                            <Link href={`${pathname}/${id}`} key={id}
                            className={clsx("flex flex-col items-center bg-[var(--off-background)] rounded-[5px] overflow-hidden",
                                {
                                    "xl:flex-row": i % 2 === 0,
                                    "xl:flex-row-reverse": i % 2 !== 0,
                                },
                            )}>
                                {project.data.image && <Image src={`/projects/${id}/cover.png`} alt={project.metadata?.description || ""} width={500} height={300} className="object-cover xl:min-w-[500] w-full h-[250] xl:h-[300]"/>}

                                <div className="grow flex flex-col p-4 min-w-full xl:min-w-[400]">
                                    <h2>{project.metadata?.title?.toString()}</h2>

                                    {
                                        project.data.date &&
                                        <p className="text-xs font-thin text-center pb-2">{
                                            project.data.date?.detail >= DateDetail.Year && `${project.data.date?.date.getFullYear()}`
                                        }{
                                            project.data.date?.detail >= DateDetail.Month && `.${project.data.date?.date.getMonth()}`
                                        }{
                                            project.data.date?.detail >= DateDetail.Day && `.${project.data.date?.date.getDate()}`
                                        }</p>
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