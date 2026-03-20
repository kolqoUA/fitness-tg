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
  return (
    <div className="label-bar">
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
    </div>
  );
};
export default LabelProgressBar;
