import React, { useState } from "react";
import el from "../../assets/images/header-images/Group-2.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { HumburgerMenu } from "../../components/ui/humburgerMenu/HumburgerMenu";
import { SearchDisplay } from "../../components/ui/searchDisplay/searchDisplay";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { PiShoppingBag } from "react-icons/pi";
import { LoginModal } from "../../components/ui/login/LoginModal";
import Dialer from "../../components/ui/dialer/Dialer_button";
export const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchDisplayHandler = () => {
    setSearchClicked(!searchClicked);
  };
  const loginClickedHandler = () => {
    setLoginClicked(!loginClicked);
  };

  const dailerOpenHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className=" flex w-full bg-white h-[90px] max-[350px]:h-[60px] z-10">
      <div className="grid grid-cols-12  items-center w-full space-x-2">
        <div className=" lg:col-span-1 md:col-span-1 col-span-3">
          <a href="/">
            <img
              className=" m-[5px] w-[115px] h-[30px]  md:h-[25px]  max-[350px]:h-[25px] max-[350px]:w-[90px]"
              src={el}
            />
          </a>
        </div>
        <div className="lg:col-span-7 md:col-span-6 col-span-3  ">
          <ul className="md:flex flex-row gap-2 lg:text-[14px] md:text-[12px] hidden mr-4">
            <li className="group relative p-[10px] md:p-[5px]">
              <a href="/">
                <span className=" text-secondary-gray ">صفحه اصلی</span>
                <div>
                  <div className="w-[0px] absolute group-hover:w-[15px] border-secondary-blue border-b-[3px] rounded-[3px] mt-[-1px] duration-[600ms]"></div>
                  <div className="w-[0px] absolute group-hover:w-[25px] border-secondary-gray border-b-[3px] rounded-[3px] mt-[4px] duration-[200ms]"></div>
                </div>
              </a>
            </li>
            <li className="group relative p-[10px] md:p-[5px]">
              <a href="/">
                <div className="flex flex-row items-center gap-[5px]">
                  <span className=" text-secondary-gray ">محصولات</span>
                  <IoIosArrowDown className=" text-secondary-gray " />
                </div>
                <div>
                  <div className="w-[0px] absolute  group-hover:w-[15px] border-secondary-blue border-b-[3px] rounded-[3px] mt-[-1px] duration-[600ms]"></div>
                  <div className="w-[0px] absolute group-hover:w-[25px] border-secondary-gray border-b-[3px] rounded-[3px] mt-[4px] duration-[200ms]"></div>
                </div>
              </a>
              <div className=" z-[-1] opacity-[0] translate-y-[10%]  bg-white rounded w-[250px] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.25)] h-max absolute mt-[10px] mr-[-10px] p-[10px] text-gray-800 group-hover:opacity-[100] group-hover:z-[10] group-hover:translate-y-0 duration-[200ms]">
                <ul>
                  <li className="p-[10px] hover:text-primary-blue w-fit">
                    <a href="">معماری</a>
                  </li>
                  <li className="p-[10px] hover:text-primary-blue w-fit">
                    <a href="">مسافربری</a>
                  </li>
                  <li className="p-[10px] hover:text-primary-blue w-fit">
                    <a href="">طراحی</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="group relative p-[10px] md:p-[5px]">
              <a href="/">
                <div className="flex flex-row items-center gap-[5px]">
                  <span className=" text-secondary-gray ">مقالات</span>
                  <IoIosArrowDown className=" text-secondary-gray " />
                </div>
                <div>
                  <div className="w-[0px] absolute group-hover:w-[15px] border-secondary-blue border-b-[3px] rounded-[3px] mt-[-1px] duration-[600ms]"></div>
                  <div className="w-[0px] absolute group-hover:w-[25px] border-secondary-gray border-b-[3px] rounded-[3px] mt-[4px] duration-[200ms]"></div>
                </div>
              </a>
              <div className=" z-[-1] opacity-[0] translate-y-[10%]  bg-white rounded w-[250px] drop-shadow-[0px_2px_3px_rgba(0,0,0,0.25)] h-max absolute mt-[10px] mr-[-10px] p-[10px] text-gray-800 group-hover:opacity-[100] group-hover:z-[10] group-hover:translate-y-0 duration-[200ms]">
                <ul>
                  <li className="p-[10px] hover:text-primary-blue w-fit">
                    <a href="">مقالات علمی</a>
                  </li>
                  <li className="p-[10px] hover:text-primary-blue w-fit">
                    <a href="">مقالات غیر علمی</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="group relative p-[10px] md:p-[5px]">
              <a href="/">
                <span className=" text-secondary-gray ">ارتباط با ما</span>
              </a>
              <div>
                <div className="w-[0px] absolute group-hover:w-[15px] border-secondary-blue border-b-[3px] rounded-[3px] mt-[-1px] duration-[600ms]"></div>
                <div className="w-[0px] absolute group-hover:w-[25px] border-secondary-gray border-b-[3px] rounded-[3px] mt-[4px] duration-[200ms]"></div>
              </div>
            </li>
            <li className="group relative p-[10px] md:p-[5px]">
              <a href="/">
                <span className=" text-secondary-gray ">درباره ما</span>
              </a>
              <div>
                <div className="w-[0px] absolute group-hover:w-[15px] border-secondary-blue border-b-[3px] rounded-[3px] mt-[-1px] duration-[600ms]"></div>
                <div className="w-[0px] absolute group-hover:w-[25px] border-secondary-gray border-b-[3px] rounded-[3px] mt-[4px] duration-[200ms]"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4 md:col-span-5 col-span-6 ">
          <div className="flex justify-end items-center gap-[5px]">
            <div
              className=" md:flex w-[50px] h-[50px] md:w-[45px] md:h-[45px]   bg-emerald-400 rounded-[5px] justify-center items-center hidden cursor-pointer"
              onClick={dailerOpenHandler}
            >
              <FiPhone className="w-[25px] h-[25px] stroke-[2px] stroke-white" />
            </div>

            <a className="cursor-pointer" onClick={searchDisplayHandler}>
              <div className=" md:flex w-[50px] h-[50px] md:w-[45px] md:h-[45px] bg-primary-blue rounded-[5px] justify-center items-center hidden">
                <IoSearch className="w-[25px] h-[25px] text-white " />
              </div>
            </a>
            <a href="/">
              <div className=" flex md:w-[45px] md:h-[45px] bg-primary-gray rounded-[5px] justify-center items-center w-[35px] h-[35px]">
                <MdOutlineShoppingBag className=" w-[25px] h-[25px] text-secondary-gray" />
              </div>
            </a>
            <a
              className="group text-secondary-blue "
              onClick={loginClickedHandler}
              href="#"
            >
              <div className="flex justify-center items-center lg:w-[165px] lg:h-[75px] rounded-[5px] border-[2px] border-secondary-blue  hover:text-white hover:bg-secondary-blue duration-[350ms] md:w-[40px] md:h-[40px] w-[35px] h-[35px] ">
                <div className="flex justify-center items-center gap-[5px] text-right ">
                  <FaRegUser />
                  <span className=" lg:block hidden">ورود به حساب</span>
                </div>
              </div>
              <div className=" group-hover:top-[90px] group-hover:opacity-100 group-hover:z-10 opacity-0 -z-10 duration-300 bg-white rounded-lg drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] absolute  top-[100px] left-[10px] w-[200px] ">
                <div>
                  <ul className="flex flex-col gap-3 text-secondary-gray text-[15px] py-2 ">
                    <li className="hover:bg-primary-gray py-2 px-3">
                      <a
                        className="flex items-center justify-start gap-2"
                        href=""
                      >
                        <FaRegUser className="text-[18.5px] mr-[-2px]" />
                        پیشخوان
                      </a>
                    </li>
                    <li className="hover:bg-primary-gray py-2 px-3">
                      <a className="flex items-center gap-2" href="">
                        <PiShoppingBag className="text-[22.5px] mr-[-3px]" />
                        سفارش ها
                      </a>
                    </li>
                    <li className="hover:bg-primary-gray py-2 px-3">
                      <a className="flex items-center gap-2" href="">
                        <LiaUserEditSolid className="text-[24px] mr-[-5px]" />
                        ویرایش حساب
                      </a>
                    </li>
                    <li className="hover:bg-primary-gray py-2 px-3">
                      <a className="flex items-center gap-2" href="">
                        <IoWalletOutline className="text-[20px]" />
                        کیف پول:۰ تومان
                      </a>
                    </li>
                    <li className="hover:bg-primary-gray py-2 px-3">
                      <a className="flex items-center gap-2" href="">
                        <IoExitOutline className="text-[20px] text-red-600" />
                        خروچ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </a>
            <div>
              <div className="flex md:hidden w-[35px] h-[35px] bg-primary-gray rounded justify-center items-center">
                <IoReorderThree className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <HumburgerMenu />
          </div>
          <div>
            <SearchDisplay onChange={searchClicked} />
          </div>
          <div>
            <LoginModal onChange={loginClicked} />
          </div>
        </div>
      </div>
      {isOpen && (<Dialer Open={isOpen}/>)}
    </div>
  );
};

export default Header;
