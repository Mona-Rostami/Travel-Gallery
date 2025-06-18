import Input from "./input";
function Massage() {
  return (
<div className=" w-full h-[100vh] p-0 m-0 box-border bg-[url('https://www.hitehranhostel.com/wp-content/uploads/2020/04/asalem-khalkhal-01.jpg')] bg-no-repeat bg-cover">
  <form action="" className="">
<div className="  grid grid-cols-2 place-content-center backdrop-blur-[1vw]  ">
  <div className="md:ml-[20%]"><Input labels='First'/></div>
  <div className=" "><Input labels='Last'/></div>
  <div className="md:ml-[20%]"><Input labels='Phone'/></div>
  <div className=""><Input labels='Email'/></div>
 <div className="translate-x-[50%] md:translate-x-[60%] "><Input labels='Adress'/></div>
<textarea className=" border-2 border-amber-50 col-span-2 mt-[10%] w-[90vw] h-[30vh] resize-none translate-x-[5vw] "  name="" id=""></textarea>
<div className=" mt-[20%] "><button className="w-[25vw] h-[5vh]  mt-[5vh] ml-[75%] ">Save </button></div>
</div>
</form>
</div>
  );
}
export default Massage;
