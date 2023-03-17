import React from 'react'

function HeroSection() {
  return (
    <div className='w-full mx-auto'>
        <div className='max-h-[800px] relative -z-10'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-green-700 uppercase max-h-[800px] bg-black/70 flex flex-col justify-center items-center text-xl md:text-3xl font-bold'>
            <h3>Fastest delivery in town</h3>
            <h1 className='text-gray-100 text-center md:text-5xl mt-6'>Eat Healthy, <span className='text-green-700'>Be</span> Healthy</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero img' />
        </div>
    </div>
  )
}

export default HeroSection