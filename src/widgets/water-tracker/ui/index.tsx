import "./styles.css";

import { waterPresents } from "../../../features/add-water";
import { Button, LabelProgressBar } from "../../../shared/ui";
import { WaterIcon } from "../assets";

interface Props {
  setWaterIntake: (value: number) => void;
  waterIntake: number;
}

const WaterTracker = (props: Props) => {
  return (
    <div className="user-water-tracker">
      <LabelProgressBar
        name="Вода"
        color={{ primary: "#288ea7", secondary: "#2c9db9" }}
        min={0}
        max={3000}
        value={props.waterIntake}
        unit="мл"
      />
      <div className="buttons">
        {waterPresents.map((present) => (
          <Button
            className="button-distinctive"
            onClick={() =>
              props.setWaterIntake(props.waterIntake + present.amount)
            }
          >
            <div className="button-content">
              <WaterIcon /> {present.label}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WaterTracker;
