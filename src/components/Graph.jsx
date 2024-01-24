import React from 'react';
import { Line } from 'react-chartjs-2';
import { graphData } from './Data/Data';
import { Chart as ChartJs } from "chart.js/auto";

const Graph = () => {
  return (
    <div style={{ width: '680px', backgroundColor:'white',borderRadius:"5px",padding:"10px" }}>
      <Line
        data={{
          labels: graphData.map((data) => data.x),
          datasets: [
            {
              label: "calender",
              data: graphData.map((data) => data.y),
              borderColor: '#36A2EB',
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill color
              borderWidth: 2,
              fill: false, // Fill area under the line
              lineTension: 0.3, // Adjust this value for curvature
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
