import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";

type AuthProviderProps = {
  children: ReactNode;
};

export function Providers({ children }: AuthProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
