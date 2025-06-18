type InputProps={
    labels:string
}
function Input({labels}:InputProps){
    return(
        <div className="  mt-[10vh]">
            <form action="">
                <div className=" ">
                    <input className=' md:text-[3vw] md:p-[3vw] border border-amber-50  m-2 p-2 ml-[10%]  w-36 md:w-[30vw] placeholder-amber-100 ' placeholder={labels}></input>
                </div>
            </form>
        </div>
    )
}
export default Input