import { dateToDays } from "@/lib/utils";
import { experiences } from "./experiences";

export default function Page() {
    const strokeWidth = 25;

    const min = experiences.map((exp) => exp.dateFrom).reduce((a, b) => Math.min(a, b));
    const max = experiences.map((exp) => exp.dateTo).reduce((a, b) => Math.max(a, b));

    const diff = max - min;

    const years: number[] = [];
    for (var i = 2000; i <= 2100; i++) {
        years.push(i);
    }

    const yearDates: Date[] = years.map((year) => new Date(year, 0, 1));
    const yearTimes: number[] = yearDates.map((date) => dateToDays(date));

    return (
        <div>
            <svg
                width={500}
                height={diff / 2}
                viewBox={`0 ${-min - diff} 10 ${diff}`}
            >
                {yearTimes.map((year) =>
                    <line
                        key={year}
                        x1={-100}
                        x2={100}
                        y1={-year}
                        y2={-year}

                        strokeWidth={10}
                        stroke="var(--line)"
                        strokeLinecap="round"
                    />
                )}

                {experiences.map((exp) => {
                    // const future = exp

                    return (
                        <line
                            key={exp.name}

                            x1={5}
                            x2={5}
                            y1={(-exp.dateFrom) - strokeWidth / 2}
                            y2={(-exp.dateTo) + strokeWidth / 2}

                            strokeWidth={strokeWidth}
                            stroke={exp.color}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    );
                })}
            </svg>
        </div>
    );
}