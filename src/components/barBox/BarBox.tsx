import "./barbox.scss";
import { Tooltip, BarChart, Bar, ResponsiveContainer } from "recharts";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarBox = (props: Props) => {
  return (
    <div className="barBox">
      <h3>{props.title}</h3>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarBox;
