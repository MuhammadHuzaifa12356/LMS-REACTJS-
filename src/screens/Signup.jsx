
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SMInput from '../componenets/SMinput';
import { Button } from '@mui/material';
export default function SignUp() {
   
  return (
   <>
   <h1 className='text-center fw-bold bg-dark text-white'>Signup</h1>  
    <Box className='p-5 m-4'>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box  sx={{ bgcolor: '#', height: '50vh'  }} >
         <div className='text-center p-5  shadow-lg p-3 mb-5 bg-body-tertiary rounded '>
            <Box>
         <SMInput  label="Name" variant="filled" type="Email" />

            </Box>
         <Box className="p-5 ">
         <SMInput  label="Email" variant="filled" type="Email" />
         </Box>
         <Box className="p-3">
         <SMInput label="Password" variant="filled" type="Password" />
         </Box>
         <Box>
         <Button variant="contained">Signup</Button>
         </Box>
         </div>
        </Box>
      </Container>
    </React.Fragment>
    </Box>
    </>
  );
  
}