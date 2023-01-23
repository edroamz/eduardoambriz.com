import { twMerge } from 'tailwind-merge';
import { ClassValue, clsx } from 'clsx';

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
