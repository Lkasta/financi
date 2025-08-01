import { ArrowUpDown, Home } from "lucide-react";

export const publicRoutes = ["/login", "/register"];

export const routes = [
  { name: "Início", path: "/", icon: Home },
  { name: "Transações", path: "/transactions", icon: ArrowUpDown },
];
