import React, { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { GiRotaryPhone } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Dialer = (props) => {
  const [isClose, setIsClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("");
  const [isOpenHeader, setIsOpenHeader] = useState(props.Open);

  const dialerCloseHandler = () => {
    setIsClose(true);
    setIsOpen(false);
  };

  const dailerOpenHandler = () => {
    setIsOpen(true);
    setIsClose(false);
  };

  useEffect(() => {
    
    if ((isClose == true && isOpen == false || isOpenHeader == false)) {
      setDisplay("opacity-0");
    } else if ((isClose == false && isOpen == true || isOpenHeader == true)) {
      setDisplay("opacity-100 z-30");
    } else {
    }
  });

 
  return (
    <div>
      <div
        onClick={dailerOpenHandler}
        className="fixed top-[87.5%] right-[3%] z-20 cursor-pointer"
      >
        <div className=" group flex bg-secondary-blue w-[55px] h-[55px] rounded-full justify-center items-center hover:bg-white duration-[150ms] drop-shadow-[0px_1px_5px_rgba(0,0,0,0.25)]">
          <FiPhone className="w-[22.5px] h-[22.5px] stroke-[2px] stroke-white rotate-[270deg] group-hover:stroke-secondary-blue duration-[150ms]" />
        </div>
      </div>
      <div
        className={`fixed ${display} opacity-0 -z-20 duration-150 flex justify-center items-center w-full h-full top-0 left-0`}
      >
        <div
          className="fixed bg-white/80 w-full h-full"
          onClick={dialerCloseHandler}
        ></div>
        <div className="flex flex-row justify-center items-center w-[65%] h-[500px] rounded-xl drop-shadow-xl  bg-white">
          <div className="flex flex-row ">
            <div className="basis-[50%] m-5 flex flex-col gap-3">
              <h3 className="text-[22px]">درخواست مشاوره رایگان</h3>
              <form className="flex flex-col gap-5" action="">
                <label htmlFor="">
                  نام<span className="text-red-800">*</span>
                </label>
                <input
                  className=" outline-none rounded-md border-primery-gray drop-shadow-[1px_1px_2.4px_rgba(0,0,0,0.1)]  border-[1px] p-2 "
                  type="text"
                />{" "}
                <label htmlFor="">
                  ایمیل<span className="text-red-800">*</span>
                </label>
                <input
                  className="outline-none rounded-md border-primery-gray drop-shadow-[1px_1px_2.4px_rgba(0,0,0,0.1)]  border-[1px] p-2 "
                  type="text"
                />{" "}
                <label htmlFor="">
                  تلفن<span className="text-red-800">*</span>
                </label>
                <input
                  className="outline-none rounded-md border-primery-gray drop-shadow-[1px_1px_2.4px_rgba(0,0,0,0.1)]  border-[1px] p-2 "
                  type="text"
                />
                <button
                  className="w-fit py-[10px] px-[17.5px] rounded-lg drop-shadow-[1px_1px_8px_rgb(120,197,119)] bg-[rgb(120,197,119)] mt-1 text-white"
                  type="submit"
                >
                  ارسال
                </button>
              </form>
            </div>
            <div className="basis-[50%] m-5" onClick={dialerCloseHandler}>
              <div className="flex justify-end cursor-pointer">
                <IoClose className="text-[25px] text-secondary-gray" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <GiRotaryPhone className="text-[250px] text-secondary-blue" />
                <a className="text-[40px] text-secondary-blue" href="">
                  <p>۰۹۱۴۳۱۶۷۸۸۷</p>
                </a>
                <p className=" flex text-center text-[14px] text-secondary-gray">
                  در صورت نیاز به مشاوره می توانید فرم را تکمیل نمایید و یا با
                  ما در ارتباط باشید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialer;
