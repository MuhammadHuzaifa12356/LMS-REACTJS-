import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'CourseName',
    headerName: 'CourseName',
    width: 150,
    editable: false,
  },
  {
    field: 'Duration',
    headerName: 'Duration',
    width: 150,
    editable: false,
  },
  {
    field: 'Fees',
    headerName: 'Fees',
    type: 'number',
    width: 110,
    editable: false,
  },

];

const rows = [
  { id: 1, Duration: '4 Months', CourseName:"MERN STACK" ,Fees:"5000 PKR" },
  { id: 2, Duration: '4 Months', CourseName:"Graphic Design" ,Fees:"5000 PKR" },
  { id: 3, Duration: '4 Months',CourseName:"Front-End",Fees:"5000 PKR"  },
  { id: 4, Duration: '4 Months' ,CourseName:"MetaVerse" ,Fees:"5000 PKR" },
  { id: 5, Duration: '4 Months' ,CourseName:"BlockChain" ,Fees:"5000 PKR"},
  
];

export default function Courselist() {
  return (
    <>
    <h1 className='text-center bg-primary text-white fw-bold'>CourseList</h1>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
   
        disableRowSelectionOnClick
      />
    </Box>
    </>
  );
}