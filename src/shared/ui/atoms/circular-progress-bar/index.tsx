import "./styles.css";

interface Props {
  children?: React.ReactNode;
  color: {
    primary: string;
    circleColor: string;
  };
  value: number;
  size?: number;
  tickness?: number;
  min?: number;
  max?: number;
}


const CircularProgressBar = (props: Props) => {
  const min = props.min ?? 0;
  const max = props.max ?? 100;
  const value = props.value ?? 50
  const size = props.size ?? 50;
  const tickness = props.tickness ?? 10;
  const progress = ((value - min) / (max - min)) * 100;
  return (
    <div
      className="circular-progress-bar"
      style={{
        '--progress': `${progress}`,
        '--size': `${size}px`,
        '--tickness': `${tickness}px`,
        '--primary-color': props.color.primary,
        '--circle-color': props.color.circleColor,
      } as React.CSSProperties}
    >
      <div className="center-box">
        {props.children}
      </div>
    </div>
  );
};

export default CircularProgressBar;
