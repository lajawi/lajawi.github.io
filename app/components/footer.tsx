import Link from "next/link";
import SocialLinks from "./socials";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center text-[var(--muted)] mt-8">
            <hr className="border-[var(--line)] w-full" />
            <div className="flex flex-col justify-center items-center pt-4 pb-8 gap-2">
                <SocialLinks />
                <p className="mb-4">
                    © 2025-present <span className="opacity-50 self-center">|</span> Laurin Winter
                </p>

                <p>This page is still a work in progress.</p>
                <p>Can&apos;t find something? Head on over to <Link href={"https://archive.laurin-winter.name/"}>archive.laurin-winter.name</Link>.</p>
            </div>
        </footer>
    );
}