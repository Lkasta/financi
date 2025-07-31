"use client";

import { Loader } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type AuthContextType = {
  user: string | null;
  token: string | null;
  login: (user: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

const publicRoutes = ["/login", "/register"];

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Começa como true
  const pathname = usePathname();
  const router = useRouter();

  const isAuthenticated = user && token;
  const isPublic = publicRoutes.includes(pathname);

  const login = (user: string, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("auth", JSON.stringify({ user, token }));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth");
    router.push("/login");
  };

  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (stored) {
      try {
        const { user, token } = JSON.parse(stored);
        setUser(user);
        setToken(token);
      } catch (error) {
        console.error("Erro ao fazer parse do auth:", error);
        localStorage.removeItem("auth");
      }
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated && !isPublic) {
      router.replace("/login");
    } else if (isAuthenticated && isPublic) {
      router.replace("/");
    }
  }, [user, token, pathname, router, loading, isAuthenticated, isPublic]);

  if (!isAuthenticated && !isPublic || loading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="m-auto">
          <Loader className="animate-spin w-6 h-6" />
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
