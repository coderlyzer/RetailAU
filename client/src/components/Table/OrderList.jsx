import React from 'react';
import './OrderList.scss';
import { Orders, OrderColumns } from './OrderDataSource';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useBasketGlobalContext } from '../../Context/BasketContext';
import { useGlobalContext } from '../../Context/FetchContext';

const OrderList = () => {
  const { dispatch } = useBasketGlobalContext();
  const state = useGlobalContext();
  const Results = state.orders.data.products;
  // console.log(results);
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div
              className="Add_to_basket"
              onClick={() => dispatch({ type: 'INCREMENT' })}
            >
              Add to Cart
            </div>
            <div
              className="Remove_from_basket"
              onClick={() => dispatch({ type: 'DECREMENT' })}
            >
              Remove from Cart
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="ordertable">
      <DataGrid
        className="datagrid"
        // outline="none"
        rows={Results}
        columns={OrderColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        // checkboxSelection
      />
    </div>
  );
};

export default OrderList;
