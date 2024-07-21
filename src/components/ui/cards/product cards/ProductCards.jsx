import React from "react";
import { PiUsersThreeLight } from "react-icons/pi";
import { PiShoppingBagLight } from "react-icons/pi";
export const ProductCards = (props) => {
  return (
    <div className="flex justify-center">
      <div className={`group relative ${props.rowWidth}`}>
        <div
          className={`absolute z-10 flex left-[-10px] top-[-5px] rotate-[-35deg] group-hover:rotate-0 duration-300 ${props.headingOff}`}
        >
          <div className="bg-secondary-blue w-[55px] h-[55px] flex flex-col justify-center items-center rounded-[15px] text-white ">
            <p className="text-[20px] mt-[-8px]">{props.headingOff}</p>
            <p className="text-[11px] mt-[-8px]">تخفیف</p>
          </div>
        </div>
        <div
          className={`relative bottom-0 group-hover:bottom-2 mt-4 bg-white rounded-md flex ${props.row} ${props.col} drop-shadow-[0px_0px_2px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5) duration-300 ${props.className}`}
        >
          <div className="basis-[50%]">
            <a href="/">
              <img
                className={`rounded-t-md ${props.corner} object-cover w-[250px] ${props.width} h-[150px] ${props.hight}`}
                src={props.img}
              />
            </a>
          </div>
          <div className="flex mr-4">
            <a
              className={`absolute bg-gray-300/50 w-[45px] h-[45px] rounded-[4px] flex justify-center items-center -z-20 opacity-0 group-hover:z-10 group-hover:opacity-100 group-hover:mt-0 mt-4 hover:bg-white/90  text-white text-[35px] hover:text-gray-600  duration-[450ms] top-[100px] ${props.margin}`}
              href="/"
            >
              <PiShoppingBagLight />
            </a>
          </div>
          <div className="basis-[30%] mt-3 mr-4 pt-[5px] pb-[35px]">
            <h3>
              <a
                className=" hover:text-blue-700 duration-200 text-[16px] "
                href="/"
              >
                {props.title}
              </a>
            </h3>
          </div>
          <div className="basis-[20%] bg-primary-gray rounded-b-md flex justify-center items-center p-[7.5px]">
            <div className="flex basis-[20%] justify-center gap-2 items-center mr-1">
              <PiUsersThreeLight className="text-[24px]" />
              <span className="text-[18px] text-secondary-gray mt-1">
                {props.count}
              </span>
            </div>
            <bdi className="flex justify-end basis-[40%] text-[18px] text-green-500 relative ml-4">
              {props.discount}
            </bdi>
            <bdi className="flex justify-center basis-[40%] text-[18px] text-secondary-gray">
              {props.price}
            </bdi>
            <div
              className={`absolute bg-secondary-gray w-[85px] h-[1px] rotate-[170deg] left-[10px] ${props.line}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
