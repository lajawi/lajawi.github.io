import Link from "next/link";

export default function Home() {
  return (
    <span className="flex flex-row items-center justify-center gap-4">
      <h1 className="border-r-1 pr-4 border-[var(--line)]">Welcome</h1>
      <div>
        <p>This page is still under heavy construction!</p>
        <p>Can't find something? Head over to <Link href={"https://laurin-winter.name/"}>laurin-winter.name</Link>.</p>
      </div>
    </span>
  );
}
