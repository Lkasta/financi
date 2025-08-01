import { Inter, Fira_Code } from "next/font/google";
import { Providers } from "./Context/providers";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/Navbar/Navbar";
import type { Metadata } from "next";

import "./globals.css";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "financi",
  description:
    "Dashboard financeiro com login, filtros dinâmicos e visualização de transações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-gray-50`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
