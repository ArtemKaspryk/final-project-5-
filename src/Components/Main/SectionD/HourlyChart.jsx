import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

export default function HourlyChart({ data }) {
  const labels = data.map((d) => d.time);
  const temps = data.map((d) => d.temp);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "#ff8c42",
        backgroundColor: "rgba(255, 140, 66, 0.2)",
        fill: true,
        tension: 0.4, // smooth curve
        pointRadius: 0, // no dots
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw}°C`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(200, 200, 200, 0.35)"  },
      },
      y: {
        grid: { color: "rgba(200,200,200,0.35)" },
        ticks: {
          callback: (value) => `${value}°C`,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
