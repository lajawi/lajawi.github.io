import Link from "next/link";
import { ProjectWithId } from "../projects/projects";
import clsx from "clsx";
import DateDisplay from "./date";
import Image from "next/image";

export default function ProjectCard({project, className, highlight = false}: {project: ProjectWithId, className?: string, highlight?: boolean}) {
    const pathname = '/projects';
    const id = project.id;

    return (
        <Link
            href={`${pathname}/${id}`}
            className={clsx("flex flex-col items-center bg-(--off-background) rounded-[5px] overflow-hidden project-card transition-colors",
                className
            )}
        >
            {project.data.image && <Image src={`/projects/${id}/cover.png`} alt={project.metadata?.description || ""} width={500} height={300} className="object-cover xl:w-[60%] w-full h-[250] xl:h-[300] print:opacity-100 opacity-75 transition-opacity select-none" />}

            <div className="flex flex-col p-4 min-w-full xl:min-w-[400] xl:w-[40%]">
                <h2>{project.metadata?.title?.toString()}</h2>

                {project.data.date &&
                    <span className="flex flex-row justify-center items-center pb-2 gap-4">
                        <DateDisplay date={project.data.date.date} detail={project.data.date.detail} className="text-xs font-thin text-center" />

                        {highlight &&
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--logo-blue) opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-(--logo-blue)"></span>
                            </span>}
                    </span>}

                {project.metadata?.description && <p className="text-sm font-light whitespace-pre-line">{project.metadata.description}</p>}
            </div>
        </Link>
    );
}
