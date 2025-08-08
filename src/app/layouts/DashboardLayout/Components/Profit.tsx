import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

import Image from "next/image";
import Rocket from "@public/Rocket.webp";

import { Emoji, EmojiProvider } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import { useAuth } from "@/app/Context/AuthProvider";

export function Profit({ totalProfit }: { totalProfit: number }) {
  const auth = useAuth();

  return (
    <Card className="col-span-full md:col-span-4 xl:col-span-3 h-full">
      <CardHeader>
        <div className="flex items-center gap-x-2 !my-0">
          <h5 className="text-secondary-foreground">Olá {auth.user}</h5>
          <EmojiProvider data={emojiData}>
            <Emoji className="w-4 h-4" name="rocket" />
          </EmojiProvider>
        </div>
        <CardDescription className="mr-14">
          Veja abaixo o total de lucro acumulado durante o período selecionado.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-8 mt-auto">
        <div className="flex-1 mt-auto">
          <p className="text-sm text-muted-foreground font-medium">
            Lucro total
          </p>
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold text-emerald-500">
            {formatCurrency(totalProfit)}
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
  );
}
