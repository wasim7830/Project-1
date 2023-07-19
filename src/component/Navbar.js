import React,{useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar(){
  const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    }
  return(
    <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white bg-sky-900 border-b rounded'>
      <h1 className='w-full text-3xl font-bold text-[black] '>WsCube Tech.</h1>
      <ul className='hidden md:flex'>
        <li className=' px-3 py-2 text-bold text-xl rounded-lg hover:bg-slate-100 hover:text-slate-900'>Home</li>
        <li className=' px-3 py-2 text-bold text-xl rounded-lg hover:bg-slate-100 hover:text-slate-900 '>Company</li>
        <li className=' px-3 py-2 text-bold text-xl rounded-lg hover:bg-slate-100 hover:text-slate-900 '>Resources</li>
        <li className=' px-3 py-2 text-bold text-xl rounded-lg hover:bg-slate-100 hover:text-slate-900 '>About</li>
        <li className=' px-3 py-2 text-bold text-xl rounded-lg hover:bg-slate-100 hover:text-slate-900 '>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[black] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}