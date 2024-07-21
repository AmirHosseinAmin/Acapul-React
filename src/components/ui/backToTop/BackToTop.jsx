import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const BackToTop = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const [displayStatus, setDisplayStatus] = useState();

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll >=  250) {
      setDisplayStatus("left-[0px]");
    } else if (winScroll < 250) {
      setDisplayStatus("left-[-40px]");
    } else {
  
    }
  };

  return (
      
          <div
            className={`flex justify-center cursor-pointer items-center bg-[rgba(0,0,0,0.31)] w-[40px] h-[40px] fixed z-50 bottom-10 rounded-s-[10px] ${displayStatus} left-[-60px] duration-500 hover:bg-primary-blue`}
            onClick={handleScroll}
          >
            <IoIosArrowDown className="  text-white text-[22px] rotate-180 " />
          </div>
        
  
  );
};
