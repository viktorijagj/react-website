import React from 'react'


function ProductPromo({productName , productPrice , productImg }) {
  return (
      <div className='h-full border shadow-lg shadow-green-900 hover:scale-90 duration-100 cursor-pointer rounded-lg'>
        <img className='h-[150px] w-full object-cover rounded-lg' src={productImg} alt={productName} />
        <div className='p-3 text-center'>
        <h1 className='uppercase'>{productName}</h1>
        <h2 className='font-bold text-green-900'>Only for: {productPrice}</h2>
        </div>
    </div>
  )
}

export default ProductPromo