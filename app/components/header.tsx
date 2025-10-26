'use client';

import { sortedProjects } from "../projects/projects";
import Navbar, { DropdownItem, DropdownMenu, NavItem } from "./navbar";

export default function Header() {
    return (
        <header className="flex flex-col justify-center items-center select-none">
            <Navbar>
                <NavItem href="/" name="Home"></NavItem>
                <NavItem href="/projects" name="Projects">
                    <DropdownMenu>
                        <DropdownItem href="/projects" name="View All" />
                        {sortedProjects("name").map((proj) => {
                            return (
                                <DropdownItem href={`/projects/${proj.id}`} name={proj.data.name} key={proj.id} />
                            );
                        })}
                    </DropdownMenu>
                </NavItem>
                <NavItem href="/timeline" name="Timeline"></NavItem>
                <NavItem href="/about-me" name="About Me"></NavItem>
            </Navbar>
            <hr className="border-(--line) w-full" />
        </header>
    );
}