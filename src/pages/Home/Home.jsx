import React from 'react'
import Navbar from '../../Common/Navbar'
import Discover from '../../components/Discover'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    {/* <Associate/>
    <Services/> */}
    <Discover/>
    </>
  )
}

export default Home