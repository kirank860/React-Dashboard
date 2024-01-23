import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from "chart.js/auto";
const Graph = () => {
  // Sample data for demonstration
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
    datasets: [
      {
        label: 'My Dataset',
        data: [10, 20, 30, 25, 35],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <h2>My Graph</h2>
      <h1>hello</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
