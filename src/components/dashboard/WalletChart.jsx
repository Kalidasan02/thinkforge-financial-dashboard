import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import React from "react";

const data = Array.from({ length: 90 }, (_, i) => ({
  name: i + 1,
  value: Math.floor(Math.random() * 600) + 150,
}));

const WalletChart = () => {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Overall Wallet Chart</h3>
        <p>Showing your wallet balances over time</p>
      </div>

      {/* Divider Line */}
      <div className="chart-divider"></div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 11, bottom: 0 }}
        >
          <CartesianGrid
            stroke="#1f2937"
            vertical={false}
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="name"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            interval={14}
            tickFormatter={(value) => {
              const labels = [
                "Apr 9",
                "Apr 19",
                "Apr 29",
                "May 9",
                "May 19",
                "May 30",
                "Jun 9",
                "Jun 19",
                "Jun 30",
              ];
              return labels[Math.floor(value / 10)] || "";
            }}
          />

          <YAxis
            hide
            domain={[0, 750]} 
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "8px",
              color: "#fff",
            }}
            cursor={{ fill: "rgba(52, 211, 153, 0.1)" }}
          />

          <Bar dataKey="value" fill="#34d399" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletChart;
