import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Register() {
  return (
    <div className="grid grid-cols-2 w-full min-h-screen">
      <div className="w-full h-full bg-emerald-600" />
      <div className="max-w-96 w-full text-center m-auto space-y-8">
        <p className="text-5xl text-primary font-bold">
          financ<span className="text-emerald-600">i</span>
        </p>

        <div className="space-y-3">
          <div className="text-left">
            <h1 className="text-xl font-semibold">Registro de usuário</h1>
            <p className="text-sm text-muted-foreground">
              Informe o seu nome para fazer um registro temporário!
            </p>
          </div>

          <div className="space-y-1 text-left">
            <Label>Nome</Label>
            <Input placeholder="Ex: Jonas Alves" />
          </div>

          <div className="flex justify-between text-sm text-muted-foreground font-semibold">
            <Link href="/login" className="hover:underline text-emerald-600">
              Já tenho um acesso
            </Link>
            <Link href="#" className="hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          <Button className="w-full bg-emerald-600 hover:bg-emerald-600">
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
