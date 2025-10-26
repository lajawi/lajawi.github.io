import { ImageResponse } from "next/og";
import { sortedProjects } from "./projects";

const n = 5;
const projectsIds = sortedProjects('rank').slice(0, n).map((proj) => {
    if (proj.data.image)
        return proj.id;
});

export const size = {
    width: 1200,
    height: 630,
}

export const dynamic = "force-static";

const imageWidth = size.width / projectsIds.length
const skewOffset = 100 // Adjust this to control the skew amount

export default async function Image() {
    return new ImageResponse((
        <div
            style={{
                fontSize: 96,
                background: 'black',
                color: 'white',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {projectsIds.map((id) => {
                // Calculate clip-path for each image to create skewed effect
                // Each image gets a parallelogram clip that lines up with adjacent images
                const leftOffset = (skewOffset / size.height) * 100 // Convert to percentage
                const rightOffset = leftOffset

                return (
                    <div
                        key={id}
                        style={{
                            position: "relative",
                            display: "flex",
                            width: imageWidth,
                            height: size.height,
                        }}
                    >
                        <picture>
                            <img
                                style={{
                                    objectFit: 'cover',
                                    left: -skewOffset / 2, // Center the wider image
                                    clipPath: `polygon(${leftOffset}% 0%, 100% 0%, ${100 - rightOffset}% 100%, 0% 100%)`,
                                    background: '#000000',
                                }}
                                width={imageWidth + (skewOffset / 2)}
                                height={size.height}
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}/cover.png`}
                                alt=""
                            />
                        </picture>
                    </div>
                )
            })}

            <div style={{
                position: 'absolute',
                fontSize: 96,
                background: '#000000B0',
                color: 'white',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                Projects • Laurin Winter
            </div>
        </div>
    ), {
        ...size,
    });
}