import { Metadata } from "next"

export type Project = {
    data: {
        name: string,
        rank: number,
        date?: {
            date: Date,
            detail: DateDetail,
        },
        image?: boolean,
    },
    metadata?: Metadata,
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
            date: { date: new Date(2024, 9), detail: DateDetail.Month },
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
            image: true,
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