import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateCode() {
  const numbers = new Set();

  while (numbers.size < 9) {
    const num = Math.floor(Math.random() * 9) + 1;
    numbers.add(num);
  }

  return Array.from(numbers).join("");
}
