import React from 'react'
import Card from './Card'
import { FaArrowRight } from "react-icons/fa";

function Cards() {
  return (
    <div className='text-center mt-9'>
            <h1 className='text-4xl text-green-900 text-center font-bold pt-9 pb-9 border-t-2 border-b-2 border-green-900'>Order here!</h1>
        {/* Card */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full justify-between mt-9'>
        <Card title="Traditional bread" imgSrc="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card title="Beaf meat" imgSrc="https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <Card title="Oat musli" imgSrc="https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <Card title="Cheddar cheese" imgSrc="https://images.pexels.com/photos/1765005/pexels-photo-1765005.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
    </div>
    <button className='mx-auto flex items-center mt-9 px-12 py-3 bg-green-900 text-white font-bold uppercase hover:text-green-900 hover:bg-white duration-75 '>Show more <FaArrowRight className='ml-3' /></button>
    </div>
  )
}

export default Cards