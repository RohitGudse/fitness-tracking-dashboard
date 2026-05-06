import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 20 },
];

const ProgressChart = () => {
  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
};

export default ProgressChart;