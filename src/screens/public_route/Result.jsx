import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SMInput from '../../componenets/SMinput';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const course = [
    {
      value: 'Web Development',
      label: 'Web Development',
    },
    {
      value: 'Graphic Design',
      label: 'Graphic Design',
      
    },
    {
      value: 'Metaverse',
      label: 'Metaverse',
    },
    {
      value: 'WordPress',
      label: 'WordPress',
    },
  ];

export default function Result(){
    
    return (
      <>
        <h1 className="text-center fw-bold bg-dark text-white">Result</h1>
        <Box className="p-5 m-4">
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
              <Box sx={{ bgcolor: "#", height: "50vh" }}>
                <div className="text-center p-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
                  <Box className="p-5 ">
                    <SMInput label="Roll Number" variant="filled" />
                  </Box>
                  <Box className="p-3">
                    <SMInput label="Password" variant="filled" />
                  </Box>
                  <Box className="p-3 ">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  defaultValue="EUR"
                  helperText="Select Courses"
                >
                  {course.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
                  <Box>
                    <Button variant="contained">Search</Button>
                  </Box>
                </div>
              </Box>
              
            </Container>
          </React.Fragment>
        </Box>
      </>
    );
}