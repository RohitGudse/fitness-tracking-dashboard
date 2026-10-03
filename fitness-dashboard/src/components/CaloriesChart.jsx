import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const weeklyCalories = [
  { name: "Monday", value: 200 },
  { name: "Tuesday", value: 400 },
  { name: "Wednesday", value: 300 },
  { name: "Thursday", value: 500 },
  { name: "Friday", value: 450 },
  { name: "Saturday", value: 600 },
  { name: "Sunday", value: 350 },
];

function CaloriesChart() {
  const totalCalories = weeklyCalories.reduce(
    (total, item) => total + item.value,
    0
  );

  return (
    <section className="calories-chart">
      <div className="chart-header">
        <h2>Weekly Calories</h2>
        <p>Total: {totalCalories} kcal</p>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={weeklyCalories}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              tickFormatter={(day) => day.substring(0, 3)}
            />

            <YAxis />

            <Tooltip
              formatter={(value) => [`${value} kcal`, "Calories"]}
            />

            <Bar
              dataKey="value"
              name="Calories"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default CaloriesChart;