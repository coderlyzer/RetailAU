import React from 'react';
import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import OrderList from '../../components/Table/OrderList';
import Widget from '../../components/widget/Widget';
import { useGlobalContext } from '../../Context/FetchContext';
import './home.scss';

const Home = () => {
  const state = useGlobalContext();
  if (state.loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="order" />
          <Widget type="profit" />
          <Widget type="product" />
          <Widget type="customer" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Stock Level</div>
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default Home;
