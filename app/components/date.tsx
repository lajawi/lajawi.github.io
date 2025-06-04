import { DateDetail } from "../projects/projects";

export default function DateDisplay({ className, date, detail }: { className?: string, date: Date | undefined, detail: DateDetail | undefined }) {
    return (
        <>
            {
                date && detail !== undefined &&
                <p className={className}>{
                    detail >= DateDetail.Year && `${date.getFullYear()}`
                }{
                    detail >= DateDetail.Month && <><span className="text-(--muted) px-1">/</span>{String(date.getMonth()).padStart(2, "0")}</>
                }{
                    detail >= DateDetail.Day && <><span className="text-(--muted) px-1">/</span>{String(date.getDate()).padStart(2, "0")}</>
                }</p>
            }
        </>
    );
}