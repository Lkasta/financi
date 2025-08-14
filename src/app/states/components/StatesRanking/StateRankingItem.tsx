import { Progress } from "@/components/ui/progress";
import { AcronymStates, getStateData } from "@/lib/states";
import { formatCurrency, formatNumber } from "@/lib/utils";
import clsx from "clsx";
import StateFLag from "./StateFLag";

type StateRankingItemProps = {
  balance: number;
  state: AcronymStates;
  percentage: number;
};

export function StateRankingItem({
  balance,
  state,
  percentage,
}: StateRankingItemProps) {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <StateFLag state={state} path={getStateData(state).flag} />
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex justify-between">
          <h1 className="text-secondary-foreground">
            {getStateData(state).name}
          </h1>

          <span className="text-sm text-muted-foreground mt-auto">
            {formatNumber(percentage, 0)}%
          </span>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <span
            className={clsx(
              "text-sm text-muted-foreground mt-auto text-nowrap col-span-2",
              balance < 0 && "text-rose-400"
            )}
          >
            {formatCurrency(balance)}
          </span>
          <Progress
            className="col-span-4"
            colorBar={balance < 0 ? "bg-rose-400" : "bg-emerald-500"}
            value={percentage > 1 ? percentage : 1}
          />
        </div>
      </div>
    </div>
  );
}
