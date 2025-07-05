import { Metadata } from "next";
import SortedProjects from "../components/sorted-projects";

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of my proudest works since I started Game Design",
};

export default function Page() {
    return (
        <div className="page-width w-full flex flex-col items-center">
            <h1>Projects</h1>

            <SortedProjects />
        </div>
    );
}