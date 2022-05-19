import React from 'react'

function Newsletter() {
  return (
    <div className='w-full p-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4'>
                <h1 className='font-bold text-4xl md:text-5xl'>Want tips & tricks to optimize our flow?</h1>
                <p className='text-xl md:text-2xl'>Sign up to our newsletter and stay up to date.</p>

            </div>
        
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <input className='p-3 w-full rounded-md text-black ' placeholder='Enter Email' type="text" />
                    <button className='outline-none bg-green-300 w-[200px] rounded-md font-medium ml-4 my-6 px-6 px-3 mx-auto py-3 md:py-6 text-black'>Notify me</button>
                </div>
                <p>We are care about u. Read our <span className='text-green-300 border-b-2 border-b-green-300'>Privacy Police</span></p> 

            </div>
        </div>
    </div>
  )
}

export default Newsletter