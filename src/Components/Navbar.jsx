import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
const [nav,setNav]= useState(false);

const handleNav = () =>{
    setNav(!nav);
}
  return (
    <div className='flex gap-4 text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1
        className={
            !nav ?('w-full text-xl font-bold text-[#8cecff] sm:text-2xl md:text-3xl ease-in-out duration-500 '):(
         '  w-full text-xl font-bold text-[#8cecff] opacity-0 sm:text-2xl md:text-3xl ease-in-out duration-500'
            )
        }
        >
           TAILWIND REACT CARS  
        </h1>
        <ul className='hidden md:flex'>
            <l1 className="p-4 hover:text-[#8cecff] cursor-pointer"> Home </l1>
            <l1 className="p-4 hover:text-[#8cecff] cursor-pointer"> Company </l1>
            <l1 className="p-4 hover:text-[#8cecff] cursor-pointer"> Resources </l1>
            <l1 className="p-4 hover:text-[#8cecff] cursor-pointer"> Resources </l1>
            <l1 className="p-4 hover:text-[#8cecff] cursor-pointer"> Contact </l1>

        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? (<AiOutlineClose size={20} className="cursor-pointer"/>):(<AiOutlineMenu size={20} className="cursor-pointer"/>)}
        </div>
        <div
        className={nav ? 'fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' :'ease-in-out duration-500 fixed left-[-100%] '}>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray cursor-pointer '> Home</li>
                <li className='p-4 border-b border-gray cursor-pointer '> Company</li>
                <li className='p-4 border-b border-gray cursor-pointer '> Resources</li>
                <li className='p-4 border-b border-gray cursor-pointer '> Resources</li>
                <li className='p-4 border-b border-gray cursor-pointer '> Contact</li>


            </ul>
        </div>
    </div>
  )
}

export default Navbar