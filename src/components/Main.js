import React from 'react'
import { Container } from '@mui/system'
import { TextField } from '@mui/material'

const Main = ({word,setWord}) => {
  return (
    <div>
         <Container maxWidth="lg">
      <p className='name-main'><span id='book'>Word</span>Book</p>
      <p className='name'>{word ? word : ""}</p>
      <TextField className='input' value={word} onChange={(e) => setWord(e.target.value)} id="outlined-basic" label="Type a Word" variant="outlined" />
    </Container>
    </div>
  )
}

export default Main