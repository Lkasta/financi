"use client";
import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz, ColDef } from "ag-grid-community";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import transactions from "@/data/transactions.json";

export type Transaction = {
  date: number;
  amount: string;
  transaction_type: string;
  currency: string;
  account: string;
  industry: string;
  state: string;
};

export default function Transactions() {
  const [dados, setDados] = useState<Transaction[]>([
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

  const [colDefs] = useState<ColDef<Transaction>[]>([
    {
      field: "date",
      headerName: "Data",
      flex: 1,
      valueFormatter: (e) =>
        e.value && format(e.value, "dd 'de' MMM 'de' yyyy", { locale: ptBR }),
    },
    { field: "amount", headerName: "Valor", flex: 1 },
    { field: "transaction_type", headerName: "Tipo de Transação", flex: 1 },
    { field: "currency", headerName: "Moeda", flex: 1 },
    { field: "account", headerName: "Conta", flex: 1 },
    { field: "industry", headerName: "Empresa", flex: 1 },
    { field: "state", headerName: "Estado", flex: 1 },
  ]);

  useEffect(() => {
    setDados(transactions as Transaction[]);
  }, []);

  return (
    <div className="container mx-auto w-full min-h-screen px-4">
      <div className="w-full h-[750px] rounded-xl shadow-md">
        <AgGridReact
          rowHeight={44}
          headerHeight={48}
          rowData={dados}
          theme={themeQuartz}
          columnDefs={colDefs}
          className="rounded-t-xl"
        />
      </div>
    </div>
  );
}
