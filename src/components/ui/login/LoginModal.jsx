import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
export const LoginModal = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClose, setIsClose] = useState(false);
  const [display, setDisplay] = useState("");

  const closeModalhandler = () => {
    setIsOpen(!isOpen);
    setIsClose(!isClose);
    console.log(isOpen, isClose);
  };
  useEffect(() => {
    setIsOpen(!isOpen);
    setIsClose(!isClose);
  }, [onChange]);

  useEffect(() => {
    if (isOpen == false && isClose == true) {
      setDisplay("opacity-0 -z-20");
    } else if (isOpen == true && isClose == false) {
      setDisplay("opacity-100 z-20");
    } else {
    }
  });

  return (
    <div
      className={`fixed ${display} duration-150 flex justify-center items-center w-full h-full top-0 left-0`}
    >
      <div
        className="fixed bg-white/80 w-full h-full"
        onClick={closeModalhandler}
      ></div>
      <div className="flex flex-col bg-white drop-shadow-xl rounded-xl w-[40%] h-[450px]">
        <div className="flex items-center my-[30px] ">
          <div className="basis-[3%]">
            <div className="bg-secondary-blue w-[15px] h-[40px] rounded-e-lg"></div>
          </div>
          <div className="basis-[30%] mr-10 ">
            <div className="text-[30px] text-secondary-gray">
              <p>ورود</p>
            </div>
          </div>
          <div
            className=" basis-[67%] flex justify-end cursor-pointer"
            onClick={closeModalhandler}
          >
            <div className="flex justify-center items-center text-[35px] text-white bg-secondary-blue w-[40px] h-[40px] rounded-lg ml-4">
              <IoClose />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <form className="flex flex-col gap-5  w-[85%] " action="">
              <div className="flex items-center border-[1px] rounded-sm px-[10px] ">
                <input
                  className="outline-none p-[10px] w-[95%]"
                  type="text"
                  name=""
                  id=""
                  placeholder="نام کاربری"
                />
                <CiUser className="text-[27.5px] text-secondary-gray" />
              </div>
              <div className="flex items-center w-full border-[1px] rounded-sm px-[10px] ">
                <input
                  className="outline-none p-[10px] w-[95%]"
                  type="text"
                  name=""
                  id=""
                  placeholder="رمز عبور"
                />
                <CiUnlock className="text-[27.5px] text-secondary-gray" />
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex justify-between gap-5 text-[14px] mx-10 mt-8 ">
              <div className="flex gap-2">
                <input type="checkbox" name="rememberme" id="rememberme" />
                <label className="text-secondary-gray" htmlFor="rememberme">
                  مرا به خاطر داشته باش
                </label>
              </div>
              <div>
                <a
                  className="text-gray-500 hover:text-primary-blue duration-200"
                  href=""
                >
                  رمز عبور را فراموش کرده اید؟
                </a>
              </div>
            </div>
            <div className="flex justify-center bg-secondary-gray text-white rounded-[5px] w-[85%] p-3 cursor-pointer hover:bg-gray-600/80 duration-300">
              <p>ورود</p>
            </div>
            <div className="flex gap-4 text-[14px]">
              <p className="text-gray-800">هنوز عضو نشده اید؟</p>
              <a
                className="text-gray-500 hover:text-primary-blue duration-200"
                href=""
              >
                <span>عضویت در سایت</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
