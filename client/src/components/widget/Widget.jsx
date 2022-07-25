import React from 'react';
import './Widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
// import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';

const Widget = ({ type }) => {
  let data;

  //temporary - data from axios fetch needed
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all orders',
        icon: (
          <InventoryOutlinedIcon
            className="icon"
            style={{
              color: 'black',
              backgroundColor: 'rgba(99, 245, 246, 0.8)',
            }}
          />
        ),
      };
      break;

    case 'profit':
      data = {
        title: 'PROFIT',
        isMoney: true,
        link: 'See all profit',
        icon: (
          <AccountBalanceOutlinedIcon
            className="icon"
            style={{
              color: 'black',
              backgroundColor: 'rgba(99, 246, 174, 0.8)',
            }}
          />
        ),
      };
      break;

    case 'product':
      data = {
        title: 'PRODUCTS',
        isMoney: false,
        link: 'See all products',
        icon: (
          <CheckroomOutlinedIcon
            className="icon"
            style={{
              color: 'black',
              backgroundColor: 'rgba(99, 171, 246, 0.8)',
            }}
          />
        ),
      };
      break;

    case 'customer':
      data = {
        title: 'CUSTOMERS',
        isMoney: false,
        link: 'See all customers',
        icon: (
          <HailOutlinedIcon
            className="icon"
            style={{
              color: 'black',
              backgroundColor: 'rgba(149, 99, 246, 0.67)',
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '£'}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
