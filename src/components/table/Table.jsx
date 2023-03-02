import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import Axios  from "axios";

const List = () => {


  const [transactions, setTransactions] = useState([])

  const handleDelete = async (id) => {
    try{
      await Axios.delete("http://localhost:3001/user"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    const transact = async () => {
      try{
        const res = await Axios.get("http://localhost:3001/user")
        setTransactions(res.data)
      }catch(err){
      console.log(err)
    }
  }
  transact()
  },[])
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(row => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                 {row.image &&  <img src={row.image} alt="" className="image" />}
                  {row.username}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.username}</TableCell>
              <TableCell className="tableCell">{row.phone}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
              <TableCell className="tableCell">{row.fullname}</TableCell>
              <TableCell className="tableCell">
                <button className="delete" onClick={()=>handleDelete(row.id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
