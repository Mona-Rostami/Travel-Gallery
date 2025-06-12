function Album() {
  return (
    <div>
      <div className=" w-full h-[100vh]  bg-cover grid justify-center items-center ">
        <p className=" translate-x-[34%] mt-6 text-3xl text-emerald-950 md:text-[8vw]">Gallery</p>
        < div className="  w-[70vw] grid grid-cols-3    ">
          
            {" "}
            <img
              className=" col-span-3 md:w-[100vw]"
              src="https://blog.arianamedicaretour.com/wp-content/uploads/2023/05/%D9%85%D8%B4%D9%87%D8%AF-%D8%A7%D9%84%D9%85%D9%82%D8%AF%D8%B3-%D8%A8%D8%A7%D9%8A%D8%B1%D8%A7%D9%86.jpg"
              alt=""
            />
          
          
            {" "}
            <img
              className=" w-[29vw] h-[31vw] "
              src="https://itto.org/iran/image-bin/182609035232hf8fp1rtbu.jpg?fillit=1200x660"
              alt=""
            />
          
          
            {" "}
            <img className="col-span-2 w-[50vw]"
              src="https://img9.irna.ir/d/r2/2022/03/22/4/169549426.jpg?ts=1647933858875"
              alt=""
            />
          
        
            {" "}
            <img
              className="h-[19vw] w-[29vw]"
              src="https://cdn.tourinpersia.com/main/2021/06/badab-soort-mazandaran.jpg"
              alt=""
            />
        
          
            {" "}
            <img
              className="h-[19vw]"
              src="https://visitiran.ir/public/uploaded/68/de2e_standard_171362329556953.jpg"
              alt=""
            />


          
            {" "}
            <img
              className=" h-[19vw]"
              src="https://toursofiran.com/wp-content/uploads/2024/10/kashan-travel-guide.jpg"
              alt=""
            />

        </div>
      </div> 
    </div>
  );
}
export default Album;
