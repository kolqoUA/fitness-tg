import "./styles.css";

import { ProgressBar } from "../../../ui";

interface Props {
  color: {
    primary: string;
    secondary: string;
  };
  name: string;
  value: number;
  min: number;
  max: number;
  unit: string;
}

const LabelProgressBar = (props: Props) => {
  const isCompleted = props.value >= props.max;

  return (
    <div className={`label-bar ${isCompleted ? "shimmer-glow" : ""}`}>
      <div className="info">
        <p className="name">{props.name}</p>
        <p className="value">{props.value}/{props.max} {props.unit}</p>
      </div>
      <ProgressBar
        color={{ primary: props.color.primary, secondary: props.color.secondary }}
        value={props.value}
        min={props.min}
        max={props.max}
      />
      {isCompleted && (
        <div className="particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
      )}
    </div>
  );
};
export default LabelProgressBar;
