"use client";

import { ReactNode } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

if (typeof window !== "undefined") {
  ModuleRegistry.registerModules([AllCommunityModule]);
}

type AgGridProviderProps = {
  children: ReactNode;
};

export default function AgGridProvider({ children }: AgGridProviderProps) {
  return <>{children}</>;
}
