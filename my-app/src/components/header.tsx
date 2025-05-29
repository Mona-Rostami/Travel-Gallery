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
    <div className="  w-[100%] h-[100vh]  ">
      <div
        onClick={menue}
        className=" md:hidden absolute top-[15px] left-[93vw]"
      >
        <CgFormatJustify size={"19px"} />
      </div>
      <ul className=" max-md:hidden px-4 flex justify-end  pl-3">
        <li className="p-3 z-10">gallery</li>
        <li className="p-3 z-10">gallery</li>
        <li className="p-3 z-10">gallery</li>
        <li className="p-3 z-10">gallery</li>
      </ul>
      <div className=" absolute flex w-[100%] bg-cover bg-amber-600 max-md:justify-end max-md:mt-12 -translate-y-12  ">
        <div className="p-3">
          {" "}
          <FaFacebook />
        </div>
        <div className="p-3">
          {" "}
          <IoLogoInstagram />
        </div>
        <div className="p-3">
          <FaTelegram />
        </div>
        <div className="p-3">
          <FaLinkedin />
        </div>
      </div>
      {/* mobile */}

      <div
        onClick={menue}
        className={Nv ? "absolute  w-[100%] h-[100vh]   " : "hidden"}
      >
        <ul className=" text-[20px]  h-[100vh] w-[100%]  bg-black/85 flex  flex-col gap-y-[80px]  justify-center items-center text-amber-50">
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
