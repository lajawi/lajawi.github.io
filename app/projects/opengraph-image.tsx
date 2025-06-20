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
                return <img
                    style={{
                        objectFit: 'cover',
                        // transform: [{ skewX: '5deg' }],
                    }}
                    width={size.width / projectsIds.length}
                    height={size.height}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}/cover.png`}
                    alt=""
                    key={id}
                />
            })}

            <div style={{
                position: 'absolute',
                fontSize: 96,
                background: '#00000080',
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