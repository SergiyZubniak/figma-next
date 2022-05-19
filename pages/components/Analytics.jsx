import React from 'react'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' alt='hereUa' src='/laptop.jpg'/>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-green-300 font-bold'>Data Analytics Dashboard</p>
            <h1 className='text-3xl sm:text-4xl md:text-4xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
            <p>Hellou my team a u very heppy about it</p>
            <button className='outline-none bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:py-6 text-black'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
