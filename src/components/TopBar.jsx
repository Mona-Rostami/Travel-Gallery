import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <BsChatDots size={30} className='text-[var(--primary-dark)] mr-2'></BsChatDots>
        <h1 className='text-xl font-bold text-gray-700'>weekawa</h1>
      </div>

      <div className='flex'>
        <div  className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'></AiOutlineClockCircle>
          <h1 className='text-sm text-gray-700'>9AM-5AM</h1>
        </div>

        <div className='hidden md:flex items-center px-6'>
          <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'></AiFillPhone>
          <h1 className='text-sm text-gray-700'>123-456-789</h1>
        </div>
        <div className=" translate-x-3"> <button>Get a free Quote</button></div>
       
      </div>
    </div>
  );
};
export default TopBar;
