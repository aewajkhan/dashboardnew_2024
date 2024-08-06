
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1), // x-axis from 1 to 30
    datasets: [
      {
        label: "Activity",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20) + 1), // y-axis values from 1 to 20
        backgroundColor: "#7393fd",
        borderColor: "#7e7f84",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        min: 0,
        max: 30,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 20,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-label">Activity</span>
        <select className="chart-select">
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;
