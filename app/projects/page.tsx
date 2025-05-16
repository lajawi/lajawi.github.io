import { Metadata } from "next";
import Link from "next/link";
import { DateDetail, sortedProjects, sortedProjectsAsArray } from "./projects";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Projects",
};

export default function Page() {
    const pathname = '/projects';

    return (
        <div className="page-width w-full">
            <h1>Projects</h1>

            {sortedProjectsAsArray()?.map((proj, i) => {
                const id = proj[0];
                const project = proj[1];
                return (
                    <Link href={`${pathname}/${id}`} key={id} className="flex flex-row items-center">
                        {project.data.image && <Image src={project.data.image} alt={project.metadata?.description || ""}/>}

                        <div className="flex flex-col min-w-full p-4">
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
    );
}