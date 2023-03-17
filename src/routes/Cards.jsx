import React from 'react'
import Order from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Cards() {
  return (
    <div className='flex flex-col h-screen justify-between'>
    <Navbar />
    <Order />
    <Footer />
    </div>
  )
}

export default Cards