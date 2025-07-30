"use client";

import React, { createContext, ReactNode } from "react";

const Context = createContext([]);

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  return <Context.Provider value={[]}>{children}</Context.Provider>;
}

export { Context, AuthProvider };
