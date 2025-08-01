"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { useAuth } from "./Context/AuthProvider";

import Rocket from "../../public/Rocket.webp";
import emojiData from "react-apple-emojis/src/data.json";

import { useEffect, useState } from "react";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import { Transaction, initialValues } from "./transactions/page";

import transactions from "@/data/transactions.json";

import Image from "next/image";
import { Repeat, TrendingDown, TrendingUp, Users } from "lucide-react";

type transactionTypes = "withdraw" | "deposit";

type Props = {
  withdraw: number;
  deposit: number;
  total: number;
  companies: string[];
};

export default function Home() {
  const auth = useAuth();
  const [dados, setDados] = useState<Transaction[]>([initialValues]);

  useEffect(() => {
    setDados(transactions as Transaction[]);
  }, []);

  const wallet = dados.reduce(
    (acc, data) => {
      // Transacoes
      const transactionType = data.transaction_type as transactionTypes;
      if (!acc[transactionType]) {
        acc[transactionType] = 0;
      }
      acc[transactionType] += Number(data.amount);

      acc.total += 1;

      // Clientes
      const industry = data.account as string;
      if (!acc.companies.includes(industry)) {
        acc.companies.push(industry);
      }

      return acc;
    },
    {
      withdraw: 0,
      deposit: 0,
      total: 0,
      companies: [""],
    } as Props
  );

  return (
    <section className="container grid grid-cols-9 gap-4 mx-auto w-full items-stretch pt-14 px-4">
      <Card className="col-span-full md:col-span-4 xl:col-span-3 h-full">
        <CardHeader>
          <div className="flex items-center gap-x-2 !my-0">
            <h5 className="text-secondary-foreground">Olá {auth.user}</h5>
            <EmojiProvider data={emojiData}>
              <Emoji className="w-4 h-4" name="rocket" />
            </EmojiProvider>
          </div>
          <CardDescription className="mr-14">
            Vamos analisar sua receita total ao longo de todo tempo informado.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-8 mt-auto">
          <div className="flex-1 mt-auto">
            <p className="text-sm text-muted-foreground font-medium">
              Receita total
            </p>
            <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-emerald-500">
              {formatCurrency(wallet.deposit - wallet.withdraw)}
            </h1>
          </div>
          <div className="flex-shrink-0 -mt-10 -ml-2 select-none pointer-events-none">
            <Image
              src={Rocket}
              width={90}
              height={5}
              alt="Rocket"
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-full md:col-span-5 xl:col-span-6">
        <CardHeader>
          <h5 className="text-secondary-foreground">Resumo</h5>
          <CardDescription className="mr-14">
            Valor total gasto no período selecionado
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-20">
          <div className="flex flex-col space-y-4">
            <div className="flex items-cemter gap-2">
              <div className="p-3 w-min rounded bg-emerald-100 text-emerald-500 shadow-md">
                <TrendingUp size={24} />
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-secondary-foreground">
                  Entradas
                </h3>
                <p>{formatCurrency(wallet.deposit)}</p>
              </div>
            </div>
            <div className="flex items-cemter gap-2">
              <div className="p-3 w-min rounded bg-rose-100 text-rose-500 shadow-md">
                <TrendingDown size={24} />
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-secondary-foreground">
                  Saídas
                </h3>
                <p>{formatCurrency(wallet.withdraw)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-cemter gap-2">
              <div className="p-3 w-min rounded bg-blue-100 text-blue-500 shadow-md">
                <Users size={24} />
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-secondary-foreground">
                  Clientes
                </h3>
                <p>{formatNumber(wallet.companies.length)}</p>
              </div>
            </div>
            <div className="flex items-cemter gap-2">
              <div className="p-3 w-min rounded bg-violet-100 text-violet-500 shadow-md">
                <Repeat size={24} />
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-secondary-foreground">
                  Transações
                </h3>
                <p>{formatNumber(wallet.total)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
