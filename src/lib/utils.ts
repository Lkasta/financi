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

export function handleDivision(numerator: number, denominator: number) {
  if (!denominator || isNaN(denominator)) return 0;
  return numerator / denominator;
}

export function handlePercentage(part: number, total: number, minValue = 0) {
  return Math.max(handleDivision(part, total) * 100, minValue);
}

export function formatCurrency(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatNumber(valor: number, toFixed?: number) {
  if (typeof toFixed === "number") {
    return valor.toLocaleString("pt-BR", {
      minimumFractionDigits: toFixed,
      maximumFractionDigits: toFixed,
    });
  }
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
