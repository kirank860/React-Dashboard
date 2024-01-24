import { useEffect, useState } from "react";
import { getTableData } from "./Data/Data";

const Table = () => {

   const [tableData, setTableData] = useState();

   useEffect(() => {
     const fetchData = async () => {
       try {
         const data = await getTableData();
         setTableData(data);
       } catch (error) {
         // Handle the error, you can log or show an error message
         console.error("Error in fetching data:", error);
       }
     };
 
     fetchData();
   }, []);
  return (
    <div  style={{width:"750px",height:"225px",backgroundColor:"white",padding:"10px",borderRadius:"5px",boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'}}>
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData&&
            tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
