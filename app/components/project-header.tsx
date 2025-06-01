import { Project } from "@/app/projects/projects";
import DateDisplay from "./date";

export default function ProjectHeader({ project }: { project: Project }) {
    return (
        <div>
            <h1>{project.metadata.title?.toString()}</h1>
            <div className="text-center font-light text-sm">
                <p className="opacity-75">{project.metadata.description}</p>
                <DateDisplay className="opacity-75 mt-2" date={project.data.date?.date} detail={project.data.date?.detail} />
            </div>
        </div>
    );
}