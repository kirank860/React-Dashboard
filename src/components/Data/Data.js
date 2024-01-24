
import axios from 'axios';
// export const graphData = [
//     { x: "Jan", y: 10 },
//     { x: "Feb", y: 15 },
//     { x: "Mar", y: 8 },
//     { x: "Apr", y: 12 },
//     { x: "May", y: 18 },
//   ];
  
//   export const pieChartData = [
//     { label: "Category A", value: 30 },
//     { label: "Category B", value: 20 },
//     { label: "Category C", value: 15 },
//     { label: "Category D", value: 25 },
//     { label: "Category E", value: 10 },
//   ];
  




  const BASE_URL = "http://localhost:3001/api";
  
  export const getTableData = async () => {
  try {
    const response =await axios.get(`${BASE_URL}/table`);
    console.log(response);
    return response.data;
    
  } catch (error) {
    console.error("error fetching data",error);
    throw error;
  }
  };

  export const getGraphData = async ()=>{
    try {
      const response = await axios.get (`${BASE_URL}/graph`);
       return response.data;
    } catch (error) {
      console.error("You have a error graphdata",error);
      throw error;
    }
  }
  
 export const getpieChartData =async ()=>{
  try {
    const response = await axios.get (`${BASE_URL}/pie-chart`)
    return response.data
  } catch (error) {
    console.error("you have an error in pie chart",error)
    throw error
  }
 }

  
  