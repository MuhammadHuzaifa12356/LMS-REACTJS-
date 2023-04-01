import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'StudentName',
    headerName: 'StudentName',
    width: 150,
    editable: false,
  },
 
  {
    field: 'FatherName',
    headerName: 'FatherName',
    width: 180,
    editable: false,
  },
  {
    field: 'Course',
    headerName: 'Course',
    type: 'number',
    width: 150,
    editable: false,
  },
  
];

const rows = [
  { id: 1, StudentName: 'XYZ',FatherName:"XYZ" , Course:"MERN STACK" },
  { id: 2, StudentName: 'XYZ',FatherName:"XYZ" , Course:"Graphic Design"},
  { id: 3, StudentName: 'XYZ',FatherName:"XYZ" ,Course:"Front-End" },
  { id: 4, StudentName: 'XYZ',FatherName:"XYZ" ,Course:"MetaVerse" },
  { id: 5, StudentName: 'XYZ',FatherName:"XYZ" ,Course:"BlockChain" },
  
];

export default function Studentlist() {
  return (
    <>
    <h1 className='text-center bg-primary text-white fw-bold'>StudentList</h1>
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