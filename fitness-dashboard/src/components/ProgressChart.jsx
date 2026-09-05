import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const progressData = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 20 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 50 },
  { day: "Sun", value: 75 },
];

const ProgressChart = () => {
  return (
    <div className="progress-chart">
      <div className="progress-chart__header">
        <h2>Weekly Progress</h2>
        <p>Track your progress throughout the week.</p>
      </div>

      <div className="progress-chart__content">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={progressData}
            margin={{
              top: 20,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Progress"]}
              labelFormatter={(label) => `Day: ${label}`}
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="value"
              name="Progress"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;