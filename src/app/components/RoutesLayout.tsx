"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { publicRoutes } from "@/data/routes";

type Props = {
  children: ReactNode;
};

export default function RoutesLayout({ children }: Props) {
  const pathname = usePathname();
  const isPublic = publicRoutes.includes(pathname);

  if (isPublic) {
    return <>{children}</>;
  }

  return <div className="mt-[82px]">{children}</div>;
}
