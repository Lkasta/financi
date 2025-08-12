import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import clsx from "clsx";
import { GaugeCircle, Percent, TrendingDown, TrendingUp } from "lucide-react";
import Dices from "@public/dices.webp";
import Image from "next/image";

type Props = {
  revenue: number;
  expense: number;
  margin: number;
  average: number;
};

export function Resume({ revenue, expense, margin, average }: Props) {
  const data = [
    { title: "Entradas", value: revenue, icon: TrendingUp },
    { title: "Margem", value: margin, icon: Percent },
    { title: "Saídas", value: expense, icon: TrendingDown },
    { title: "Ticket Médio", value: average, icon: GaugeCircle },
  ];
  return (
    <Card className="col-span-full md:col-span-5 xl:col-span-7">
      <CardHeader>
        <h5 className="text-secondary-foreground">Resumo</h5>
        <CardDescription className="mr-14">
          Indicadores financeiros com base nas transações do período.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full items-center justify-center gap-4">
        <div className="w-full grid grid-cols-2 space-x-0 gap-y-4">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.title}-${i}`}
                className="flex items-cemter w-min gap-2"
              >
                <div
                  className={clsx(
                    "p-3 w-min h-min rounded shadow-md",
                    item.title == "Saídas"
                      ? "bg-red-100 text-red-500"
                      : "bg-emerald-100 text-emerald-500 "
                  )}
                >
                  <Icon size={24} />
                </div>
                <div className="my-auto">
                  <h3 className="font-medium text-nowrap text-secondary-foreground">
                    {item.title}
                  </h3>
                  <p>
                    {item.title === "Margem"
                      ? `${item.value.toFixed(2)}%`
                      : formatCurrency(item.value)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <Image src={Dices} alt="Dices Image" width={250} />
      </CardContent>
    </Card>
  );
}
