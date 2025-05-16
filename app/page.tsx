import Link from "next/link";

export default function Home() {
  return (
    <span className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <h1 className="not-sm:border-b-1 not-sm:pb-4 border-[var(--line)] sm:border-r-1 sm:pr-4">Welcome</h1>
      <div>
        <p>This page is still under heavy construction!</p>
        <p>{"Can't find something? Head over to"} <Link href={"https://laurin-winter.name/"}>laurin-winter.name</Link>.</p>
      </div>
    </span>
  );
}
