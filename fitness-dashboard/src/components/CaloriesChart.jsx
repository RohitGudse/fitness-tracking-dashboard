import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", calories: 200 },
  { day: "Tue", calories: 400 },
];

const CaloriesChart = () => {
  return (
    <BarChart width={400} height={200} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Bar dataKey="calories" />
    </BarChart>
  );
};

export default CaloriesChart;