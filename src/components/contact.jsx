import React from "react";

function Sende(){
    return(
        <div className='w-full md: mx-w-[1140px] m-auto mt-[10vh] '>
            <p className=' pb-5 object-cover text-2xl whitespace-nowrap  translate-x-[10%] translate-y-[120px]'>consectetur adipiscing</p>
            <h2 className=' pb-25  object-fill text-3xl whitespace-nowrap translate-x-[5%] '>Lorem ipsum dolor sit amet</h2>
            <div className='object-cover grid md:grid-cols-2'>
            <img src="https://irandoostan.com/dostcont/uploads/2018/01/Taq-e-Bostan-2-1.jpg" className='w-[70%] object-cover h-[30vh] m-auto mt-14 ' alt="/" />
            
            <div>
                <form action="">
                  <div className=' grid grid-cols-2 translate-x-[10%] w-[80%] mt-[5vh] '>
                  <input className=' border m-2 p-2' type="text" placeholder="first"/>
                    <input className=' border m-2 p-2' type="text"  placeholder="last" />
                    <input className=' border m-2 p-2' type="text"  placeholder="emile"/>
                    <input className=' border m-2 p-2' type="text"  placeholder="phone" />
                    <input className=' border m-2 p-2' type="text" placeholder="old" />
                    <input  className=' border m-2 p-2'type="text"  placeholder="Address"/>
                    <textarea className=' border col-span-2 m-2 p-2'></textarea>
                    <button className='col-span-2 m-16'>Submit</button>
                  </div>
                </form>
                </div>
            </div>
                
        </div>
    )
}

export default Sende
