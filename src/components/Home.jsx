import React from 'react'
import Cards from "./Cards";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Promotions from "./Promotions";
import Footer from "./Footer";

function Home() {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <Navbar/>
        <HeroSection />
        <Cards />
        <Promotions />
        <Footer />
    </div>
  )
}

export default Home