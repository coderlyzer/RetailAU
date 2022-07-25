import React from 'react';
import './Datatable.scss';
import { Products, ProductColumns } from './DatatableSource';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={Products}
        columns={ProductColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;
