"use client";

import { sortedProjects } from "../projects/projects";
import clsx from "clsx";
import ProjectCard from "./project-card";

export default function SortedProjects() {
    // const [sortBy, setSortBy] = useState<SortByType>("rank");
    const sortBy = "rank";
    // const [sortAscending, setSortAscending] = useState<boolean>(false);
    const sortAscending = false;

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
                    return (
                        <ProjectCard
                            key={i}
                            project={project}
                            className={clsx({
                                "xl:flex-row": i % 2 === 0,
                                "xl:flex-row-reverse": i % 2 !== 0,
                            })}
                            highlight={project.data.date?.date && date <= project.data.date.date}
                        />
                    );
                })}
            </div>
        </>
    );
}
