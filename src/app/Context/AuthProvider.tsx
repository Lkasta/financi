"use client";

import React, { createContext, ReactNode, useState, useEffect } from "react";

type AuthContextType = {
  user: string | null;
  token: string | null;
  login: (user: string, token: string) => void;
  logout: () => void;
};

const Context = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (user: string, token: string) => {
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  // // Opcional: no carregamento, tentar recuperar token do cookie/localStorage
  // useEffect(() => {
  //   // ex: recuperar token do cookie e validar
  // }, []);

  return (
    <Context.Provider value={{ user, token, login, logout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
