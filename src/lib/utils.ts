import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type CarouselCard = {ref: string, title: string, description: string}

export type Project = {title: string; href: string; description: string};