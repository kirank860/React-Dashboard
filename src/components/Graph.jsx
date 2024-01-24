import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from "chart.js/auto";
import { useEffect } from 'react';
import { getGraphData } from './Data/Data';



const Graph = () => {
  const [graphData,setGraphData]=useState();
  useEffect (()=>{
   const fetchData = async ()=>{
    try {
      const data = await getGraphData();
      setGraphData(data);
    } catch (error) {
      // Handle the error, you can log or show an error message
      console.error("Error in fetching data:", error);
    }
   }
   fetchData()
  },[])
  return (
    <div style={{ width: '680px', backgroundColor:'white',borderRadius:"5px",padding:"10px",boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }}>
      <Line
        data={{
          labels:  graphData && graphData?.map((data) => data.x),
          datasets: [
            {
              label: "GraphData",
              data: graphData && graphData?.map((data) => data.y),
              borderColor: '#36A2EB',
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill color
              borderWidth:2,
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
