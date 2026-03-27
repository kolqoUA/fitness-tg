import "./styles.css";

import { waterPresents } from '@/features/add-water'
import { Button, LabelProgressBar } from '@/shared/ui'
import { DropIcon } from "@phosphor-icons/react";

interface Props {
  setWaterIntake: (value: number) => void;
  waterIntake: number;
}

const WaterTracker = (props: Props) => {
  return (
    <div className="water-tracker">
      <LabelProgressBar
        name="Вода"
        color={{ primary: "var(--theme-water-color)", secondary: "var(--theme-water-light-color)" }}
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
              <DropIcon size={18} weight="fill"/> {present.label}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default WaterTracker;
