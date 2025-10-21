import Link from "next/link";

export default function NotFound() {
    return (
        <span className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <h1 className="not-sm:border-b-1 not-sm:pb-4 border-[var(--line)] text-[var(--muted)] sm:border-r-1 sm:pr-4">404</h1>
            <div>
                <p>Page not found.</p>
                <p>It may be available at <Link href={"https://archive.laurin-winter.name/"}>archive.laurin-winter.name</Link> instead.</p>
            </div>
        </span>
    );
}