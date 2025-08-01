import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import AgGridProvider from "./AgGridProvider";

type AuthProviderProps = {
  children: ReactNode;
};

export function Providers({ children }: AuthProviderProps) {
  return (
    <AuthProvider>
      <AgGridProvider>{children}</AgGridProvider>
    </AuthProvider>
  );
}
