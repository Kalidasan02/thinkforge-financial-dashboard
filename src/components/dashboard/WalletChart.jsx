import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";



const data = Array.from({ length: 90 }, (_, i) => ({
  name: i + 1,
  value: Math.floor(Math.random() * 600) + 150,
}));

const WalletChart = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust interval and font size based on screen width
  const isMobile = windowWidth < 768;
  const interval = isMobile ? 17 : 10;
  const fontSize = isMobile ? 10 : 12;
  const bottomMargin = isMobile ? 35 : 30;

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
          margin={{ top: 10, right: 20, left: 14, bottom: bottomMargin }}
        >
          <CartesianGrid
            stroke="#1f2937"
            vertical={false}
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="name"
            tick={{ fill: "#6b7280", fontSize: fontSize }}
            axisLine={false}
            tickLine={false}
            interval={interval}
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
