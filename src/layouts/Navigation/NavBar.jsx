import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { SlPencil } from "react-icons/sl";
import WaveSvg from "../../assets/icons/Wave_svg";
import Bg_img from "../../assets/images/blue-surface-with-yellow-book-space-messages.jpg";

const NavBar = () => {
  return (
      <div className="relative">
        <div className="h-[735px]">
          <div className="bg-fixed xl:bg-[center_top_0rem] md:bg-[center_top_3rem] sm:bg-cover sm:bg-top bg-right bg-current bg-[url('../../assets/images/blue-surface-with-yellow-book-space-messages.jpg')] max-w h-[735px] transition-all duration-[500ms]">
            <section>
              <div className="flex-row  md:mx-[42.5px] md:p-[10px] mx-2 p-2">
                <div className="flex flex-col xl:w-[49%] lg:w-[60%] h-[400px] justify-end lg:mt-[70px] md:mt-[80px] sm:mt-[110px] mt-[180px] ">
                  <h2 className="text-white lg:text-[30px] md:text-[26px] text-[20px] mb-[15px] font-bold ">
                    آکادمی آموزشی و پژوهشی آکاپال
                  </h2>
                  <p className="text-white md:text-[14px] text-[12px] mb-[35px] text-justify leading-[30px] ">
                    آکادمیک پالس با افتخار اعالم میکند که هدف ما ارائه آموزش های
                    تخصصی، تجربیات و راهنمایی در زمینه های گوناگون به دانشجویان
                    است. افتخار تیم تخصصی ما ۱۰ سال خدمات آموزشی و پژوهشی و
                    رضایت مشتریان و اساتیدی است که با ما همکاری دارند.
                  </p>
                  <div className="mb-[5px]">
                    <form
                      className="flex p-[5px] rounded-[10px] w-full bg-white"
                      action="/"
                    >
                      <input
                        className="outline-none p-[10px] rounded-[10px] w-full "
                        type="text"
                        placeholder="جستجو..."
                        autoComplete="off"
                        id="search"
                      />
                      <div className="flex">
                        <button
                          className="flex w-[60px] h-[60px] bg-secondary-blue justify-center items-center rounded-[10px]"
                          type="submit"
                        >
                          <IoSearch className="w-[25px] h-[25px] text-white " />
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex md:flex-row flex-col justify-center items-center gap-[10px] mt-[20px]">
                    <div className="flex justify-center items-center bg-white rounded-[10px] md:w-[48%] w-[90%] h-[100px] gap-[15px]">
                      <div className=" group flex justify-center items-center w-[55px] h-[55px] bg-secondary-blue rounded-full">
                        <HiOutlineBookOpen className="w-[35px] h-[35px] text-white group-hover:text-secondary-gray duration-[300ms] " />
                      </div>
                      <div className="flex-col space-y-2">
                        <a className="text-[15px] text-gray-600" href="/">
                          آموزش مقاله نویسی
                        </a>
                        <p className="text-[12px] text-secondary-gray p-[5px]">
                          یادگیری اصول نوشتن مقاله
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center bg-white rounded-[10px] md:w-[48%] w-[90%] h-[100px] gap-[15px]">
                      <div className=" group flex justify-center items-center w-[55px] h-[55px] bg-secondary-blue rounded-full">
                        <SlPencil className="w-[27.5px] h-[27.5px] text-white group-hover:text-secondary-gray duration-[300ms] " />
                      </div>
                      <div className="flex-col space-y-2">
                        <a className="text-[15px] text-gray-600 " href="/">
                          آموزش پایان نامه نویسی
                        </a>
                        <p className="text-[12px] text-secondary-gray p-[5px]">
                          یادگیری اصول نوشتن پایان نامه
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex"></div>
            </section>
            <WaveSvg />
          </div>
        </div>
      </div>
  );
};

export default NavBar;
