import { useEffect, useState } from "react";
import { Resume } from "./Components/Resume";
import { Profit } from "./Components/Profit";

import transactions from "@/data/transactions.json";
import { Transaction } from "@/app/transactions/page";

type Props = {
  revenue: number;
  expense: number;
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
      const transactionType = data.transaction_type;
      const transactionValue = Number(data.amount);

      if (transactionType === "deposit") {
        acc.revenue += transactionValue;
      } else {
        acc.expense += transactionValue;
      }

      return acc;
    },
    { revenue: 0, expense: 0 } as Props
  );

  const totalProfit = dashboard.revenue - dashboard.expense;
  console.log(totalProfit, dashboard.revenue);
  const margin = (totalProfit / dashboard.revenue) * 100;

  return (
    <section className="container grid grid-cols-9 gap-4 mx-auto w-full items-stretch pt-14 px-4">
      <Profit totalProfit={totalProfit} />
      <Resume
        revenue={dashboard.revenue}
        expense={dashboard.expense}
        margin={margin}
        average={99}
      />
    </section>
  );
}
