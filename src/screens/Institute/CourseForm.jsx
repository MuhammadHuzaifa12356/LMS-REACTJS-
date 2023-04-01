
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SMInput from '../../componenets/SMinput';
import { Button } from '@mui/material';

export default function CourseForm() {
   
  return (
   <>
   <h1 className='text-center fw-bold bg-primary text-white'>COURSEFORM</h1>  
    <Box className='p-5 m-4'>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box  sx={{ bgcolor: '#', height: '50vh'  }} >
         <div className='text-center  shadow-lg p-3 mb-5 bg-body-tertiary rounded '>
         <Box className="p-2 ">
         <SMInput  label="CourseName" variant="filled"  />
         </Box>
         <Box className="p-3">
         <SMInput label="Duration" variant="filled" />
         </Box>
         <Box className="p-3">
         <SMInput label="FEES" variant="filled" />
         </Box>
         <Box className="p-3">
         <SMInput label="Teacher" variant="filled" />
         </Box>
         <Box>
         <Button variant="contained">SUBMIT</Button>
         </Box>
         </div>
        </Box>
        
      </Container>
    </React.Fragment>
    </Box>
    </>
  );
  
}