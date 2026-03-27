import "./styles.css";

import { useMemo, useState } from "react";

import { InlineSelect } from "@/shared/ui";
import { StatisticChart, getDailyStats, STATISTIC_METRIC_OPTIONS } from "@/entities/statistic";

interface Props {
  period: string;
}

export const NutritionChartBoard = (props: Props) => {
  const [metric, setMetric] = useState(STATISTIC_METRIC_OPTIONS[0].value);
  const rawData = getDailyStats();

  const visibleData = useMemo(() => {
    if (props.period === "week") {
      return rawData.slice(-7);
    } else if (props.period === "two_weeks") {
      return rawData.slice(-14);
    }
    return rawData;
  }, [rawData, props.period]);

  return (
    <div className="nutrition-chart-board">
      <div className="nutrition-chart-board__header">
        <p>Статистика</p>
        <InlineSelect
          options={STATISTIC_METRIC_OPTIONS}
          value={metric}
          onChange={setMetric}
        />
      </div>
      <StatisticChart rawData={visibleData} activeMetric={metric} />
    </div>
  );
};
