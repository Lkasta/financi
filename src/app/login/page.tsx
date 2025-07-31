"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

import Link from "next/link";
import { useAuth } from "../Context/AuthProvider";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function Login() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
    });

    const data = await res.json();

    if (res.ok && data.token) {
      login(name, data.token);
      redirect("/");
    } else {
      toast.error(data.error || "Erro ao fazer login");
    }
  }

  return (
    <div className="grid grid-cols-2 w-full min-h-screen">
      <form
        onSubmit={handleLogin}
        className="max-w-96 w-full text-center m-auto space-y-8"
      >
        <p className="text-5xl text-primary font-bold">
          financ<span className="text-emerald-600">i</span>
        </p>

        <div className="space-y-3">
          <div className="space-y-1 text-left">
            <Label>Nome</Label>
            <Input
              placeholder="Ex: Jonas Alves"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-1 text-left">
            <Label>Senha</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••••••"
                className="pr-10 placeholder:text-zinc-400 tracking-widest"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                variant="ghost"
                className="flex items-center inset-y-0 right-2 absolute !bg-transparent !p-1 !ring-0 text-primary/50 hover:text-primary/30"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </Button>
            </div>
          </div>

          <div className="flex justify-between text-sm text-muted-foreground font-semibold">
            <Link href="/register" className="hover:underline text-emerald-600">
              Cadastre-se
            </Link>
            <Link href="#" className="hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-600"
          >
            Entrar
          </Button>
        </div>
      </form>

      <div className="w-full h-full bg-emerald-600" />
    </div>
  );
}
