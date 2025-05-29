import { CgFormatJustify } from "react-icons/cg";
import { MdPhoneEnabled } from "react-icons/md";
import { BsFillPaletteFill } from "react-icons/bs";
import "react";
import { LuClock2 } from "react-icons/lu";

function Navbar() {
  return (
    <div className="flex justify-between  p-4 w-[100%]  md:h-16 bg-amber-300 bg-cover">
      <div>
        <BsFillPaletteFill />
      </div>

      <div className="  flex ">
        <div className=" translate-x-[-25px] translate-y-[-2px]">
          <p className=" ">9am </p>
        </div>
        <div className=" translate-y-[2px] translate-x-[-18px]">
          <LuClock2 />
        </div>

        <p className=" translate-x-[-5px]   translate-y-[-2px]">123-456-789</p>
        <div className="pr-4 translate-y-[2px]">
          <MdPhoneEnabled />
        </div>
       
      </div>
    </div>
  );
}
export default Navbar;
