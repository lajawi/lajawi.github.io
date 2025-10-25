import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateToDays(date: Date): number {
  return date.getTime() / 1000 / 60 / 60 / 24;
}
