import { dateToDays } from "@/lib/utils";

export type Experience = {
    name: string,
    dateFrom: Date,
    dateTo: Date,
    color: string,
}

const experiencesPrivate: Experience[] = [
    {
        name: "LUCA School of Arts, Game Design MA",
        dateFrom: new Date(2025, 8, 22),
        dateTo: new Date(2026, 5, 30),
        color: "var(--logo-yellow)",
    },
    {
        name: "LUCA School of Arts, Game Design BA",
        dateFrom: new Date(2022, 8, 19),
        dateTo: new Date(2025, 5, 30),
        color: "var(--logo-yellow)",
    },
    {
        name: "Pikoh, Woord Kunst Drama",
        dateFrom: new Date(2017, 8, 1),
        dateTo: new Date(2022, 6, 30),
        color: "var(--logo-red)",
    },
    {
        name: "AlterEyes Internship",
        dateFrom: new Date(2025, 6, 1),
        dateTo: new Date(2025, 8, 22),
        color: "var(--logo-blue)",
    },
    {
        name: "Middenschool Hasselt, Artistieke Opleiding",
        dateFrom: new Date(2016, 8, 1),
        dateTo: new Date(2017, 5, 30),
        color: "var(--logo-red)",
    },
    {
        name: "Exchange to ZHdK, Game Design",
        dateFrom: new Date(2024, 8, 10),
        dateTo: new Date(2025, 0, 30),
        color: "var(--logo-red)"
    },
];

export const experiences: { name: string, dateFrom: number, dateTo: number, color: string }[] = experiencesPrivate.map((exp) => {
    return {
        name: exp.name,
        dateFrom: dateToDays(exp.dateFrom),
        dateTo: dateToDays(exp.dateTo),
        color: exp.color,
    };
});

export const experiencesSorted = [...experiences].sort((a, b) => a.dateFrom - b.dateFrom);
