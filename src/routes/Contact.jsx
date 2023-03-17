import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <Navbar/>
        <div>
        <form
      className="w-full lg:w-3/5 mx-auto text-center p-9 lg:p-16 rounded-lg"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Get in touch, <span className="text-bold text-green-700">with us!</span>
      </h1>
      <div className=" bg-gray-300 text-green-800 p-16 border-slate-300 border-solid shadow-xl shadow-sky-900/50 rounded-lg">
        <div>
          <label className="mr-9 font-bold " htmlFor="name">
            Name:
          </label>
          <input
            className="w-full md:w-4/5 px-9 py-3 border border-teal-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg placeholder-teal-700"
            name="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mt-6">
          <label className="mr-9 font-bold " htmlFor="email">
            Email:
          </label>
          <input
            className="w-full md:w-4/5 px-9  py-3 border border-teal-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg placeholder-teal-700"
            name="email"
            type="email"
            placeholder="Your email"/>
        </div>
        <div className="mt-6">
          <label className="font-bold mb-3 mr-3" htmlFor="email">
            Message:
          </label>
          <textarea
            className="w-full md:w-4/5 px-9 py-3 border border-teal-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg text-sky-800 placeholder-teal-700"
            name="message"
            placeholder="Your message here..."
          />
        </div>
        <button className="btn group relative h-12 w-full overflow-hidden rounded-lg bg-white text-lg shadow mt-9">
          <div className="absolute inset-0 w-3 bg-green-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative green-sky-800 font-bold group-hover:text-white">
            Send
          </span>
        </button>
      </div>
    </form>
        </div>
        <Footer />
    </div>
  )
}

export default Contact