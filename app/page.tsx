'use client';

import RotatingText from "@/components/RotatingText";
import { LayoutGroup, motion } from "motion/react";
import { projectsWithIds } from "./projects/projects";
import ProjectCard from "./components/project-card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-(--page-width) justify-center flex flex-col align-middle items-center">
      <div className="rotating-text-demo flex-col sm:flex-row">
        <Image src={"/icon.svg"} alt="" width={200} height={200} className="m-8" />
        <LayoutGroup>
          <motion.p className="text-4xl sm:text-5xl md:text-6xl font-black font-mono rotating-text-ptag" layout>
            <motion.span
              className="pt-0.5 sm:pt-1 md:pt-2 text-(--foreground)"
              layout
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            >
              I am Laurin
            </motion.span>
            <RotatingText
              texts={[
                "Game Designer",
                "Bachelor graduate",
                "Programmer",
                "Master student"
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-(--logo-cyan) text-(--background) overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg text-nowrap"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.1}
              splitBy="words"
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.p>
        </LayoutGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 mt-4 mb-4">
        <ProjectCard project={projectsWithIds["team-tumble"]} highlight className="xl:flex-row" />
        <ProjectCard project={projectsWithIds["shrimp-vr"]} className="xl:flex-row" />
      </div>

      <Link href={"/projects"} className="border-2 rounded-md p-4 px-12 bg-(--off-background) border-(--logo-cyan) hover:bg-(--background-highlight) transition-colors">See More</Link>
    </div>
  );
}
