import SocialLinks from "./socials";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center text-[var(--muted)]">
            <hr className="border-[var(--line)] w-full" />
            <div className="flex flex-col justify-center items-center pt-4 pb-8 gap-2">
                <SocialLinks />
                © 2025-present Portfolio | Laurin Winter
            </div>
        </footer>
    );
}