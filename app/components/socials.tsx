import Link from "next/link";

type Social = {
    href: string,
    title: string,
    id: string,
};

type Socials = Record<string, Social>;

export const socials: Socials = {
    github: {
        href: "https://github.com/lajawi/",
        title: "GitHub",
        id: "github",
    },
    itchio: {
        href: "https://lajawi.itch.io/",
        title: "Itch.io",
        id: "itchio",
    },
    linkedin: {
        href: "https://linkedin.com/in/laurin-winter/",
        title: "LinkedIn",
        id: "linkedin",
    },
    sketchfab: {
        href: "https://sketchfab.com/laurin_winter/",
        title: "Sketchfab",
        id: "sketchfab",
    },
} as const;

export function SocialLink({ social }: { social: Social }) {
    return (
        <Link href={social.href} target="_blank" title={social.title} className="bg-[var(--muted)] w-10 h-10 m-4 select-none cursor-pointer" style={{
            maskImage: `url(logos/${social.id}.svg)`,
            maskSize: "2rem",
            maskRepeat: "no-repeat",
            maskPosition: "center",
        }} />
    );
}

export default function SocialLinks() {
    return (
        <div className="flex">
            {Object.entries(socials).map((social) => {
                return (
                    <SocialLink key={social[0]} social={social[1]} />
                );
            })}
        </div>
    );
}