import { dateToDays } from "@/lib/utils";
import { experiences } from "./experiences";

export default function Page() {
    const strokeWidth = 15;

    const min = experiences.map((exp) => exp.dateFrom).reduce((a, b) => Math.min(a, b));
    const max = experiences.map((exp) => exp.dateTo).reduce((a, b) => Math.max(a, b));

    const diff = max - min;

    const years: number[] = [];
    for (var i = 2000; i <= 2100; i++) {
        years.push(i);
    }

    const lines: { from: number, to: number, pos: number }[] = [];

    return (
        <div>
            <svg
                width={500}
                height={diff}
                viewBox={`0 ${-min - diff} 10 ${diff}`}
            >
                {years.map((year) => {
                    const yearTime = dateToDays(new Date(year, 0, 1));

                    return (
                        <g
                            key={year}
                        >
                            <line
                                x1={-50}
                                x2={50}
                                y1={-yearTime}
                                y2={-yearTime}

                                strokeWidth={5}
                                stroke="var(--line)"
                                strokeLinecap="round"
                            />
                            <text
                                x={65}
                                y={-yearTime}
                                className="font-mono text-2xl align-middle fill-(--line) select-none"
                            >
                                {year}
                            </text>
                        </g>
                    );
                }
                )}

                {experiences.map((exp) => {
                    const filteredLines = lines.filter((line) => {
                        return exp.dateFrom >= line.from && exp.dateFrom <= line.to || exp.dateTo <= line.to && exp.dateTo >= line.from || line.from >= exp.dateFrom && line.to <= exp.dateTo;
                    });

                    const line = filteredLines.reduce((prev, curr) => (prev && prev.pos > curr.pos) ? prev : curr, { from: 0, to: 0, pos: 0 });

                    let pos = (line?.pos || 0);
                    if (line.from !== 0 && line.to !== 0) pos++;

                    lines.push({
                        from: exp.dateFrom,
                        to: exp.dateTo,
                        pos: pos,
                    });

                    const x = 30 * Math.floor(pos / 2 + 0.5) * (pos % 2 == 0 ? -1 : 1);

                    return (
                        <line
                            key={exp.name}

                            x1={x}
                            x2={x}
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