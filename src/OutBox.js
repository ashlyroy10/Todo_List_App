import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const OutBox = () => {

  var [initem,setInitem] = useState("");
  var [outitem,setOutitem] = useState([]);

  const submitTodo = (e) => {
    console.log(initem)
    var data = {initem}
    if (initem) {
      setOutitem((ls) => [...ls,data])
      setInitem("")
    }
  }

    return (
   
    <div>
      
      <Box sx={{backgroundColor:'lightgoldenrodyellow', mt:10, mb:10, mr:50, ml:50, border:4}}>
      <br></br><br></br>
      <Typography variant='h3'>ToDo Application</Typography>
      <br></br><br></br>
      <TextField label="Enter the items" variant='filled' value={initem} onChange={(e) => setInitem(e.target.value)}></TextField>
      <br></br><br></br>
      <Button variant='contained' onClick={submitTodo}>Add - Todo</Button>
      <br></br><br></br>
      <div style={{display:'flex',justifyContent:'center'}}>
        <ol style={{justifyContent:'left'}}>{outitem.map((a) => <li>{a.initem}</li>)}</ol>
      </div>
      <br></br><br></br>
      </Box>
    </div>
    

  )
}

export default OutBox

