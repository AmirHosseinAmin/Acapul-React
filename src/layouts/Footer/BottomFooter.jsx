import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";

export const BottomFooter = () => {
  return (
    <>
      <div className=" w-full flex justify-center  ">
        <div className="bg-[#0693e3] w-[30%] h-[40px] relative bottom-[25px] rounded-[14px] -z-0"></div>
      </div>
      <div
        className=" bg-[url('../../assets/images/bg-main-footer.svg')] bg-[#feffffb8] h-[125px] w-full relative "
        style={{ backgroundSize: "13% auto", backgroundBlendMode: "color" }}
      >
        <div>
          <div className="  max-w-[1140px] mx-auto pt-[50px] flex justify-between ">
            <p className="text-[#7E7E7E] text-[14px] ">
              تمامی حقوق برای آکاپال محفوظ می باشد
            </p>
            <div className="flex items-center overflow-hidden whitespace-nowrap w-[73px]  transition-all ease-in-out duration-1000  hover:w-[250px]   ">
              <div className="ml-[5px] bg-blue-500 flex p-[5px] items-center rounded justify-center">
                <IoCodeSlashSharp color="white" fontSize="1.1em" />
              </div>
              <div className="text-[14px]">طراحی و توسعه:توسط تیم نیژن</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
