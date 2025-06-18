function Photo() {
  return (
    <div className="  w-full ">
      <div className="  ">
        {" "}
        <img
          className=" z-[-1] md:mt-[103px]  absolute top-[-12vh] left-0 w-full h-full max-md:h-[125vh] object-cover"
          src="https://wallpapershome.com/images/pages/pic_v/17851.jpg"
          alt="background"
        />
        <div className=" absolute  top-0 md:top-[5vw] lg:top-[45vw] mt-96 font-bold max-w-svw z-[-1]">
          <h1 className=" text-[5vw]">Lorem ipsum dolor sit amet</h1>
          <p className=" italic leading-relaxed text-justify p-1 text-[4vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Photo;
