import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { getpieChartData, pieChartData } from './Data/Data'
import { Chart as ChartJs } from "chart.js/auto";

const Piechart = () => {
  const [pieChartData,setPieChartData]=useState()

  useEffect(()=>{
const fetchData = async ()=>{
  try {
    const data =await getpieChartData()
    setPieChartData(data)
  } catch (error) {
    console.error("Error in fetching data:", error);
  }
}
fetchData()
  },[])
  return (
    <div style={{width:"340px",backgroundColor:"white",padding:"10px",borderRadius:"10px",boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'}}>
     <Pie  data={{
          labels:pieChartData && pieChartData.length>0 && pieChartData.map((data) => data.label),
          datasets: [
            {
              label: "No of users",
              data:pieChartData && pieChartData.map((data) => data.value),
              backgroundColor: [
                "#b9efd4",
                "#7edcad",
                "#78cfa4",
                "#7edcad",
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
