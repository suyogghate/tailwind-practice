import React from 'react'
import carImg from '../assets/car.png';
function Car() {
  return (
    <div className='w-full flex bg-white py-16 px-16 justify-between '>
      <div className='max-w-[1024px] mx-auto grid md:grid-cols-2 gap-4' >
        <img src={carImg} alt="car" className='w-[500px] mx-auto my-4' />
      </div>
      <div className="flex flex-col justify-center">
        <p className=" text-black font-bold block bg-slate-800 w-max -ml-5 px-6 py-1 rounded-r-lg">
          PREMIUM CARS AVAILABLE
        </p>
        <h1 className='md:tetx-4xl sm:text-3xl text-2xl '>
          Drive any vehcile you want
        </h1>
        <p className='text-gray-500'>
          1 Month+ Rentals & Subscriptions The flexible alternative to leasing or buying No commitment & no penalties for early exit
        </p>
        <button
          type="button"
          className='bg-black w-48 rounded-md font-medium my-6 mx-0 py-3 text-[#8cecff]'>
          Get Started
        </button>
        </div>
      </div>
      )
}

      export default Car