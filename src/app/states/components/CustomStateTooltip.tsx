import { getStateData, AcronymStates } from "@/lib/states";
import { formatCurrency } from "@/lib/utils";
import { TooltipProps } from "recharts";
import StateFlag from "./StatesRanking/StateFLag";

type CustomTooltipProps = TooltipProps<number, string>;

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;

  const stateInfo = getStateData(label as AcronymStates);

  return (
    <div className="flex flex-col gap-1 bg-white p-2 rounded shadow border">
      <div className="flex items-center gap-1">
        <StateFlag width="w-5" path={stateInfo.flag} state={stateInfo.name} />
        <p className="font-bold text-md">{stateInfo.name}</p>
      </div>
      <div className="">
        {payload.map((entry, index) => (
          <p className="w-full flex justify-between" key={index}>
            <span className="mr-2 font-bold">{entry.name}:</span>
            <span>{formatCurrency(Number(entry.value))}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CustomTooltip;
