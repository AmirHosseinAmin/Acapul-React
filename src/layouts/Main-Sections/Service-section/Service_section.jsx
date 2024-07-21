import React from "react";
import { FaArrowLeft } from "react-icons/fa";


export const ServiceSection = () => {
  return (
    <div>
      <section className="  md:h-[12vh] h-[25vh] md:flex-row flex flex-col ">
        <div className="basis-[30%] relative bottom-6 z-0">
          <div className="bg-sky-200 w-[147.5px] h-[15px] absolute top-4 mr-3 -z-10"></div>
          <h2 className="text-[25px] w-fit  mr-3">خدمات آکاپال</h2>
          <p className="text-[14px] text-secondary-gray mr-6">
            انفجار آینده شغلی و مالی شما
          </p>
          <div className="bg-secondary-blue w-[50px] h-[5px] rotate-[110deg] absolute right-[-15px] top-[40px]"></div>
        </div>
        <div className="flex justify-end items-start basis-[70%]">
          <a
            className="flex justify-center items-center bg-primary-blue rounded-[5px] text-white w-[118.5px] h-[35px]"
            href="/"
          >
            <span className="flex justify-center items-center gap-1 text-[13px]">
              سایر خدمات
              <FaArrowLeft />
            </span>
          </a>
        </div>
      </section>
      <section className=" md:h-[30vh] h-[100vh]">
        {" "}
        <div className="flex gap-5 justify-center md:flex-row flex-col">
          <div className="flex justify-center items-center bg-cover bg-center bg-slate-500 bg-[url('../../assets/images/service-images/Group-6.png')] md:w-[360px] md:h-[98px] w-[100%] h-[98px] rounded-[5px] text-white text-[20px]">
            <a className="" href="/">
              آموزش مقاله نویسی <span></span>
            </a>
          </div>
          <div className="flex justify-center items-center bg-cover bg-slate-500 bg-[url('../../assets/images/service-images/Group-4.png')] md:w-[360px] md:h-[98px] w-[100%] h-[98px] rounded-[5px] text-white text-[20px]">
            <a href="/">آموزش پایان نامه نویسی</a>
          </div>
          <div className="flex justify-center items-center bg-cover bg-[url('../../assets/images/service-images/Group-2-2.png')] md:w-[360px] md:h-[98px] w-[100%] h-[98px] rounded-[5px] text-white text-[20px] ">
            <a href="/">آموزش آزمون های نظام مهندسی</a>
          </div>
        </div>
      </section>
    </div>
  );
};
