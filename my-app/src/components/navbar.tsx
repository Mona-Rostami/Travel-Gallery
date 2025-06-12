
import { MdPhoneEnabled } from "react-icons/md";
import { BsChatSquareDots } from "react-icons/bs";
import "react";
import { LuClock2 } from "react-icons/lu";

function Navbar() {
  return (
    <div className="flex justify-between lg:p-16 w-full h-[8vh]  bg-gray-700 bg-cover">
      <div className="text-[5vw] translate-y-[2vh] pl-2">
        <BsChatSquareDots  />
      </div>
               {/* <button  className=" translate-x-[-10%] h-10 "> Get a Free Quote</button> */}

      <div className=" max-md:hidden flex ">
        <div className="md:text-[3vw] mr-[1vw] translate-y-[-5%] ">
          <p className="">9am </p>
        </div>
        <div className=" md:text-[3vw] mr-[2vw]  translate-y-[10%]">
          <LuClock2 />
        </div>

        <p className="md:text-[3vw] translate-x-[-3%] translate-y-[-2%]">123-456-789</p>
        <div className=" md:text-[3vw]  mr-[3vw] translate-y-[5%]  ">
          <MdPhoneEnabled  />
        </div>
       
      </div>
    </div>
  );
}
export default Navbar;
