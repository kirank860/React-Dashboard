import { tableData } from "./Data/Data";

const Table = () => {
  return (
    <div  style={{width:"750px",height:"225px",backgroundColor:"white",padding:"10px",borderRadius:"5px"}}>
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
