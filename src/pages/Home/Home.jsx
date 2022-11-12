
import React from "react";
import Navbar from "../../Common/Navbar";
import Associate from "../../components/Associate";
import AwardsSection from "../../components/AwardsSection";
import Blog from "../../components/Blog";
import Discover from "../../components/Discover";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Offers from "../../components/Offers";
import PhotoGraphyBanner from "../../components/PhotoGraphyBanner";
import RealWedding from "../../components/RealWedding";
import Services from "../../components/Services";
import Success from "../../components/Success";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Associate />
      <Services/>
      <Discover />
      <Blog />
      <RealWedding/>
      <Offers/>
      <Testimonials/>
      <AwardsSection/>
      <Success/>
      <PhotoGraphyBanner/>  
      <Footer/>
     
      
     

    </>
  );
};

export default Home;
