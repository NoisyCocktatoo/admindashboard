import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

import "./areachart.scss";

type Props = {
  data: object[];
};

const AreaChartBox = (props: Props) => {
  return (
    <div className="areaChart">
      <h1>Area Chart</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <AreaChart data={props.data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{}} />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
