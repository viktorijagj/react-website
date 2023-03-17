import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingBag, FaHome , FaRegAddressCard } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md"

function Navbar() {
    // State for menu show
    const [showMenu, setShowMenu] = useState(false)

    
  return (
    // Navbar container
    <header className='w-full flex flex-col md:flex-row md:justify-between items-center p-9 bg-gray-200 lg:text-xl'>
        {/* Left side container */}
        <div className='flex items-center justify-start mb-4 md:mb-0 w-full'>
        <div className='cursor-pointer' onClick = {()=> setShowMenu(!showMenu)}><FaBars size={25}/></div>
        <h1 className='ml-4 p-2 rounded-xl bg-gray-300 font-bold'> Eat Healthy <span className='ml-1 text-green-900 font-normal'>Be Healthy</span></h1>
        </div>
        {/* search */}
        <div className='flex justify-between items-center ml-4 p-2 rounded-xl bg-green-900 text-gray-300 w-full md:w-[700px]'>
            <input className='bg-transparent pl-1 focus:outline-none w-full text-sm' type='search' placeholder='Search...'/>
            <FaSearch className='ml-4 cursor-pointer' size={20} />
        </div>
        {/* Right side */}
        <div className='ml-4 mt-4 md:mt-0 self-end flex bg-gray-300 p-2 rounded-xl items-center text-sm'>
            <p className='pr-1'>Card</p>
            <FaShoppingBag />
        </div>

        {/* Mobile menu */}
        {/* Overlay */}
        {showMenu ? <div className='bg-black/70 fixed w-full h-screen top-0 left-0'></div> : ''}
        {/* Side menu */}
        <div className= {showMenu ? 'z-[100] pt-4 bg-gray-100 fixed top-0 left-0 w-[350px] h-screen duration-200' : 'pt-4 bg-gray-100 fixed top-0 left-[-100%] w-[350px] h-screen duration-200'}>
            <GrClose onClick={()=> setShowMenu(!showMenu)} size={25} className='absolute right-4 top-6 cursor-pointer' />
            <h1 className='p-2 font-bold text-sm text-center'> Eat Healthy <span className='ml-1 text-green-900 font-normal'>Be Healthy</span></h1>
            <nav>
                <ul className='mt-8 ml-8 flex flex-col'>
                <li><Link to='/' className='cursor-pointer flex items-center p-2 hover:font-bold'><FaHome size={15} className='mr-4'/>Home</Link></li>
                    <li><Link to='/order' className='cursor-pointer flex items-center p-2 hover:font-bold'><FaRegAddressCard size={15} className='mr-4'/>Orders</Link></li>
                    <li><Link to='/offer' className='cursor-pointer flex items-center p-2 hover:font-bold'><FaRegAddressCard size={15} className='mr-4'/>Offer</Link></li>
                    <li className='cursor-pointer flex items-center p-2 hover:font-bold'><FaHome size={15} className='mr-4'/>Help</li>
                    <li><Link to='/contact' className='cursor-pointer flex items-center p-2 hover:font-bold'><FaRegAddressCard size={15} className='mr-4'/>Contact</Link>
                    </li>
                </ul>
            </nav> 
        </div>
        

    </header>
  )
}

export default Navbar