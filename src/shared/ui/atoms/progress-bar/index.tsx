import "./styles.css";

interface ProgressBarProps {
  color: { primary: string; secondary: string };
  value: number;
  min?: number;
  max?: number;
}

const ProgressBar = (props: ProgressBarProps) => {
  const min = props.min ?? 0;
  const max = props.max ?? 100;
  const progress = ((props.value - min) / (max - min)) * 100;
  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${props.color.primary}, ${props.color.secondary})`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
