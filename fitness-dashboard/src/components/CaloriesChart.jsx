
import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const calorieData = [
  { day: "Mon", calories: 200 },
  { day: "Tue", calories: 400 },
  { day: "Wed", calories: 300 },
  { day: "Thu", calories: 500 },
  { day: "Fri", calories: 450 },
  { day: "Sat", calories: 600 },
  { day: "Sun", calories: 350 },
];

const CaloriesChart = () => {
  const total = useMemo(
    () => calorieData.reduce((sum, item) => sum + item.calories, 0),
    []
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <strong>{label}</strong>
          <p>{payload[0].value} kcal</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="calories-container">
      <div className="calories-header">
        <div>
          <h2>Weekly Calories</h2>
          <p>Your calorie activity this week</p>
        </div>

        <div className="calories-total">
          <h3>{total.toLocaleString()}</h3>
          <span>Total kcal</span>
        </div>
      </div>

      <div className="calories-chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={calorieData}>
            <CartesianGrid strokeDasharray="4 4" vertical={false} />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="calories"
              fill="#6366f1"
              radius={[8, 8, 0, 0]}
              barSize={35}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CaloriesChart;
