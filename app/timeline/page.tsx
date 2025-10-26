import { dateToDays } from "@/lib/utils";
import { Experience, experiences } from "./experiences";

const strokeWidth = 15;
const lines: { from: number, to: number, pos: number }[] = [];

const min = experiences.map((exp) => exp.dateFrom).reduce((a, b) => Math.min(a, b));
const max = experiences.map((exp) => exp.dateTo).reduce((a, b) => Math.max(a, b));

const diff = max - min;

const width = 1000;

export default function Page() {
    lines.length = 0;

    return (
        <div className="page-width w-full">
            <svg
                viewBox={`0 ${-min - diff} ${width} ${diff}`}
            >
                <TodayIndicatorSvg />
                <YearsSvg />
                <ExperiencesSvg />
            </svg>
        </div>
    );
}

function TodayIndicatorSvg() {
    const now = -dateToDays(Date.now());

    return (
        <g>
            <line
                x1={0}
                x2={width}
                y1={now}
                y2={now}

                strokeWidth={2}
                stroke="var(--line)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={"5 15"}
            />
            <text
                className="font-mono select-none text-2xl md:text-base"
                x={0}
                y={now}
                dominantBaseline={"middle"}

                fill="var(--line)"
                strokeWidth={15}
                stroke="var(--background)"
                strokeLinejoin="round"
                paintOrder={"stroke"}
            >
                PRESENT
            </text>
        </g>
    );
}

function YearsSvg() {
    const years: number[] = [];
    for (let i = 2000; i <= 2100; i++) {
        years.push(i);
    }

    return (
        <>
            {years.map((year, i) =>
                <YearSvg year={year} key={i} />
            )}
        </>
    );
}

function YearSvg({ year }: { year: number }) {
    const yearTime = dateToDays(new Date(year, 0, 1));

    return (
        <g>
            <line
                x1={width / 2 - 50}
                x2={width / 2 + 50}
                y1={-yearTime}
                y2={-yearTime}

                strokeWidth={5}
                stroke="var(--line)"
                strokeLinecap="round" />
            <text
                x={width / 2 - 65}
                y={-yearTime}
                textAnchor="end"
                className="font-mono text-9xl align-middle fill-(--line) select-none font-thin"

                strokeWidth={15}
                stroke="var(--background)"
                strokeLinejoin="round"
                paintOrder={"stroke"}
            >
                {year}
            </text>
        </g>
    );
}

function ExperiencesSvg() {
    return (
        <>
            {experiences.map((exp, i) =>
                <ExperienceSvg experience={exp} key={i} />
            )}
        </>
    );
}

function ExperienceSvg({ experience }: { experience: Experience }) {
    return (
        <g>
            <ExperienceLineSvg experience={experience} />
            <ExperienceNameSvg experience={experience} />
        </g>
    );
}

function ExperienceLineSvg({ experience }: { experience: Experience }) {
    const filteredLines = lines.filter((line) => {
        return experience.dateFrom >= line.from && experience.dateFrom <= line.to
            || experience.dateTo <= line.to && experience.dateTo >= line.from
            || line.from >= experience.dateFrom && line.to <= experience.dateTo;
    });

    const line = filteredLines.reduce((prev, curr) => (prev && prev.pos > curr.pos) ? prev : curr, { from: 0, to: 0, pos: 0 });

    let pos = (line?.pos || 0);
    if (line.from !== 0 && line.to !== 0) pos++;

    lines.push({
        from: experience.dateFrom,
        to: experience.dateTo,
        pos: pos,
    });

    const x = width / 2 + 30 * Math.floor(pos / 2 + 0.5) * (pos % 2 == 0 ? -1 : 1);

    return (
        <line
            x1={x}
            x2={x}
            y1={(-experience.dateFrom) - strokeWidth / 2}
            y2={(-experience.dateTo) + strokeWidth / 2}

            strokeWidth={strokeWidth}
            stroke={experience.color}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    );
}

function ExperienceNameSvg({ experience }: { experience: Experience }) {
    return (
        <g
            transform={`translate(${width / 2 + 65}, ${-(experience.dateTo - ((experience.dateTo - experience.dateFrom) / 2))})`}
        >
            <line
                className="stroke-2 md:stroke-1 md:translate-y-2.5"
                x2={150}
                y1={-50}
                y2={-50}

                strokeWidth={1}
                stroke={experience.color}
                strokeLinecap="butt"
            />
            <text
                className="fill-(--foreground) text-4xl md:text-3xl"
                alignmentBaseline="middle"

                strokeWidth={15}
                stroke="var(--background)"
                strokeLinejoin="round"
                paintOrder={"stroke"}
            >
                {experience.name}
            </text>
            {experience.desc &&
                <text
                    className="fill-(--foreground) text-3xl md:text-xl md:-translate-y-5"
                    y={50}

                    strokeWidth={15}
                    stroke="var(--background)"
                    strokeLinejoin="round"
                    paintOrder={"stroke"}
                >
                    {experience.desc}
                </text>
            }
        </g>
    );
}
