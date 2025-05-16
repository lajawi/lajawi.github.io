import ProjectNotFoundWithLink from "@/app/components/project-not-found";

export default function ProjectsNotFound() {
    return (
        <span className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <h1 className="not-sm:border-b-1 not-sm:pb-4 border-[var(--line)] text-[var(--muted)] sm:border-r-1 sm:pr-4">404</h1>
            <div>
                <p>Project not found.</p>
                <ProjectNotFoundWithLink />
            </div>
        </span>
    );
}