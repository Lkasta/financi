"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  setName: (value: string) => void;
  name: string;
  expireTime: string;
  code: string;
}

export function CodeDialog({
  open = false,
  name,
  code,
  expireTime,
  setOpen,
  setName,
}: Props) {
  async function handleCopy() {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      toast.success(`O código ${code} foi copiado com sucesso`);
    } catch (err) {
      console.error("Falha ao copiar o código:", err);
    }
  }
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(false);
        setName("");
      }}
    >
      <DialogContent className="sm:max-w-[425px]" showCloseButton>
        <DialogHeader>
          <DialogTitle>Registro Concluído</DialogTitle>
          <DialogDescription>
            Parabéns <span className="font-medium">{name}</span>, seu acesso de{" "}
            {expireTime} foi liberado!
          </DialogDescription>
        </DialogHeader>
        <div className="mx-auto">
          <InputOTP value={code} maxLength={9} readOnly>
            <InputOTPGroup>
              {Array.from({ length: code.length }).map((_, i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <DialogFooter>
          {code && (
            <Button
              onClick={() => {
                handleCopy();
                redirect("/login");
              }}
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-600 hover:text-white"
            >
              Copiar chave de acesso
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
