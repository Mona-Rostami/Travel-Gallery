import React from "react"
function Gallery(){
    return(
        <div className='max-w-[1140px]  md:flex m-auto mt-[-2vh] object-cover'>
            <div className='relative p-4'>
                 <img  className='md:h-[30vh] md:w-[38vw] h-[60vw]'src="https://cdn01.eavartravel.com/2023/8/28f1e2ea-6db7-4612-917c-fdc4e30163e3.jpg" alt=""/>
                 <h1 className=' absolute z-10 left-[20%] top-[15%] text-white text-3xl  font-medium'>Esfahan</h1>

            </div>
            <div className='relative p-4 '>
            <img  className=  ' md:h-[30vh] md:w-[38vw]'src="https://irancharterbackup.s3.ir-thr-at1.arvanstorage.ir/2024/11/Travel-Costs-to-Mashhad-A-Comprehensive-Guide-to-Travel-Expenses-in-Mashhad.jpeg" alt="" />
                <h1 className=' absolute z-10 left-[19%] top-[8%] text-white text-3xl  font-medium'>Mashhad</h1>
            </div>
            <div className='relative p-4'>
            <img   className=  ' md:h-[30vh] md:w-[38vw]'src="https://gsia.sums.ac.ir/Images/UserFiles/1/image/Shiraz%20Picture/Nasirol-Molk-Mosque(1).jpg" alt="" />
                <h1 className=' absolute z-10 left-[20%] top-[15%] text-white text-3xl  font-medium'>Shiraz</h1>
            </div>
        </div>
    )
}
export default Gallery

