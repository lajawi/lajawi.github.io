export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center">
            <hr className="border-[var(--line)] w-full" />
            <div className="text-[var(--muted)] flex flex-col justify-center items-center page-width p-4 pb-8 text-sm gap-2">
                © 2025-present Portfolio | Laurin Winter
            </div>
        </footer>
    );
}