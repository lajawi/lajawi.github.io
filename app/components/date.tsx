import { DateDetail } from "../projects/projects";

export default function DateDisplay({ className, date, detail }: { className?: string, date: Date | undefined, detail: DateDetail | undefined }) {
    return (
        <>
            {
                date && detail &&
                <p className={className}>{
                    detail >= DateDetail.Year && `${date.getFullYear()}`
                }{
                    detail >= DateDetail.Month && `.${date.getMonth()}`
                }{
                    detail >= DateDetail.Day && `.${date.getDate()}`
                }</p>
            }
        </>
    );
}