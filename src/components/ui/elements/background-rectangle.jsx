import React from "react";

export const BackgroundRectangle = ({ classNames }) => {
  return (
    <div className="flex md:justify-between md:flex-row items-center flex-col">
      <div className="bg-primary-gray md:w-[300px] md:h-[300px]  w-[250px] h-[205px] rounded-[30px] rotate-12 md:mt-[100px] mt-[30px] mr-6 z-0"></div>
      <div
        className={`bg-secondary-blue md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-[30px] -rotate-12 md:mt-0 mt-[-50px] ml-6 ${classNames}`}
      ></div>
    </div>
  );
};
