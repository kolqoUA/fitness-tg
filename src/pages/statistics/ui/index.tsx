import "./styles.css";

import { useState } from "react";

import { ChooseOption } from "@/shared/ui";
import { PERIOD_OPTIONS } from "../const/period-options";
import { NutritionChartBoard } from "@/widgets/nutrition-chart-board";
import { NutrientsAverageBoard } from "@/widgets/nutrients-average-board";

const Statistics = () => {
  const [currentOption, setCurrentOption] = useState<'week' | 'two_weeks' | "month">(PERIOD_OPTIONS[0].value);

  return (
    <div className="statistics">
      <ChooseOption
        options={PERIOD_OPTIONS}
        currentOption={currentOption}
        onClick={setCurrentOption}
      />
      <NutritionChartBoard period={currentOption} />
      <NutrientsAverageBoard/>
    </div>
  );
};

export default Statistics;
