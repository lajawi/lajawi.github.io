import { Metadata } from "next"

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
            detail: DateDetail,
        },
        image?: boolean,
    },
    metadata: Metadata,
};

export enum DateDetail {
    Year,
    Month,
    Day,
}

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
            description: "Swiftly move through increasingly difficult caves, and save as many minions as you can."
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

            With every choice you make, you may or may not be disrespecting human rights.`
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
        }
    },
} as const;

export const sortedProjectsAsArray = (): [string, Project][] => {
    return Object.entries(projects).sort((a, b) => b[1].data.rank - a[1].data.rank);
}

type ProjectArray = ({ id: string } & Project)[];

const projectsAsObject = (): ProjectArray => {
    return Object.entries(projects).map(([k, v]) => ({
        id: k,
        ...v,
    }));
};

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