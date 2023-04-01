import React from 'react';
import Airlines from '../Airlines/Airlines';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

const Home = () => {
  return (
      <div>
        <Navbar></Navbar>
        <Airlines></Airlines>
      </div>
  )
}

export default Home