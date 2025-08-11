import { useEffect, useState } from "react";
import { Resume } from "./Components/Resume";
import { Profit } from "./Components/Profit";

import transactions from "@/data/transactions.json";
import { Transaction } from "@/app/transactions/page";
import {
  FinancialStates,
  FinancialStatesProps,
} from "./Components/FinancialStates";

type Props = {
  revenue: number;
  expense: number;
  customers: string[];
  states: FinancialStatesProps[];
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

      return acc;
    },
    { revenue: 0, expense: 0, customers: [], states: [] } as Props
  );

  const totalProfit = dashboard.revenue - dashboard.expense;
  const margin = (totalProfit / dashboard.revenue) * 100;
  const average = dashboard.revenue / transactionsData.length;
  console.log(dashboard.states);

  return (
    <section className="container grid grid-cols-9 gap-4 mx-auto w-full items-stretch pt-14 px-4">
      <Profit totalProfit={totalProfit} />
      <Resume
        revenue={dashboard.revenue}
        expense={dashboard.expense}
        margin={margin}
        average={average}
      />
      <FinancialStates states={dashboard.states} />
    </section>
  );
}
