import {MenuAlt3Icon, MenuAlt1Icon } from '@heroicons/react/outline'
import {useState} from 'react'
import Link from 'next/link'


function Navbar() {
const [nav,setNav] = useState(true)

const handleNav = () => {
    setNav(!nav)
}
  return (
    <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24">
       <h1 className="w-full text-3xl font-bold text-green-300 ">Next.</h1>
        <ul className="space-x-4 hidden md:flex">
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <MenuAlt3Icon className='w-6 h-6 text-white'/> : <MenuAlt1Icon className='w-6 h-6 text-white'/>}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%]  border-r border-gray-900 h-1/2 bg-[#000300] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-green-300 ">Next.</h1>
        <ul className="p-4 uppercase">
          <Link href='http://localhost:3001/' ><a><li className='p-4 border-b border-gray-600'>Home</li></a></Link>  
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar