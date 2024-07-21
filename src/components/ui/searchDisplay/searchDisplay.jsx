import React, { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export const SearchDisplay = ({ onChange }) => {
  const [showModal, setShowModal] = useState(true);
  const [closeModal, setCloseModal] = useState(false);
  const [display, setDisplay] = useState("");

 

  useEffect(() => {
    setShowModal(!showModal);
    setCloseModal(!closeModal);
  },[onChange]);

  useEffect(() => {
   
    if (closeModal == true && showModal == false) {
      setDisplay("right-[-2000px]");
    }else if (closeModal == false && showModal == true) {
      setDisplay("right-[0px]");
    } else {
      setDisplay("right-[-2000px]");
    }
  });


  const closeModalHandler = () => {
    setShowModal(!showModal);
    setCloseModal(!closeModal);
  };

  return (
    <div
      className={`fixed ${display} right-[-2000px] duration-[1500ms] z-[100] w-full h-full  top-0  flex items-center bg-gradient-to-r from-[#0995e1f9] to-[#1631c8fc]`}
    >
      <div className="w-full z-50 flex justify-center ">
        <div className="flex flex-col flex-wrap z-[100] lg:w-[60%] w-[85%] gap-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white text-[35px]">جستجو</h1>
            </div>
            <div className="group flex justify-center">
              <button onClick={closeModalHandler}>
                <MdOutlineCancel className="text-[rgba(208,208,208,0.5)] text-[35px] group-hover:text-white group-hover:scale-110 duration-300" />
              </button>
            </div>
          </div>
          <p className="text-white text-[15px] mb-2">
            جستجو با زدن Enter و بستن با زدن Esc
          </p>
          <div>
            <div className=" flex items-center  bg-white rounded-md ">
              <div className="mt-1 mr-3">
                <button className="w-[40px] h-[40px] ">
                  <IoIosSearch className="text-[35px]" />
                </button>
              </div>
              <input
                className="w-[100%] outline-none p-[12.5px] rounded-md md:text-[25px] placeholder:text-[rgba(0,0,0,0.46)] "
                type="text"
                pla
                placeholder="دنبال چی میگردی؟"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
