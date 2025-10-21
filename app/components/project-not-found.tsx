'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProjectNotFoundWithLink() {
    const pathname = usePathname();
    const project = pathname.replace("/projects/", "");

    console.log(pathname);

    return (
        <p>It may be at <Link href={`https://archive.laurin-winter.name/${project}`}>archive.laurin-winter.name/{project}</Link>.</p>
    );
}