"use client";

import Link from "next/link";
import Image from "next/image";
import { sortedProjects } from "../projects/projects";
import clsx from "clsx";
import DateDisplay from "./date";

export default function SortedProjects() {
    // const [sortBy, setSortBy] = useState<SortByType>("rank");
    const sortBy = "rank";
    // const [sortAscending, setSortAscending] = useState<boolean>(false);
    const sortAscending = false;
    const pathname = '/projects';

    // useEffect(() => {
    //     setSortAscending(false);
    // }, [sortBy]);

    const date = new Date();
    date.setMonth(date.getMonth() - 3);

    return (
        <>
            {/* <div className="flex flex-row gap-2 items-center justif-center select-none">
                Sort
                <select onChange={e => setSortBy(e.target.value as SortByType)} name="Sort By" id="sort-by" className="bg-(--background-highlight) rounded-md p-2 py-1 h-full" defaultValue={"rank"} >
                    <option value="rank">Rank</option>
                    <option value="name">Name</option>
                    <option value="date">Date</option>
                </select>

                <button type="button" onClick={() => setSortAscending(!sortAscending)} className="bg-(--background-highlight) rounded-md p-2 py-1 cursor-pointer">{sortAscending ? "Ascending" : "Descending"}</button>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 mt-4">
                {sortedProjects(sortBy, sortAscending)?.map((project, i) => {
                    const id = project.id;
                    return (
                        <Link href={`${pathname}/${id}`} key={id}
                            className={clsx("flex flex-col items-center bg-(--off-background) rounded-[5px] overflow-hidden project-card transition-colors",
                                {
                                    "xl:flex-row": i % 2 === 0,
                                    "xl:flex-row-reverse": i % 2 !== 0,
                                },
                            )}>
                            {project.data.image && <Image src={`/projects/${id}/cover.png`} alt={project.metadata?.description || ""} width={500} height={300} className="object-cover xl:w-[60%] w-full h-[250] xl:h-[300] opacity-75 transition-opacity" />}

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
        </>
    );
}
