import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./HumburgerMenu.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaFoursquare } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
}

export const HumburgerMenu = () => {
  return (
    <Menu
      isOpen={false}
      noOverlay
      right
      customBurgerIcon={
        <div className="grid h-full overflow-hidden text-[3px] items-center p-2">
          <span className="h-[2px] w-full bg-black"></span>
          <span className="h-[2px] w-full bg-black"></span>
          <span className="h-[2px] w-full bg-black"></span>
        </div>
      }
    >
      <div>
        <ul className="text-[15px] flex flex-col gap-3 mr-[-20px] mt-[-10px]">
          <li>
            <a id="home" className="menu-item" href="#">
              صفحه اصلی
            </a>
          </li>
          <li className="flex flex-wrap flex-row justify-between items-center">
            <a id="about" className="menu-item" href="#">
              محصولات
            </a>
            <input
              className="peer hidden"
              type="checkbox"
              id="ham-one"
              name="ham-one"
            />
            <label
              className="rotate-90 peer-checked:rotate-0 duration-300"
              htmlFor="ham-one"
            >
              <div>
                <IoIosArrowDown className=" text-secondary-gray " />
              </div>
            </label>
            <ul className="text-[rgba(157,157,157,0.67)] gap-3 -z-0 opacity-0 flex flex-col duration-500 basis-[100%]  peer-checked:opacity-100 mb-[-110px] peer-checked: peer-checked:z-10 peer-checked:mb-[10px] peer-checked:mr-0 peer-checked:mt-[20px] border-secondary-blue border-r-[1px] pr-[10px] -mr-4 ">
              <li>
                <a href="#">معماری</a>
              </li>
              <li>
                <a href="#">مسافربری</a>
              </li>
              <li>
                <a href="#">طراحی</a>
              </li>
            </ul>
          </li>
          <li className="flex flex-wrap flex-row justify-between items-center z-10 bg-[#212529]">
            <a id="contact" className="menu-item" href="#">
              مقالات
            </a>
            <input
              className="peer hidden"
              type="checkbox"
              id="ham-two"
              name="ham-two"
            />
            <label
              className="rotate-90 peer-checked:rotate-0 duration-500"
              htmlFor="ham-two"
            >
              <div>
                <IoIosArrowDown className=" text-secondary-gray " />
              </div>
            </label>
            <ul className="text-[rgba(157,157,157,0.67)] gap-3 -z-0 opacity-0 flex flex-col duration-500 basis-[100%] mt-[-20px] peer-checked:opacity-100 mb-[-40px] peer-checked: peer-checked:z-10 peer-checked:mb-[10px] peer-checked:mr-0 peer-checked:mt-[20px] border-secondary-blue border-r-[1px] pr-[10px] -mr-9 ">
              <li>
                <a href="#">مقالات علمی</a>
              </li>
              <li>
                <a href="#">مقالات غیر علمی</a>
              </li>
            </ul>
          </li>
          <li className="z-10 bg-[#212529] w-full">
            <a className="menu-item--small" href="#">
              ارتباط با ما
            </a>
          </li>
          <li>
            <a className="menu-item--small" href="#">
              درباره ما
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[300px] bg-[rgba(67,67,67,0.5)] h-[1px] mt-[40px] mr-[-42.5px]"></div>
      <div className="text-[rgba(157,157,157,0.67)] text-[16px] mt-[30px]">
        <a className="flex flex-row gap-3 justify-center" href="">
          <FaTwitter />
          <FaInstagram />
          <FaVimeoV />
          <FaBehance />
          <FaFoursquare />
          <SiAparat />
        </a>
      </div>
    </Menu>
  );
};
