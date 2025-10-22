import { Play } from "lucide-react";
import Link from "next/link";

export default function YouTubeEmbed(
    {
        ytId,fallbackVideo,
        width = 560,
        height = 315
    }: {
        ytId: string,
        fallbackVideo?: string,
        width?: number,
        height?: number
    }) {
    {/* TODO: Get cookie consent when consent banner has been implemented */}
    const hasCookiesConsent = false;

    return (
        <div className="relative flex w-full justify-center items-center video-embed z-10"
        style={{maxWidth: width, aspectRatio: `${width} / ${height}`}}
        >
            {hasCookiesConsent &&
                <iframe
                    width={"100%"}
                    height={"100%"}
                    src={`https://www.youtube-nocookie.com/embed/${ytId}`}
                    allow="clipboard-write; encrypted-media; picture-in-picture;"
                    referrerPolicy="no-referrer"
                    allowFullScreen
                    className="border-0"
                ></iframe>
            }

            {fallbackVideo && !hasCookiesConsent &&
                <video controls width={"auto"} height={"100%"} className="block w-fit h-fit">
                    <source src={fallbackVideo}/>
                    <p className="p-4">Video could not load. You can watch it on <Link href={`https://youtu.be/${ytId}`}>YouTube</Link>.</p>
                </video>
            }

            {!fallbackVideo && !hasCookiesConsent &&
                <p className="p-4 z-30">Video could not load. You can watch it on <Link href={`https://youtu.be/${ytId}`}>YouTube</Link>.</p>
            }

            <Play color="var(--background-highlight)" fill="var(--background-highlight)" opacity={0.5} size={"60%"} className="absolute z-20" />
        </div>
    );
}