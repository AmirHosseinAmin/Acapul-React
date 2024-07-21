import React, { useState } from "react";
import { GoGift } from "react-icons/go";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaUserGraduate } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { TbBooks } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { GoChevronLeft } from "react-icons/go";
import { VscHome } from "react-icons/vsc";
import { TbShoppingBag } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaRegMap, FaS } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { IoMdArrowBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  const [counterIsOpen, setcounterIsOpen] = useState(true);
  const [orderIsOpen, setorderIsOpen] = useState(false);
  const [buyIsOpen, setbuyIsOpen] = useState(false);
  const [favoriteIsOpen, setfavoriteIsOpen] = useState(false);
  const [downloadIsOpen, setdownloadIsOpen] = useState(false);
  const [addressIsOpen, setaddressIsOpen] = useState(false);
  const [walletIsOpen, setwalletIsOpen] = useState(false);
  const [profileIsOpen, setprofileIsOpen] = useState(false);
  const [clickedCounter, setclickedCounter] = useState("bg-black/30");
  const [clickedOrder, setclickedOrder] = useState("");
  const [clickedBuy, setclickedBuy] = useState("");
  const [clickedFavorite, setclickedFavorite] = useState("");
  const [clickedDownload, setclickedDownload] = useState("");
  const [clickedAddress, setclickedAddress] = useState("");
  const [clickedWallet, setclickedWallet] = useState("");
  const [clickedProfile, setclickedProfile] = useState("");

  const counterOpenHandler = () => {
    setcounterIsOpen(true);
    setorderIsOpen(false);
    setbuyIsOpen(false);
    setfavoriteIsOpen(false);
    setdownloadIsOpen(false);
    setaddressIsOpen(false);
    setwalletIsOpen(false);
    setprofileIsOpen(false);
    setclickedCounter("bg-black/30");
    setclickedOrder("");
    setclickedBuy("");
    setclickedFavorite("");
    setclickedDownload("");
    setclickedAddress("");
    setclickedWallet("");
    setclickedProfile("");
  };

  const orderOpenHandler = () => {
    setcounterIsOpen(false);
    setorderIsOpen(true);
    setbuyIsOpen(false);
    setfavoriteIsOpen(false);
    setdownloadIsOpen(false);
    setaddressIsOpen(false);
    setwalletIsOpen(false);
    setprofileIsOpen(false);
    setclickedCounter("");
    setclickedOrder("bg-black/30");
    setclickedBuy("");
    setclickedFavorite("");
    setclickedDownload("");
    setclickedAddress("");
    setclickedWallet("");
    setclickedProfile("");
  };
  const buyOpenHandler = () => {
    setcounterIsOpen(false);
    setorderIsOpen(false);
    setbuyIsOpen(true);
    setfavoriteIsOpen(false);
    setdownloadIsOpen(false);
    setaddressIsOpen(false);
    setwalletIsOpen(false);
    setprofileIsOpen(false);
    setclickedCounter("");
    setclickedOrder("");
    setclickedBuy("bg-black/30");
    setclickedFavorite("");
    setclickedDownload("");
    setclickedAddress("");
    setclickedWallet("");
    setclickedProfile("");
  };

  const favoriteOpenHandler = () => {
    setcounterIsOpen(false);
    setorderIsOpen(false);
    setbuyIsOpen(false);
    setfavoriteIsOpen(true);
    setdownloadIsOpen(false);
    setaddressIsOpen(false);
    setwalletIsOpen(false);
    setprofileIsOpen(false);
    setclickedCounter("");
    setclickedOrder("");
    setclickedBuy("");
    setclickedFavorite("bg-black/30");
    setclickedDownload("");
    setclickedAddress("");
    setclickedWallet("");
    setclickedProfile("");
  };

  const downloadOpenHandler = () => {
    setcounterIsOpen(false);
    setorderIsOpen(false);
    setbuyIsOpen(false);
    setfavoriteIsOpen(false);
    setdownloadIsOpen(true);
    setaddressIsOpen(false);
    setwalletIsOpen(false);
    setprofileIsOpen(false);
    setclickedCounter("");
    setclickedOrder("");
    setclickedBuy("");
    setclickedFavorite("");
    setclickedDownload("bg-black/30");
    setclickedAddress("");
    setclickedWallet("");
    setclickedProfile("");
  };

  const addressOpenHandler = () => {
    setcounterIsOpen(false);
    setorderIsOpen(false);
    setbuyIsOpen(false);
    setfavoriteIsOpen(false);
    setdownloadIsOpen(false);
    setaddressIsOpen(true);
    setwalletIsOpen(false);
    setprofileIsOpen(false);
    setclickedCounter("");
    setclickedOrder("");
    setclickedBuy("");
    setclickedFavorite("");
    setclickedDownload("");
    setclickedAddress("bg-black/30");
    setclickedWallet("");
    setclickedProfile("");
  };

  const walletOpenHandler = () => {
    setcounterIsOpen(false);
    setorderIsOpen(false);
    setbuyIsOpen(false);
    setfavoriteIsOpen(false);
    setdownloadIsOpen(false);
    setaddressIsOpen(false);
    setwalletIsOpen(true);
    setprofileIsOpen(false);
    setclickedCounter("");
    setclickedOrder("");
    setclickedBuy("");
    setclickedFavorite("");
    setclickedDownload("");
    setclickedAddress("");
    setclickedWallet("bg-black/30");
    setclickedProfile("");
  };

  const profileOpenHandler = () => {
    setcounterIsOpen(false);
    setorderIsOpen(false);
    setbuyIsOpen(false);
    setfavoriteIsOpen(false);
    setdownloadIsOpen(false);
    setaddressIsOpen(false);
    setwalletIsOpen(false);
    setprofileIsOpen(true);
    setclickedCounter("");
    setclickedOrder("");
    setclickedBuy("");
    setclickedFavorite("");
    setclickedDownload("");
    setclickedAddress("");
    setclickedWallet("");
    setclickedProfile("bg-black/30");
  };
  return (
    <>
      <div className=" flex justify-end z-20 m-4">
        <Link to="/">
          <div className="bg-orange-400 rounded-[25px] w-[100px] h-[70px] flex justify-center items-center cursor-pointer">
            <IoMdArrowBack className="text-white text-[50px]" />
          </div>
        </Link>
      </div>

      <div className="w-full relative -z-10 ">
        <div className="z-0 absolute bg-[#6ec1e4] w-[120%]  h-[420px] rotate-[-4deg] top-[-160px] left-[-22px] "></div>
        <div className="z-0 absolute bg-[#0997e1] w-[120%]  h-[370px] rotate-[-4deg] top-[-160px] left-[-22px] "></div>
      </div>
      <div className="w-full h-fit z-30 relative flex justify-center px-[15px] ">
        <nav className="w-[27%] bg-[rgba(28,26,26,0.89)] rounded-[25px]">
          <div className="flex flex-col justify-center items-center mt-10">
            <div className="flex justify-center items-center bg-white w-[90px] h-[90px] rounded-lg">
              <img
                className=" w-[90%] h-[90%] rounded-lg "
                src="/src/assets/images/blue-surface-with-yellow-book-space-messages.jpg"
              />
            </div>
            <div className="mt-[20px]">
              <p className="text-white">سلام mahdipcharandabi عزیز!</p>
            </div>
          </div>
          <div className="mx-[40px] mt-[60px] ">
            <ul className="flex flex-col text-white gap-2 ">
              <li>
                <a
                  className="group w-[90%] "
                  href="#"
                  onClick={counterOpenHandler}
                >
                  <div
                    className={`group-hover:bg-white/30  duration-200 rounded-[3px] ${clickedCounter}  `}
                  >
                    <div
                      className={` p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 `}
                    >
                      <VscHome className="text-[22.5px]" />
                      <span className="text-[15px]">پیشخوان</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="group w-[90%] "
                  href="#"
                  onClick={orderOpenHandler}
                >
                  <div
                    className={`group-hover:bg-white/30 duration-200 rounded-[3px] ${clickedOrder}`}
                  >
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <TbShoppingBag className="text-[22.5px]" />
                      <span className="text-[15px]">سفارش ها</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="group w-[90%] " href="#" onClick={buyOpenHandler}>
                  <div
                    className={`group-hover:bg-white/30 duration-200 rounded-[3px] ${clickedBuy}`}
                  >
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <LuGraduationCap className="text-[22.5px]" />
                      <span className="text-[15px]">فایل های خریداری شده</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="group w-[90%] "
                  href="#"
                  onClick={favoriteOpenHandler}
                >
                  <div
                    className={`group-hover:bg-white/30 duration-200 rounded-[3px] ${clickedFavorite}`}
                  >
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <FaRegHeart className="text-[18.5px]" />
                      <span className="text-[15px]">علاقه مندی ها</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="group w-[90%] "
                  href="#"
                  onClick={downloadOpenHandler}
                >
                  <div className={`group-hover:bg-white/30 duration-200 rounded-[3px] ${clickedDownload}`}>
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <FiDownload className="text-[20px]" />
                      <span className="text-[15px]">دانلودها</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="group w-[90%] "
                  href="#"
                  onClick={addressOpenHandler}
                >
                  <div className={`group-hover:bg-white/30 duration-200 rounded-[3px] ${clickedAddress}`}>
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <FaRegMap className="text-[20px]" />
                      <span className="text-[15px]">آدرس</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="group w-[90%] "
                  href="#"
                  onClick={walletOpenHandler}
                >
                  <div className={`group-hover:bg-white/30 duration-200 rounded-[3px] ${clickedWallet}`}>
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <FaRegMoneyBillAlt className="text-[20px]" />
                      <span className="text-[15px]">کیف پول من</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="group w-[90%] "
                  href="#"
                  onClick={profileOpenHandler}
                >
                  <div className={`group-hover:bg-white/30 duration-200 rounded-[3px] ${clickedProfile}`}>
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <FaRegUser className="text-[20px] " />
                      <span className="text-[15px]">حساب کاربری جزئیات</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="group w-[90%] " href="#">
                  <div className="group-hover:bg-white/30 group-active:bg-black/30 duration-200 rounded-[3px] ">
                    <div className="  p-[10px] flex items-center gap-2 group-hover:border-l-[4px] rounded-[3px] duration-200 border-orange-400 group-hover:mr-2 ">
                      <IoMdExit className="text-[20px]" />
                      <span className="text-[15px]">خروج</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {counterIsOpen && (
          <div className="w-[72%] shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full mb-[20px]">
              <ul className="flex justify-between items-center">
                <li className=" w-[25%]">
                  <div className="flex h-[75px] bg-[#f0f2f7] px-[15px]  rounded-[3px] w-full">
                    <div className="flex justify-center items-center bg-[#393939] mt-[7px] w-[90px] h-[60px] rounded-[5px]">
                      <LiaUniversitySolid className="text-white text-[35px] bg-[#393939]" />
                    </div>

                    <div className="w-full">
                      <p className=" pt-[8px] font-bold text-[18px] text-center">
                        3 فایل
                      </p>
                      <p className=" pt-[3px] text-[#66666] text-[12px] text-center">
                        موجود در سایت
                      </p>
                    </div>
                  </div>
                </li>

                <li className=" w-[25%] pr-[15px]">
                  <div className="flex h-[75px] bg-[#f0f2f7] px-[15px]  rounded-[3px]">
                    <div className="flex justify-center items-center bg-[#fea000] mt-[7px] w-[90px] h-[60px] rounded-[5px]">
                      <FaUserGraduate className="text-white bg-[#fea000] text-[30px]" />
                    </div>

                    <div className="w-full">
                      <p className=" pt-[8px] font-bold text-[18px] text-center">
                        3 فایل
                      </p>
                      <p className=" pt-[3px] text-[#66666] text-[12px] text-center">
                        موجود در سایت
                      </p>
                    </div>
                  </div>
                </li>

                <li className=" w-[25%] pr-[15px]">
                  <div className="flex h-[75px] bg-[#f0f2f7] px-[15px] rounded-[3px]">
                    <div className="flex justify-center items-center bg-[#22c55e] mt-[7px] w-[90px] h-[60px] rounded-[5px]">
                      <MdAddShoppingCart className="text-white bg-[#22c55e] text-[32.5px] " />
                    </div>

                    <div className="w-full">
                      <p className=" pt-[8px] font-bold text-[18px] text-center">
                        3 فایل
                      </p>
                      <p className=" pt-[3px] text-[#66666] text-[12px] text-center">
                        موجود در سایت
                      </p>
                    </div>
                  </div>
                </li>

                <li className=" w-[25%] pr-[15px]">
                  <div className="flex h-[75px] bg-[#f0f2f7] px-[15px] rounded-[3px]">
                    <div className="flex justify-center items-center bg-[#0ea5e9] mt-[7px] w-[90px] h-[60px] rounded-[5px]">
                      <FaWallet className="text-white bg-[#0ea5e9] text-[30px]" />
                    </div>

                    <div className="w-full">
                      <p className=" pt-[8px] font-bold text-[18px] text-center">
                        3 فایل
                      </p>
                      <p className=" pt-[3px] text-[#66666] text-[12px] text-center">
                        موجود در سایت
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section className="flex w-full">
              <div className="w-full h-[121px] bg-[#f0f2f7] rounded-[10px] ml-2 px-[24px] mb-[5px] flex items-center">
                <GoGift className=" text-[#fea000] ml-[10px] h-[50px] w-[50px]" />
              </div>
              <div className="w-full h-[121px] bg-[#f0f2f7] rounded-[10px] ml-2 px-[24px] mb-[5px] flex justify-center flex-col items-center">
                <p className="text-[#7b7b7b] mb-[16px]">
                  ما را در شبکه های اجتماعی دنبال کنید
                </p>
                <div className="flex items-center">
                  <a href="#" className="bg-[#fff] rounded-[3px] ml-[8px]">
                    <div className="flex items-center py-[5px] px-[20px] rounded-[3px]">
                      <FaInstagram className="text-[#bf0353] w-[20px] h-[20px] ml-[3px]" />
                      <span className="hover:text-[#2e3e77]">اینستاگرام</span>
                    </div>
                  </a>

                  <a href="#" className="bg-[#fff] rounded-[3px]ml-[8px]">
                    <div className="flex items-center py-[5px] px-[20px] rounded-[3px]">
                      <FaTelegram className="ml-[3px] text-[#0094f5] w-[20px] h-[20px]" />
                      <span className="hover:text-[#2e3e77]">تلگرام</span>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section className="relative pt-16 overflow-visible w-full p-[20px] mt-[48px] mb-[25px] border border-solid border-[#e5e5e5] rounded-[4px]">
              <div className="w-[70px] h-[70px] bg-[#f0f2f7] rounded-[15px] flex justify-center items-center absolute top-[-25px] right-[10px]">
                <FiBell className="w-[26.25px] h-[29.78px]" />
              </div>

              <h4 className="text-[#0a0909] leading-[18px] text-[18px]">
                جدیدترین اطلاعیه ها
              </h4>
            </section>

            <section className="w-full pt-16 relative overflow-visible p-[20px] mt-[48px] mb-[25px] border border-solid border-[#e5e5e5] rounded-[4px]">
              <span>
                <div className="w-[70px] h-[70px] bg-[#f0f2f7] rounded-[15px] flex justify-center items-center absolute top-[-25px] right-[10px]">
                  <TbBooks className="w-[26.25px] h-[29.78px]" />
                </div>
              </span>

              <h4 className="text-[#0a0909] leading-[18px] text-[18px]">
                آخرین مقالات
              </h4>

              <div className="py-[20px]">
                <div>
                  <div className="text-[12px] p-[8px]">
                    <span className="rounded-[4px] flex items-center">
                      <CiCalendar className="mb-[5px] text-[12px]" />
                      1402/05/11
                    </span>
                  </div>

                  <div className="flex items-center">
                    <GoChevronLeft className="mb-[2px]" />
                    <a href="#"> آشنایی با نحوه نگارش مقالات علمی</a>
                  </div>

                  <p className="text-[#7b7b7b]">
                    آشنایی با نحوه نگارش مقالات علمی قبل از ورود به بحث نگارش
                    مقاله، نیاز است با مجموعه‌ای از تعاریف و...
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}
        {orderIsOpen && (
          <div className="w-[72%] h-[150px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full mb-[20px]">
              <div className="flex flex-row justify-between items-center bg-[#1FBD5026] border-[2px] border-[#1FBD50] rounded-[4px] p-5">
                <div className="flex items-center gap-4">
                  <div className="text-[#1FBD50]">
                    <FaCheckCircle />
                  </div>
                  <div className="text-[#1FBD50]">
                    <p>هیچ سفارشی هنوز ثبت نشده است.</p>
                  </div>
                </div>
                <div>
                  <a
                    className="bg-secondary-gray text-[14px] text-white px-[20px] py-[7.5px] rounded-[4px]"
                    href="#"
                  >
                    مرور محصولات
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}
        {buyIsOpen && (
          <div className="w-[72%] h-fit shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full mb-[20px]">
              <div className="flex flex-row justify-between items-center p-5">
                <div>
                  <p>هنوز دوره ای خریداری نشده است.</p>
                </div>
              </div>
            </section>
          </div>
        )}
        {favoriteIsOpen && (
          <div className="w-[72%] h-fit shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full mb-[20px]">
              <div className="flex flex-row justify-evenly items-center p-5 text-secondary-gray text-[14px]">
                <p>نام محصول</p>
                <p>قیمت</p>
                <p>وضعیت موجودی</p>
              </div>
              <div className="bg-primary-gray text-secondary-gray p-8 rounded-[5px]">
                <p>هیچ محصولی به علاقه مندی اضافه نشده است.</p>
              </div>
            </section>
          </div>
        )}
        {downloadIsOpen && (
          <div className="w-[72%] h-[150px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full mb-[20px]">
              <div className="flex flex-row justify-between items-center bg-[#1FBD5026] border-[2px] border-[#1FBD50] rounded-[4px] p-5">
                <div className="flex items-center gap-4">
                  <div className="text-[#1FBD50]">
                    <FaCheckCircle />
                  </div>
                  <div className="text-[#1FBD50]">
                    <p>هیچ دانلودی در دسترس نیست.</p>
                  </div>
                </div>
                <div>
                  <a
                    className="bg-secondary-gray text-[14px] text-white px-[20px] py-[7.5px] rounded-[4px]"
                    href="#"
                  >
                    رفتن به فروشگاه
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}
        {addressIsOpen && (
          <div className="w-[72%] h-fit shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full mb-[20px]">
              <div className="flex flex-col p-5 text-secondary-gray text-[14px] gap-5">
                <div>
                  <p>
                    آدرس‌های زیر به طور پیش‌فرض در صفحه پرداخت مورد استفاده قرار
                    مي‌گیرد.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[22px] text-black ">آدرس صورتحساب</span>
                  <button className="bg-secondary-gray text-white p-2 rounded-[4px] w-[60px] h-[35px]">
                    افزودن
                  </button>
                </div>
                <div>
                  <p>شما هنوز این آدرس را ثبت نکرده‌اید.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[22px] text-black">آدرس حمل و نقل</span>
                  <button className="bg-secondary-gray text-white p-2 rounded-[4px] w-[60px] h-[35px]">
                    افزودن
                  </button>
                </div>
                <div>
                  <p>شما هنوز این آدرس را ثبت نکرده‌اید.</p>
                </div>
              </div>
            </section>
          </div>
        )}
        {walletIsOpen && (
          <div className="w-[72%] h-fit shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full">
              <div className="flex flex-col p-5 text-secondary-gray text-[14px] gap-5">
                <div className="flex flex-row border-[1px] rounded-[2px]">
                  <div className="flex flex-col items-center gap-5 bg-primary-gray w-[300px] h-[300px]">
                    <div className="text-[22px] text-black mt-3">
                      <a
                        className="hover:text-primary-blue duration-200"
                        href="#"
                      >
                        کیف پول من
                      </a>
                    </div>
                    <div className="group flex flex-col gap-2 justify-center items-center bg-white drop-shadow-lg w-[80%] p-6 hover:drop-shadow-2xl duration-300 cursor-pointer">
                      <FaPlusCircle className="text-[22px] group-hover:text-primary-blue duration-500" />
                      <p>افزایش مبلغ کیف پول</p>
                    </div>
                    <div className="group flex flex-col justify-center gap-2 items-center bg-white drop-shadow-lg w-[80%] p-6 hover:drop-shadow-2xl duration-300 cursor-pointer">
                      <IoMdListBox className="text-[22px] group-hover:text-primary-blue duration-500" />
                      <p>تراکنش ها</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-[70%]">
                    <div className="flex flex-row justify-between items-center p-5">
                      <div className=" text-black text-[22px]">
                        <p>موجودی</p>
                      </div>
                      <div>
                        <p>0 تومان</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <hr className="w-[90%] " />
                    </div>
                    <div className="p-5">هیچ تراکنشی پیدا نشد.</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {profileIsOpen && (
          <div className="w-[72%] h-fit shadow-[0_2px_6px_rgba(0,0,0,0.1)] bg-[#fff] mr-[10px] p-[20px] rounded-[25px]">
            <section className="w-full">
              <div className="flex flex-col p-5 text-secondary-gray text-[14px] gap-5">
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name">نام *</label>
                    <input
                      className="border-[1px] outline-none p-[10px] w-[400px] rounded-[4px] drop-shadow-md"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="lastName">نام خانوادگی *</label>
                    <input
                      className="border-[1px] outline-none p-[10px] w-[400px] rounded-[4px] drop-shadow-md"
                      type="text"
                      id="lastName"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="showName">نام نمایشی *</label>
                  <input
                    className="border-[1px] outline-none p-[10px] w-[820px] rounded-[4px] drop-shadow-md"
                    type="text"
                    id="showName"
                  />
                  <p>
                    اسم مستعار شما به این شکل در پیشخوان و نقد های شما نمایش
                    داده میشود.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email">آدرس ایمیل *</label>
                  <input
                    className="border-[1px] outline-none p-[10px] w-[820px] rounded-[4px] drop-shadow-md"
                    type="text"
                    id="email"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="text-black text-[18px]">تغییر رمز عبور</h5>
                  <label htmlFor="changePassword">
                    رمز عبور کنونی (اگر نمی‌خواهید تغییر دهید خالی بگذارید.)
                  </label>
                  <input
                    className="border-[1px] outline-none p-[10px] w-[820px] rounded-[4px] drop-shadow-md"
                    type="text"
                    id="changePassword"
                  />
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <label htmlFor="newPassword">
                    رمز عبور جدید (برای عدم تغییر خالی بگذارید.)
                  </label>
                  <input
                    className="border-[1px] outline-none p-[10px] w-[820px] rounded-[4px] drop-shadow-md"
                    type="text"
                    id="newPassword"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="newPassword">تکرار رمز عبور جدید</label>
                  <input
                    className="border-[1px] outline-none p-[10px] w-[820px] rounded-[4px] drop-shadow-md"
                    type="text"
                    id="newPassword"
                  />
                </div>
                <div>
                  <button
                    className="bg-secondary-blue text-white px-4 py-3 rounded-[4px]"
                    type="submit"
                  >
                    ذخیره تغییرات
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};
export default Profile;
