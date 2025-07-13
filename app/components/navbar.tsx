'use client';

import clsx from "clsx";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ children }: { children?: React.ReactNode }) {
    return (
        <nav className="page-width navbar">
            <ul className="navbar-nav">
                {children}
            </ul>
        </nav>
    );
}

export function NavItem({ children, name, href, icon }: { children?: React.ReactNode, name: string, href: string, icon?: string | React.ReactNode }) {
    return (
        <li className="nav-item">
            <LinkItem name={name} href={href} icon={icon} className="flex flex-row gap-1 items-center">
                {children && <ChevronUp size={"20"} />}
            </LinkItem>
            {children}
        </li>
    );
}

export function DropdownMenu({ children }: { children: React.ReactNode }) {
    return (
        <div className="dropdown">
            {children}
        </div>
    );
}

export function DropdownItem({ name, href, icon }: { name: string, href: string, icon?: string | React.ReactNode }) {
    return (
        <LinkItem href={href} name={name} icon={icon} className="menu-item" />
    );
}

export function LinkItem({ children, name, href, icon, className }: { children?: React.ReactNode, name: string, href: string, icon?: string | React.ReactNode, className?: string }) {
    const pathname = usePathname();

    return (
        <Link href={href} key={href} className={clsx(
            className,
            {
                "text-(--muted)": pathname !== href,
                "text-(--foreground)": pathname === href,
            })}
        >
            {icon} {name} {children}
        </Link>
    );
}