import React from 'react';
import './Featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={60}
            text={'60%'}
            strokeWidth={5}
            styles={{ path: { stroke: '#327e93', textColor: '#327e93' } }}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">£1,000</p>
        <p className="desc">
          Previous transactions processing. Last orders may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Daily Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">£2,000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Weekly Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">£12,000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Monthly Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">£60,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
