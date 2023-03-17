import React, { useState } from 'react'
import { data } from '../data/data.js'
import ProductPromo from './ProductPromo.jsx';

function Promotions() {
  const [products, setProducts]= useState(data);

  // Filter by category
  const filterCategory = (category)=> {
    setProducts(
      data.filter((product)=> {
        return product.category === category;
      })
    );
  }

   // Filter by price
   const filterPrice = (price)=> {
    setProducts(
      data.filter((product)=> {
        return product.price === price;
      })
    );
  }
  return (
    <div className='mt-9 mb-9'>
      <h1 className='text-4xl text-green-900 text-center font-bold pt-9 pb-9 border-t-2 border-b-2 border-green-900'>Some of ours best sales!</h1>
      {/* Filters */}
      <div className='flex-cols md:flex justify-between mt-9'>
        {/* Filter by category */}
        <div>
          <p className='font-bold text-green-900 text-center pb-3'>Choose Category:</p>
        <div className='flex flex-wrap justify-center gap-1'>
          <button onClick={()=> setProducts(data)} className='text-green-700 hover:bg-green-900 hover:text-white'>All</button>
          <button onClick={()=> filterCategory('salad')}className='text-green-700 hover:bg-green-900 hover:text-white'>Salad</button>
          <button onClick={()=> filterCategory('vegetables')} className='text-green-700 hover:bg-green-900 hover:text-white'>Vegetables</button>
          <button onClick={()=> filterCategory('fruit')} className='text-green-700 hover:bg-green-900 hover:text-white'>Fruit</button>
          <button onClick={()=> filterCategory('meat')} className='text-green-700 hover:bg-green-900 hover:text-white'>Meat</button>
          <button onClick={()=> filterCategory('fish')} className='text-green-700 hover:bg-green-900 hover:text-white'>Fish</button>
        </div>
        </div>
        {/* Filter by price */}
      <div>
      <p className='font-bold text-green-900 text-center pb-3 pt-3'>Filter by price:</p>
        <div className='flex flex-wrap justify-center gap-1'>
          <button onClick={()=> filterPrice('$')} className='text-green-700 hover:bg-green-900 hover:text-white'>$</button>
          <button onClick={()=> filterPrice('$$')} className='text-green-700 hover:bg-green-900 hover:text-white'>$$</button>
          <button onClick={()=> filterPrice('$$$')} className='text-green-700 hover:bg-green-900 hover:text-white'>$$$</button>
          <button onClick={()=> filterPrice('$$$$')} className='text-green-700 hover:bg-green-900 hover:text-white'>$$$$</button>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full mt-9">
      {products.map((product)=> {
        return (
          <div key={product.id}>
            <ProductPromo productName={product.name} productPrice={product.price} productImg = {product.images}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Promotions