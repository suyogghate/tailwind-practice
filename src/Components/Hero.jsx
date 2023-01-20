import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function Hero() {
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['BMW', 'Toyota', 'Mercedes', 'Honda', 'Tesla','Tesper'],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 300,
      loop: true,
      smartBackspace: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])


  return (
    <div className='text-white '>
      <div className='max-w-3xl -mt-24 w-full mx-auto h-screen text-center flex flex-col justify-center px-2'>
        <p className='text-[#8cecff] font-bold p-2'>
          A FLEET THAT MEETS YOUR NEEDS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Worldwide location
        </h1>
        <div>
          <p className="md:-5xl sm:text-4xl text-xl font-bold py-4 ">
            Any car you want-{"  "}
            <span className='text-gray-500 md:text-5xl sm:text-4xl text-xl font-bold'
              ref={el} />
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 '>
          We propose tailor-made solutions to fit your mobility needs 
          {' \u0026'} your budget. No blackout periods with our
          discount rates!
        </p>
        <button
        type="button"
        className='bg-[#8cecff] w-48 rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero