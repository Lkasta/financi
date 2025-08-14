import { useState } from "react";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StatesProps } from "../page";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface GeographyProperties {
  name: string;
}

interface GeographyFeature {
  id: string;
  rsmKey: string;
  properties: GeographyProperties;
  type: string;
}

interface StatesUSAProps {
  data: StatesProps[];
}

export default function StatesUSA({ data }: StatesUSAProps) {
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    content: string;
    x: number;
    y: number;
  }>({
    show: false,
    content: "",
    x: 0,
    y: 0,
  });

  const values = data.map((d) => d.revenueTotal - d.expenseTotal);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  const colorScale = scaleLinear<string>()
    .domain([minValue, minValue / 2, 0, maxValue / 2, maxValue])
    .range(["#ef4444", "#ef4444", "#e7e5e4", "#6ee7b7", "#10b981"]);

  const handleMouseEnter = (
    event: React.MouseEvent,
    geo: GeographyFeature,
    stateData?: StatesProps
  ) => {
    setTooltip({
      show: true,
      content: `${geo.properties.name}: ${
        stateData
          ? (stateData.revenueTotal - stateData.expenseTotal).toLocaleString(
              "pt-BR"
            )
          : "0"
      }`,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, content: "", x: 0, y: 0 });
  };

  return (
    <Card className="col-span-1">
      <CardHeader className="">
        <h5 className="text-secondary-foreground">Estados Líderes</h5>
      </CardHeader>

      <CardContent className="h-[300px] flex w-full items-center justify-center relative">
        <ComposableMap
          projection="geoAlbersUsa"
          className="w-full h-full absolute"
          style={{ maxWidth: "100%", height: "130%" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo: GeographyFeature) => {
                const stateData = data.find((d) => d.id === Number(geo.id));
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      stateData
                        ? colorScale(
                            stateData.revenueTotal - stateData.expenseTotal
                          )
                        : "#e7e5e4"
                    }
                    stroke="#ffffff"
                    strokeWidth={0.8}
                    onMouseEnter={(event) =>
                      handleMouseEnter(event, geo, stateData)
                    }
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        outline: "none",
                        transition: "fill 0.2s ease-in-out",
                      },
                      hover: {
                        outline: "none",
                        cursor: "default",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {tooltip.show && (
          <div
            className="fixed z-50 px-3 py-2 text-sm bg-gray-900 text-white rounded-lg shadow-lg pointer-events-none select-none"
            style={{
              left: tooltip.x + 10,
              top: tooltip.y - 10,
              transform: "translateY(-100%)",
            }}
          >
            {tooltip.content}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
