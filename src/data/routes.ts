import { ArrowUpDown, Home, Map } from "lucide-react";

export const publicRoutes = ["/login", "/register"];

export const routes = [
  { name: "Início", path: "/", icon: Home },
  { name: "Estados", path: "/states", icon: Map },
  { name: "Transações", path: "/transactions", icon: ArrowUpDown },
];
