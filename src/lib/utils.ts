import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fusionne des classes Tailwind conditionnelles.
 * twMerge élimine les conflits (ex: deux `p-4` garder le dernier).
 * clsx gère les conditions, tableaux, etc.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
