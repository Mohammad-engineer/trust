import React  from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

const Comments= ()=>{

    const [isPending,isError,error,data]= useQuery({queryKey:['comments'], queryFn:()=>
     axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(res=>res.data)
});
    console.log(data);

    if(isPending) return "Loading...";

    if(isError) return "an errors has occurres: "+ error.message;

  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((comment) => (
            <TableRow
              key={comment.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{comment.id}</TableCell>
              <TableCell align="center">{comment.name}</TableCell>
              <TableCell align="center">{comment.email}</TableCell>
              <TableCell align="center">{comment.body}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>

{/*     <Button type='button' onClick={refetch} variant="contained">reFetch comments</Button>
 */}
    </TableContainer>
   
  )
}

export default Comments