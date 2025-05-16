import { Metadata } from "next"

export type Project = {
    data: {
        name: string,
        rank: number,
        date?: Date,
        image?: string,
    },
    metadata?: Metadata,
};

export const projects: Record<string, Project> = {
    "team-tumble": {
        data: {
            name: "Team Tumble",
            rank: 10,
            date: new Date(2024, 9),
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
            date: new Date(2024, 5)
        },
        metadata: {
            title: "Pigeon",
        }
    },
    "bubble-broth": {
        data: {
            name: "Bubble Broth",
            rank: 9,
        },
        metadata: {
            title: "Bubble Broth",
        }
    }
} as const;

export const sortedProjectsAsArray = (): [string, Project][] => {
    return Object.entries(projects).sort((a, b) => b[1].data.rank - a[1].data.rank);
}

export const sortedProjects = (): Record<string, Project> => {
    const sortedArr = sortedProjectsAsArray()
    return Object.fromEntries(sortedArr);
};