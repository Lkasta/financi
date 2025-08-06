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

export function formatCurrency(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatNumber(valor: number): string {
  return valor.toLocaleString("pt-BR");
}

export function formatAbbreviatedNumber(value: number): string {
  const absValue = Math.abs(value);

  if (absValue >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  }

  if (absValue >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  if (absValue >= 1_000) {
    return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  }

  return value.toString();
}
