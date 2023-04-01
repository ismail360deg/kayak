import React from 'react';
import Airlines from '../Airlines/Airlines';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

const Home = () => {
  return (
      <div>
        <Navbar></Navbar>
        <Airlines></Airlines>
        <Faq></Faq>
        <Contact></Contact>
        <Footer></Footer>
      </div>
  )
}

export default Home