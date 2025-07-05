'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { name: string, href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Me', href: '/about-me' },
];

export default function Header() {
    const pathname = usePathname();
    return (
        <header className="flex flex-col justify-center items-center select-none">
            <nav className="flex justify-start items-center page-width p-4 pt-6 text-sm gap-8 w-full">
                {links.map((link) => {
                    return (
                        <Link href={link.href} key={link.href}
                            className={clsx(
                                {
                                    "text-[var(--muted)]": pathname !== link.href,
                                    "text-[var(--foreground)]": pathname === link.href,
                                }
                            )}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
            <hr className="border-[var(--line)] w-full" />
        </header>
    );
}