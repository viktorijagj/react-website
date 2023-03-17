import React from 'react'

function Card({title, imgSrc}) {
  return (
    // Card
    <div className='shadow-lg bg-gray-200 relative rounded-lg h-[200px] overflow-hidden w-full'>
        {/* overlay */}
        <div className='w-full h-full absolute bg-black/50 flex flex-col justify-center items-center text-white font-bold rounded-lg'>
            <h2 className='md:text-2xl uppercase'>{title}</h2>
            <button className='text-xl bg-green-800 rounded-lg px-6 py-2 mt-9 hover:shadow-xl hover:shadow-white duration-100'>Order</button>
        </div>
        <img className='w-full object-fit rounded-lg' src= {imgSrc} alt='p1'/>
    </div>
  )
}

export default Card