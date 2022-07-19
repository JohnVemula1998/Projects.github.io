import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'Movie Name', width: 400 },
  { field: 'lastName', headerName: 'Release Date', width: 200 },
  {
    field: 'age',
    headerName: 'Rating',
    type: 'number',
    width: 200,
  },
  
];


export default function SortingTable(props) {

  return (
    <div style={{ height: 700, width: '80%'}}>
      <DataGrid

        rows={props.rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[20]}
      />
    </div>
  );
}
