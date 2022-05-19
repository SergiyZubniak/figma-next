import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mx-auto flex  flex-col justify-center items-center h-screen">
            <p className="uppercase text-green-300 font-bold p-2">Growing with FronteND DEVELOPMENt</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font bold md:py-6">Grow with data.</h1>
            <div className='flex'>
                <p className="md:text-5xl sm:text-4xl text-xl font-bold mr-4 md:mr-8">Fast,flexible financing for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold' strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <button className='outline-none bg-green-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:py-6 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero