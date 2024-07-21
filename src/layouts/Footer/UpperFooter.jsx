import Enamad from "../../assets/images/download.png";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Footer } from ".";

export const Upperfooter = () => {
  return (
    <div className="flex md:flex-row flex-col w-full bg-primary-gray px-[20px] py-[50px] rounded-xl gap-[20px] z-10">
      <div className="md:w-[35%] w-full flex flex-col ">
        <div>
          <h3 className="mb-[20px] text-[#3C3C3C]">درباره آکاپال</h3>{" "}
        </div>{" "}
        <div>
          <p className="md:text-justify text-[#7A7A7A] text-[12px] mb-[20px] leading-[2em] text-right ">
            آکادمی پژوهشی آکادمیک پالس “آکاپال” با هدف ارتقاء رتبه علمی کشور
            عزیزمان ایران بستری را فراهم کرده است که در چارچوب قوانین جمهوری
            اسالمی ایران دانشجویان و عزیزانی که در ابتدای راه پژوهشی قرار دارند
            و یا دانشآموختگانی که در راه ارتقای رزومه کاری خود هستند بتوانند
            بدون دغدغه مقاالت علمیشان را نگارش و در بهترین مجالت و نشری ات چاپ
            نمایند.
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap text-[#54595F] text-[14px]">
            <li>
              <a className="flex flex-row py-[12px]  pl-[12px]">
                <span className="pl-[6px]">
                  <FaInstagram color="#B7B7B7" fontSize="1.5em" />
                </span>
                <span>اینستاگرام</span>
              </a>
            </li>
            <li>
              <a className="flex flex-row  p-[12px]">
                <span className="pl-[6px]">
                  <FaTelegramPlane color="#B7B7B7" fontSize="1.5em" />
                </span>
                <span>کانال تلگرام</span>
              </a>
            </li>
            <li>
              <a>
                <span>آیدی تلگرام مشاوره : moshaveracademi@</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-[20%] w-full flex flex-col ">
        <div className="flex">
          <span>
            <BsDot color="#6EC1E4" fontSize="1.5em" />
          </span>
          <h4 className="font-bold pb-[20px]"> فهرست منو</h4>
        </div>
        <div className="pr-[15px] text-[#54595F] text-[14px]">
          <ul>
            <li className="pb-[18px] group flex">
              <div className="flex justify-center items-center">
                <div className="flex items-center bg-blue-500 h-[0px] w-[4px] transition-all ease-linear duration-500 rounded-[3px] group-hover:h-[-20px]   "></div>
                <div className="flex items-center bg-blue-500 h-[0px] w-[4px] transition-all ease-linear duration-500 rounded-[3px] group-hover:h-[20px]   "></div>
              </div>
              <a className="pr-[4px]">ارتباط با ما</a>
            </li>
            <li className="pb-[18px] group flex">
              <div className="flex justify-center items-center">
                <div className="flex items-center bg-blue-500 h-[0px] w-[4px] transition-all  duration-500 rounded-[3px] group-hover:h-[-20px] "></div>
                <div className="flex items-center bg-blue-500 h-[0px] w-[4px] transition-all  duration-500 rounded-[3px] group-hover:h-[20px] "></div>
              </div>
              <a className="pr-[4px]">درباره ما</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-[30%] w-full text-[#54595F] text-[14px]">
        <div>
          <ul>
            <li className="flex pb-[15px]">
              <div className=" flex justify-center items-center ">
                <span>
                  <IoLocationOutline color="#6EC1E4" fontSize="1.5em" />
                </span>
                <span className="pr-[6px]">آدرس: تبریز</span>
              </div>
            </li>
            <li className="flex pb-[15px]">
              <div className=" flex justify-center items-center">
                <span>
                  <IoCallOutline color="#6EC1E4" fontSize="1.5em" />
                </span>
                <span className="pr-[6px]">تماس: 09143167887</span>
              </div>
            </li>
            <li className="flex pb-[15px]">
              <div className=" flex justify-center items-center">
                <span>
                  <IoMailOutline color="#6EC1E4" fontSize="1.5em" />
                </span>
                <span className="pr-[6px] ">
                  ایمیل: academicpulse.dr@gmail.com
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[15%]">
        <div>
          <img src={Enamad} />
        </div>
      </div>
    </div>
  );
};
