import React from "react";
function Photlist() {
  return (
    <div className=' max-w-[1140px] h-full  m-auto w-full py-16 px-4 grid grid-cols-4 gap-4 justify-center items-center text-center'>
      <div className=' w-full '>     
           <h2 className=' pb-8 text-2xl translate-x-[37vw] '>Gallery</h2>
      </div>
        <div className=' col-span-4 row-span-2'><img className='w-full h-full object-cover' src="https://orienttrips.com/mag/wp-content/uploads/2024/04/Kish-Island-Persian-Gulf-Iran-1.jpg" alt="" /></div>
        <div><img className='w-full h-full object-cover' src="https://irancharterbackup.s3.ir-thr-at1.arvanstorage.ir/2024/11/Travel-Costs-to-Mashhad-A-Comprehensive-Guide-to-Travel-Expenses-in-Mashhad.jpeg" alt="" /></div>
        <div> <img  className='w-full h-[14vw] object-cover' src="https://www.adventureiran.com/wp-content/uploads/2021/05/Shikhlotfollah-mosque-Imam-squre-Esfahan-UNESCO-site-Iran-ADVENTUREIRAN-1500-1140x530.jpg" alt="" /></div>
        <div><img className='w-full h-[14vw] object-cover' src="https://iranparadise.com/wp-content/uploads/2020/10/Sheikh-Safiuddin.jpg" alt="" /></div>
        <div><img className='w-full h-[14vw] object-cover' src="https://gsia.sums.ac.ir/Images/UserFiles/1/image/Shiraz%20Picture/Nasirol-Molk-Mosque(1).jpg" alt="" /></div>
    </div>
  )
}
export default Photlist;

