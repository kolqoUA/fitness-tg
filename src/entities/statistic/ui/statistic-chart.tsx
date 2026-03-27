import { useMemo } from "react";

import { Chart } from "@/shared/ui";
import type { DailyStatDto, MetricType } from "../model/types";

interface Props {
  rawData: DailyStatDto[];
  activeMetric: MetricType;
}

const METRIC_CONFIG: Record<MetricType, { color: string; unit: string, name?: string}> = {
  calories: { color: "var(--theme-primary-color)", unit: "ккал", name: "калорій" },
  water: { color: "var(--theme-water-color)", unit: "л", name: "води"},
  proteins: { color: "var(--theme-proteins-color)", unit: "г", name: "білків"}, 
  fats: { color: "var(--theme-fats-color)", unit: "г", name: "жирів"}, 
  carbs: { color: "var(--theme-carbs-color)", unit: "г", name: "вуглеводів"}, 
};

export const StatisticChart = (props: Props) => {

  const chartData = useMemo(() => {
    return props.rawData.map((day) => {
      const dateObj = new Date(day.date);
      const dayLabel = dateObj.toLocaleDateString("uk-UA", {
        weekday: "short",
      });

      return {
        ...day,
        dayLabel: dayLabel.charAt(0).toUpperCase() + dayLabel.slice(1),
      };
    });
  }, [props.rawData]);

  const currentConfig = METRIC_CONFIG[props.activeMetric];

  return (
    <Chart
      data={chartData}
      xAxisKey="dayLabel"
      dataKey={props.activeMetric}
      color={currentConfig.color}
      unit={currentConfig.unit}
      name={currentConfig.name}
    />
  );
};
