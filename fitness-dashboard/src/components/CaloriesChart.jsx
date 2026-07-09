import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", calories: 200 },
  { day: "Tue", calories: 400 },
  { day: "Wed", calories: 300 },
  { day: "Thu", calories: 500 },
  { day: "Fri", calories: 450 },
  { day: "Sat", calories: 600 },
  { day: "Sun", calories: 350 },
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