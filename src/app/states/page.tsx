"use client";
import transactions from "@/data/transactions.json";
import { Transaction } from "../transactions/page";
import { useEffect, useState } from "react";
import { StatesRanking } from "./components/StatesRanking/StatesRanking";
import { AcronymStates, getStateData } from "@/lib/states";
import StatesUSA from "./components/StatesUSA";
import { MonthlyStates } from "./components/MonthlyStates";

export type StatesProps = {
  id: number;
  state: AcronymStates;
  revenueTotal: number;
  expenseTotal: number;
};

export type StatesDataProps = {
  totalBalance: number;
  states: StatesProps[];
  data: { id: string; value: number }[];
};

export default function States() {
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

  const statesData = transactionsData.reduce(
    (acc, data) => {
      const transactionType = data.transaction_type;
      const transactionValue = Number(data.amount);

      if (transactionType === "deposit") {
        acc.totalBalance += transactionValue;
      } else {
        acc.totalBalance -= transactionValue;
      }

      const state = acc.states.find((item) => item.state == data.state);
      if (state?.state) {
        if (transactionType === "deposit") {
          state.revenueTotal += transactionValue;
        } else {
          state.expenseTotal += transactionValue;
        }
      } else {
        const newState = {
          id: getStateData(data.state as AcronymStates).id,
          state: data.state as AcronymStates,
          revenueTotal: 0,
          expenseTotal: 0,
        };
        acc.states.push(newState);
      }

      return acc;
    },
    { totalBalance: 0, states: [], data: [] } as StatesDataProps
  );

  const totalBalance = statesData.states
    .map((s) => s.revenueTotal - s.expenseTotal)
    .filter((b) => b > 0)
    .reduce((acc, b) => acc + b, 0);

  return (
    <div className="flex w-full items-center justify-center pt-8">
      <div className="container grid grid-cols-2 grid-rows-2 h-[calc(100vh-140px)] gap-4 px-4">
        <StatesRanking states={statesData.states} totalBalance={totalBalance} />
        <StatesUSA data={statesData.states} />
        <MonthlyStates states={statesData.states} />
      </div>
    </div>
  );
}
