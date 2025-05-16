import Link from "next/link";

export default function NotFound() {
    return (
        <span className="flex flex-row items-center justify-center gap-4">
            <h1 className="border-r-1 pr-4 border-[var(--line)] text-[var(--muted)]">404</h1>
            <div>
                <p>Page not found.</p>
                <p>It may be available at <Link href={"https://laurin-winter.name/"}>laurin-winter.name</Link> instead.</p>
            </div>
        </span>
    );
}