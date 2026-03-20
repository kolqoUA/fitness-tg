import "./styles.css";

import { CircularProgressBar, LabelProgressBar } from "../../../shared/ui";

const NutritionInfo = () => {
  const calories = 836;
  return (
    <div className="user-nutrition-info">
      <CircularProgressBar
        value={calories}
        size={100}
        tickness={20}
        max={2400}
        color={{
          primary: "var(--theme-primary-color)",
          circleColor: "var(--theme-surface-color)",
        }}
      >
        <div className="calories">
          <p className="value">{calories}</p>
          <p className="unit">ккал</p>
        </div>
      </CircularProgressBar>
      <div className="user-progress-bars">
        <LabelProgressBar
          name="Білки"
          color={{ primary: "#28a745", secondary: "#5cd67c" }}
          min={0}
          max={180}
          value={75}
          unit="грам"
        />
        <LabelProgressBar
          name="Жири"
          color={{ primary: "#dc3545", secondary: "#f87171" }}
          min={0}
          max={80}
          value={50}
          unit="грам"
        />
        <LabelProgressBar
          name="Вуглеводи"
          color={{ primary: "#ffc107", secondary: "#fcd34d" }}
          min={0}
          max={408}
          value={350}
          unit="грам"
        />
      </div>
    </div>
  );
};

export default NutritionInfo;
