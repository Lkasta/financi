import { useEffect, useState } from "react";
import { Resume } from "./Components/Resume";
import { Profit } from "./Components/Profit";

import transactions from "@/data/transactions.json";
import { Transaction } from "@/app/transactions/page";
import {
  FinancialStates,
  FinancialStatesProps,
} from "./Components/FinancialStates";
import { FinancialRadar } from "./Components/FinancialRadar";
import { TotalClients } from "./Components/TotalClients";
import { TotalTransactions } from "./Components/TotalTransactions";
import { format } from "date-fns";
import { MonthlyBalance } from "./Components/MonthlyBalance";

type MonthlyBalance = {
  month: string;
  value: number;
};

type Props = {
  revenue: number;
  expense: number;
  customers: string[];
  states: FinancialStatesProps[];
  totalTransactions: number;
  trendRatio: number;
  monthlyBalances: MonthlyBalance[];
};

export default function Dashboard() {
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([
    {
      date: 0,
      amount: "",
      transaction_type: "",
      currency: "",
      account: "",
      industry: "",
      state: "",
    },
  ]);

  useEffect(() => {
    setTransactionsData(transactions as Transaction[]);
  }, []);

  const dashboard = transactionsData.reduce(
    (acc, data) => {
      // Resume
      const transactionType = data.transaction_type;
      const transactionValue = Number(data.amount);

      if (transactionType === "deposit") {
        acc.revenue += transactionValue;
      } else {
        acc.expense += transactionValue;
      }

      // Customers
      const customer = data.account;
      if (!acc.customers.includes(customer)) {
        acc.customers.push(customer);
      }

      // States
      const state = acc.states.find((item) => item.state == data.state);
      if (state?.state) {
        if (transactionType === "deposit") {
          state.revenue += transactionValue;
        } else {
          state.expense += transactionValue;
        }
      } else {
        const newState = {
          state: data.state,
          revenue: 0,
          expense: 0,
        };
        acc.states.push(newState);
      }

      // Total de transações
      acc.totalTransactions += 1;

      // Indicador de tendência (proporção entradas vs saídas)
      acc.trendRatio = acc.expense > 0 ? acc.revenue / acc.expense : 0;

      // Média de saldo por mês
      const monthKey = format(data.date, "MM");
      const monthItem = acc.monthlyBalances.find((m) => m.month === monthKey);

      if (monthItem) {
        monthItem.value +=
          transactionType === "deposit" ? transactionValue : -transactionValue;
      } else {
        acc.monthlyBalances.push({
          month: monthKey,
          value:
            transactionType === "deposit"
              ? transactionValue
              : -transactionValue,
        });
      }

      return acc;
    },
    {
      revenue: 0,
      expense: 0,
      customers: [],
      states: [],
      totalTransactions: 0,
      trendRatio: 0,
      monthlyBalances: [],
    } as Props
  );

  const totalProfit = dashboard.revenue - dashboard.expense;
  const margin = (totalProfit / dashboard.revenue) * 100;
  const average = dashboard.revenue / transactionsData.length;

  console.log(dashboard.monthlyBalances);

  return (
    <section className="container grid grid-cols-10 pt-8 auto-rows-min gap-4 grid-rows-[auto_1fr] mx-auto w-full items-stretch px-4">
      <Profit totalProfit={totalProfit} />
      <Resume
        revenue={dashboard.revenue}
        expense={dashboard.expense}
        margin={margin}
        average={average}
      />
      <FinancialStates states={dashboard.states} />
      <FinancialRadar revenue={dashboard.revenue} expense={dashboard.expense} />
      <div className="col-span-4 h-full flex flex-col gap-4">
        <div className="w-full h-min flex gap-4">
          <TotalClients totalClients={dashboard.customers.length} />
          <TotalTransactions totalClients={dashboard.totalTransactions} />
        </div>
        <MonthlyBalance monthlyBalances={dashboard.monthlyBalances} />
      </div>
    </section>
  );
}
