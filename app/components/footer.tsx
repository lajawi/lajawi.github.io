import SocialLinks from "./socials";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center text-[var(--muted)] mt-8">
            <hr className="border-[var(--line)] w-full" />
            <div className="flex flex-col justify-center items-center pt-4 pb-8 gap-2">
                <SocialLinks />
                <p>
                    © 2025-present <span className="opacity-50 self-center">|</span> Laurin Winter
                </p>
            </div>
        </footer>
    );
}