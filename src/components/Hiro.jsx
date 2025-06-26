import React from "react";
function Hiro() {
  return (
    <div className=" relative w-full h-[90vh]">
      <img
        src="https://blog.flysepehran.com/wp-content/uploads/2023/06/Olsabelangah.jpg"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className='  max-w-[1140px] m-auto'>
        <div className=' absolute top-1/4  rounded-bl-2xl  rounded-tr-2xl max-w-full  flex flex-col bg-gray-800/75 text-white object-cover p-4 m-4'>
          <h1 className='font-bold md:text-4xl text-2xl'> Find your Special Trip</h1>
          <h2 className='ms:text-4xl text-2xl py-4 italic'>With Weekaway</h2>
          <p className=' font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}
export default Hiro;
