import "./styles.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  name?: string;
  unit: string;
}

const CustomTooltip = ({
  active,
  payload,
  name,
  label,
  unit,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip__label">{label}</p>
        <p className="custom-tooltip__payload">
          {payload[0].value} {unit} {name}
        </p>
      </div>
    );
  }
  return null;
};

interface Props {
  data: any[];
  xAxisKey: string;
  dataKey: string; 
  color: string;
  unit: string; 
  name?: string;
}

export const Chart = (props: Props) => {
  return (
    <div className="chart" style={{ outline: "none" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={props.data}
          margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--theme-border-color)"
          />

          <XAxis
            dataKey={props.xAxisKey}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--theme-subtext-color)", fontSize: 12 }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--theme-subtext-color)", fontSize: 12 }}
          />

          <Tooltip
            content={<CustomTooltip unit={props.unit} name={props.name} />}
            cursor={{
              fill: "var(--theme-secondary-bg-color, rgba(0,0,0,0.04))",
            }}
          />

          <Bar
            dataKey={props.dataKey}
            fill={props.color}
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
