function Gallery() {
  return (
    <div className=" w-full md:h-[30vh] bg-cover p-4   md:mt-[-16vh] lg:mt-[-20vh] ">
      <div className=" z-[-1]  grid justify-center  md:grid-cols-3 gap-10   ">
        <div>
                    <h1 className=" absolute mt-[30px] text-cyan-50 ml-[50px] text-2xl md:text-[2vw]  md:ml-[20px]">shiraz</h1>

          <img
            className="rounded-4xl h-full "
            src="https://tizgasht.com/wp-content/uploads/2024/03/%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%D8%8C-%D8%AD%D9%85%D8%A7%D9%85-%D9%88-%D9%85%D8%B3%D8%AC%D8%AF-%D9%88%DA%A9%DB%8C%D9%84-%D8%AA%DB%8C%D8%B2%DA%AF%D8%B4%D8%AA-2-1.jpg"
            alt=""
          />
        </div>

        <div className="">
                    <h1 className=" absolute mt-[30px] text-cyan-50 ml-[50px] text-2xl md:text-[2vw] md:ml-[20px]">kish</h1>

          <img
            className="rounded-4xl h-full "
            src="https://irancharterbackup.s3.ir-thr-at1.arvanstorage.ir/2025/04/kish-island.jpg"
            alt=""
          />{" "}
        </div>

        <div className=" ">
          <h1 className=" absolute mt-[30px] text-cyan-50 ml-[50px] text-2xl md:text-[2vw] md:ml-[20px]">Gilan</h1>
          {" "}
          <img
            className="rounded-4xl h-full"
            src="https://media.tehrantimes.com/d/t/2021/04/16/4/3742692.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
