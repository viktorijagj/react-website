import React from 'react'
import Offer from '../components/Promotions'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Promotions() {
  return (
    <div className='flex flex-col h-screen justify-between'>
    <Navbar />
    <Offer />
    <Footer />
    </div>
  )
}

export default Promotions