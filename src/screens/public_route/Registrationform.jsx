
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SMInput from '../../componenets/SMinput';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BasicDatePicker from '../../componenets/DatePicker';

const lastQ = [
  {
    value: '9',
    label: '9',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '12',
    label: '12',
  },
];
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
const Section = [
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
    
  },
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'D',
    label: 'D',
  },
];
const City = [
  {
    value: 'Karachi',
    label: 'Karachi',
  },
  {
    value: 'Lahore',
    label: 'Lahore',
    
  },
  {
    value: 'Multan',
    label: 'Multan',
  },
  {
    value: 'Islamabad',
    label: 'Islamabad',
  },
];
const Country = [
  {
    value: 'Pakistan',
    label: 'Pakistan',
  },
  {
    value: 'Canada',
    label: 'Canada',
    
  },
  {
    value: 'China',
    label: 'China',
  },
  {
    value: 'Turkey',
    label: 'Turkey',
  },
];
export default function Registrationform(){
    return(
        <>
        <h1 className="text-center p-5 fw-bold bg-dark text-white">REGISTRATION FORM</h1>
     
        <Box 
         sx={{
        
        display: 'flex',
        justifyContent:'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 528,
          height: 628,
        },
      }}
    >
      <Paper className='bg-white  text-center ' variant='outlined' elevation={3} >
       <Box className=" p-2 ">
        <SMInput  variant="filled" label="Student Name" color="success" />
       </Box>
       <Box className="p-3">
        <SMInput  variant="filled" label="FatherName" color="success" />
       </Box>
       <Box className="p-3">
       <SMInput  variant="filled" label="Contact" color="success"  />
       
       </Box>
       <Box className="p-3">
       <SMInput  variant="filled" label="CNIC"  color="success"/>
       </Box>
       <Box>
       <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Last Qualification"
          
        >
          {lastQ.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       </Box>
       <Box className="p-3 " >
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
       <SMInput  variant="filled" label="INSTITUTE" disabled  color="success"/>
       </Box>
       <Box className="p-3">
       <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="SECTION"
        >
          {Section.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       </Box>
       <Box className=" p-2">
        <SMInput  variant="filled" label="Email" color="success" />
       </Box>
       <Box className=" p-2">
        <SMInput  variant="filled" label="PASSWORD" color="success" />
       </Box>
       <Box>
       <RadioGroup 
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
       
      >
        <div>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </div>
      </RadioGroup>
       </Box>
       <Box>
       <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Select Your City"
          
        >
          {City.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       </Box>
        <Box className="my-5">    
          <BasicDatePicker label="DOB"/>
        </Box>
        <Box className=" p-2">
        <SMInput  variant="filled" label="ADDRESS" color="success" />
       </Box>
       <Box>
       <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Select Your Country"
          
        >
          {Country.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       </Box>
      </Paper>
    </Box>
  
        </>
    )
}