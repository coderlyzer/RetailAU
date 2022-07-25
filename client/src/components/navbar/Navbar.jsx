import React from 'react';
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useGlobalContext } from '../../Context/DarkModeContext';
import { useBasketGlobalContext } from '../../Context/BasketContext';

const Navbar = () => {
  const { dispatch } = useGlobalContext();
  const { state } = useBasketGlobalContext();
  const add_to_basket = state.order_count;
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item" onClick={() => dispatch({ type: 'TOGGLE' })}>
            <DarkModeOutlinedIcon
              className="icon"
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          {/* <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div> */}
          <div className="item">
            <ShoppingBasketOutlinedIcon className="icon" />
            <div className="counter">{add_to_basket}</div>
          </div>
          <div className="item">
            <img
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="profile_picture"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
