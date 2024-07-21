import React from "react";

export const BackgroundTriangle = ({className}) => {
  return (
    <div className={`${className}`}>
      <div className="relative overflow-hidden h-[320px] flex flex-col items-center w-full">
        <div className="absolute top-[-80%] bg-sky-200 w-[400px] h-[400px] opacity-40 rotate-45 "></div>
        <div className="relative flex flex-col items-center w-full h-[500px] mt-[25px] overflow-hidden">
          <div className="absolute top-[-110%] bg-sky-200 w-[500px] h-[500px] opacity-40 rotate-45 "></div>
        </div>
      </div>
    </div>
  );
};
