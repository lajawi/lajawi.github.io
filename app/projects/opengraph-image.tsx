import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
    return new ImageResponse((
        <div className="text-9xl bg-(--background) w-full h-full flex items-center justify-center">
            Projects • Laurin Winter
        </div>
    ), {
        ...size,
    });
}