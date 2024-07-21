import React from "react";

export const SectionLayout = ({ children }) => {
  return (
    <div>
      <div className=" bg-white -z-20 ">
        <div className="max-w-[1040px] mx-auto ">{children}</div>
      </div>
    </div>
  );
};
