import React from 'react'
import { Pie } from 'react-chartjs-2'
import { pieChartData } from './Data/Data'
import { Chart as ChartJs } from "chart.js/auto";

const Piechart = () => {
  return (
    <div style={{width:"340px",backgroundColor:"white",padding:"10px",borderRadius:"10px"}}>
     <Pie  data={{
          labels:pieChartData && pieChartData.length>0 && pieChartData.map((data) => data.label),
          datasets: [
            {
              label: "No of users",
              data:pieChartData && pieChartData.map((data) => data.value),
              backgroundColor: [
                "#24c373",
                "#b9efd4",
                "#7edcad",
                "#78cfa4",
                "#71d2a2",
              ],
              borderColor: "white",
              borderWidth: 2,
            },
          ],
        }}/>
    </div> 
  )
}

export default Piechart
