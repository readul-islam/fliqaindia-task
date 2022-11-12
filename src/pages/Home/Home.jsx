import React from 'react'
import Navbar from '../../Common/Navbar'
import Header from '../../components/Header'
import PhotoGraphyBanner from '../../components/PhotoGraphyBanner/PhotoGraphyBanner'
import RealWedding from '../../components/RealWedding/RealWeadding'
import Success from '../../components/Success/Success'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    {/* <Associate/>
    <Services/> */}
    {/* <Discover/> */}




    {/* <Blog/> */}
    <RealWedding/>
    <Success/>
    <PhotoGraphyBanner/>
    </>
  )
}

export default Home