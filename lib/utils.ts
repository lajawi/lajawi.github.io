import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateToDays(date: Date | number): number {
  if (date instanceof Date)
    return millisecondsToDays(date.getTime());
  return millisecondsToDays(date);
}

function millisecondsToDays(milliseconds: number): number {
  return milliseconds / 1000 / 60 / 60 / 24;
}
