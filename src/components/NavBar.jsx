import React, { useState } from "react";
// import { BsChatSquareDots } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
const Navbar = () => {
  const [nv, setNav] = useState(false);
  const handeleNav = () => {
    setNav(!nv);
  };
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      <div onClick={handeleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* mobile menu */}
      <div
      onClick={handeleNav}
        className={
          nv ? ' overflow-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">home</a>
          </li> 
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8 ">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
