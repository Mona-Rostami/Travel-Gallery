import { useState } from "react";
import { CgFormatJustify } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Header() {
  const [Nv, Setnave] = useState(false);
  const menue = () => {
    Setnave(!Nv);
  };
  return (
    <div className=" w-full h-screen bg-cover  ">
      <div onClick={menue} className="  md:hidden absolute right-2 top-16 ">
        <CgFormatJustify size={"19px"} color="#E8F9FD" />
      </div>

      <div className="   w-full  bg-cover bg-emerald-700/90">
           
            
            
      <div className="md:mr-[2%] md:p-[2%] p-2"> <ul className="  max-md:hidden  text-2xl md:text-[3vw]  flex justify-end  gap- max-md:translate-y-[2vh] ">
          <li className="p-3 ">gallery</li>
          <li className="p-3 ">gallery</li>
          <li className="p-3 ">gallery</li>
          <li className="p-3 ">gallery</li>
        </ul>
         <div className="  flex w-full h-7 pt-2 pl-3 gap-[5%] md:translate-y-[-4vh] lg:translate-y-[-3vh] md:text-[3vh]">
           <FaFacebook color="#E8F9FD" />
            
           
            
              <IoLogoInstagram  color="#E8F9FD"/>
            
            
              <FaTelegram color="#E8F9FD" />
           
           
              <FaLinkedin  color="#E8F9FD"/>
         </div>
        </div>
       
      
      </div>

      {/* mobile */}

      <div
        onClick={menue}
        className={
          Nv
            ? " overflow-hidden md:hidden h-screen  left-[-100%] ease-in duration-300 flex-col  "
            : " absolute left-[-100%] ease-in duration-500"
        }
      >
        <ul className="  absolute top-[14vw] text-[20px]  h-screen w-[100%]  bg-black/95 flex  flex-col gap-y-[80px]  justify-center items-center text-amber-50 ">
          <li>
            <a href="#gallery">gallery</a>
          </li>

          <li>
            <a href="#gallery">gallery</a>
          </li>
          <li>
            <a href="#gallery">gallery</a>
          </li>
          <li>
            <a href="#gallery">gallery</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
