import { dateToDays } from "@/lib/utils";

type ExperiencePrivate = {
    name: string,
    desc?: string,
    dateFrom: Date,
    dateTo: Date,
    color: string,
}

type Experience = {
    name: string,
    desc?: string,
    dateFrom: number,
    dateTo: number,
    color: string,
}

const experiencesPrivate: ExperiencePrivate[] = [
    {
        name: "LUCA School of Arts",
        desc: "Game Design Master",
        dateFrom: new Date(2025, 8, 22),
        dateTo: new Date(2026, 5, 30),
        color: "var(--logo-yellow)",
    },
    {
        name: "LUCA School of Arts",
        desc: "Game Design Bachelor",
        dateFrom: new Date(2022, 8, 19),
        dateTo: new Date(2025, 5, 30),
        color: "var(--logo-yellow)",
    },
    {
        name: "Pikoh",
        desc: "Woord Kunst Drama",
        dateFrom: new Date(2017, 8, 1),
        dateTo: new Date(2022, 6, 30),
        color: "var(--logo-red)",
    },
    {
        name: "AlterEyes",
        desc: "Internship",
        dateFrom: new Date(2025, 6, 1),
        dateTo: new Date(2025, 8, 22),
        color: "var(--logo-blue)",
    },
    {
        name: "Middenschool Hasselt",
        desc: "Artistieke Opleiding",
        dateFrom: new Date(2016, 8, 1),
        dateTo: new Date(2017, 5, 30),
        color: "var(--logo-red)",
    },
    {
        name: "Exchange to ZHdK",
        desc: "Game Design",
        dateFrom: new Date(2024, 8, 10),
        dateTo: new Date(2025, 0, 30),
        color: "var(--logo-red)"
    },
];

export const experiences: Experience[] = experiencesPrivate.map((exp) => {
    return {
        name: exp.name,
        desc: exp.desc,
        dateFrom: dateToDays(exp.dateFrom),
        dateTo: dateToDays(exp.dateTo),
        color: exp.color,
    };
});

export const experiencesSorted = [...experiences].sort((a, b) => a.dateFrom - b.dateFrom);
