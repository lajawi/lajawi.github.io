import { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const projectsUrl = `${baseUrl}/projects`;

export type Project = {
    data: {
        name: string,
        rank: number,
        date?: {
            /** If inputting the date with new Date(year, month, date), be sure to subtract 1 from the month, as it's an index between 0 and 11
             *
             * When reading it's output with getMonth() do the opposite, add 1
            */
            date: Date,
            detail: DateDetailType,
        },
        image?: boolean,
    },
    metadata: Metadata,
};

export const DateDetail = {
    Year: 0,
    Month: 1,
    Day: 2,
} as const;

type ObjectValues<T> = T[keyof T];

export type DateDetailType = ObjectValues<typeof DateDetail>;

// export type DateDetail = 'Year' | 'Month' | 'Day';

export const projects: Record<string, Project> = {
    "team-tumble": {
        data: {
            name: "Team Tumble",
            rank: 10,
            date: { date: new Date(2024, 11), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Team Tumble",
            description: "Swiftly move through increasingly difficult caves, and save as many minions as you can.",
            openGraph: {
                url: `${projectsUrl}/team-tumble`,
                images: [{ url: `${projectsUrl}/team-tumble/cover.png` }],
            },
        }
    },
    "pigeon": {
        data: {
            name: "Pigeon",
            rank: 6,
            date: { date: new Date(2024, 5), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Pigeon",
            openGraph: {
                url: `${projectsUrl}/pigeon`,
                images: [{ url: `${projectsUrl}/pigeon/cover.png` }],
            },
        }
    },
    "bubble-broth": {
        data: {
            name: "Bubble Broth",
            rank: 9,
            date: { date: new Date(2024, 9), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Bubble Broth",
            openGraph: {
                url: `${projectsUrl}/bubble-broth`,
                images: [{ url: `${projectsUrl}/bubble-broth/title.png` }],
            },
        }
    },
    "tussen-wet-en-geweten": {
        data: {
            name: "Tussen Wet en Geweten",
            rank: 8,
            date: { date: new Date(2024, 1), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Tussen Wet en Geweten",
            description: `Take on the role of a mayor, who tries to respect as many of the universal human rights as possible. Get confronted with different situations and choose wisely.

            With every choice you make, you may or may not be disrespecting human rights.`,
            openGraph: {
                url: `${projectsUrl}/tussen-wet-en-geweten`,
                images: [{ url: `${projectsUrl}/tussen-wet-en-geweten/cover.png` }],
            },
        }
    },
    "shrimp-vr": {
        data: {
            name: "Shrimp VR",
            rank: 8,
            date: { date: new Date(2025, 1), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Shrimp VR",
            openGraph: {
                url: `${projectsUrl}/shrimp-vr`,
                images: [{ url: `${projectsUrl}/shrimp-vr/cover.png` }],
            },
        }
    },
    "bot-i": {
        data: {
            name: "BOT-i",
            rank: 6,
            date: { date: new Date(2024, 4), detail: DateDetail.Year },
            image: true,
        },
        metadata: {
            title: "BOT-i",
            description: `In a world of scrap, BOT-i remains. Puzzle your way through increasingly difficult terrain, while avoiding running out of battery.`,
            openGraph: {
                url: `${projectsUrl}/bot-i`,
                images: [{ url: `${projectsUrl}/bot-i/cover.png` }],
            },
        }
    },
    "3-props": {
        data: {
            name: "3 Props",
            rank: 5,
            date: { date: new Date(2024, 0), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "3 Props",
            description: `Yes, kitchen appliances`,
            openGraph: {
                url: `${projectsUrl}/3-props`,
                images: [{ url: `${projectsUrl}/3-props/cover.png` }],
            },
        }
    },
    "sound-design-for-a-pre-existing-game-video": {
        data: {
            name: "Sound Design for a Pre-existing Game Video",
            rank: 5,
            date: { date: new Date(2024, 9), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Sound Design for a Pre-existing Game Video",
            openGraph: {
                url: `${projectsUrl}`,
                images: [{ url: `${projectsUrl}/sound-design-for-a-pre-existing-game-video/cover.png` }],
            },
        }
    },
    "character-clash": {
        data: {
            name: "Character Clash",
            rank: 5,
            date: { date: new Date(2024, 9), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Character Clash",
            openGraph: {
                url: `${projectsUrl}/character-clash`,
                images: [{ url: `${projectsUrl}/character-clash/cover.png` }],
            },
        }
    },
    "operation-skyhigh": {
        data: {
            name: "Operation Skyhigh",
            rank: 5,
            date: { date: new Date(2023, 10), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Operation Skyhigh",
            description: `Work together with your friend, to fend yourselves against the ever increasing waves of enemies coming your way. Skillfully dash through them, or let out a burst of power, destroying the enemies in the meantime.`,
            openGraph: {
                url: `${projectsUrl}/operation-skyhigh`,
                images: [{ url: `${projectsUrl}/operation-skyhigh/cover.png` }],
            },
        }
    },
    "walking-animation": {
        data: {
            name: "Walking Animation",
            rank: 4,
            date: { date: new Date(2024, 3), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Walking Animation",
            openGraph: {
                url: `${projectsUrl}/walking-animation`,
                images: [{ url: `${projectsUrl}/walking-animation/cover.png` }],
            },
        }
    },
    "monumental": {
        data: {
            name: "Monumental",
            rank: 4,
            date: { date: new Date(2023, 4), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Monumental",
            description: `Solve intriguing puzzles in scenic, well-known locations around the world!`,
            openGraph: {
                url: `${projectsUrl}/monumental`,
                images: [{ url: `${projectsUrl}/monumental/cover.png` }],
            },
        }
    },
    "sticky-getaway": {
        data: {
            name: "Sticky Getaway",
            rank: 3,
            date: { date: new Date(2023, 2), detail: DateDetail.Month },
            image: true,
        },
        metadata: {
            title: "Sticky Getaway",
            description: `Go about escaping the neon labs, cleverly avoiding spikes and enemies! Find buttons, press buttons, open doors!`,
            openGraph: {
                url: `${projectsUrl}/sticky-getaway`,
                images: [{ url: `${projectsUrl}/sticky-getaway/cover.png` }],
            },
        }
    },
} as const;

export const sortedProjectsAsArray = (): [string, Project][] => {
    return Object.entries(projects).sort((a, b) => b[1].data.rank - a[1].data.rank);
}

export type ProjectWithId = {id: string} & Project;

type ProjectArray = ProjectWithId[];

const projectsAsObject = (): ProjectArray => {
    return Object.entries(projects).map(([k, v]) => ({
        id: k,
        ...v,
    }));
};

type RecordableKeys<T> = {
  // for each key in T
  [K in keyof T]:
    // is the value a valid object key?
    T[K] extends string | number | symbol
    // Yes, return the key itself
    ? K
    // No. Return `never`
    : never
}[keyof T] // Get a union of the values that are not `never`.

function toRecord<
  T extends { [P in RecordableKeys<T>]: string | number | symbol },
  K extends RecordableKeys<T>
>(array: T[], selector: K): Record<T[K], T> {
  return array.reduce((acc, item) => (acc[item[selector]] = item, acc), {} as Record<T[K], T>)
}

export const projectsWithIds: Record<string, ProjectWithId> = toRecord(Object.entries(projects).map(([k, v]) => ({id: k, ...v})), "id");

// export const projectsWithIds: { [key: string]: ProjectWithId } = projects as { [key: string]: ProjectWithId };

const sortedProjectsByRank = (): ProjectArray => {
    return projectsAsObject().sort((a, b) => b.data.rank - a.data.rank);
}

const sortedProjectsByName = (): ProjectArray => {
    return projectsAsObject().sort((a, b) => a.data.name.localeCompare(b.data.name, "en"))
}

const sortedProjectsByDate = (): ProjectArray => {
    return projectsAsObject().sort((a, b) => {
        if (!b.data.date) {
            return -1;
        }
        if (!a.data.date) {
            return 1;
        }
        return b.data.date!.date.getTime() - a.data.date!.date.getTime();
    });
}

type SortByType = "rank" | "name" | "date";

export const sortedProjects = (sortBy: SortByType, ascending: boolean = false): ProjectArray => {
    const arr = SortBy[sortBy]();

    return ascending ? arr.reverse() : arr;
}

const SortBy: Record<SortByType, () => ProjectArray> = {
    "rank": sortedProjectsByRank,
    "name": sortedProjectsByName,
    "date": sortedProjectsByDate,
};