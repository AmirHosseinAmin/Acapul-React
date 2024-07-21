import React, { useState } from "react";
import Header from "../../layouts/Header/Header";
import { Footer } from "../../layouts/Footer";
import Layout from "../../layouts/main";
import Dialer from "../../components/ui/dialer/Dialer_button";
import { BackToTop } from "../../components/ui/backToTop/BackToTop";
import { Topic } from "../../layouts/Topic/Topic";
import { IoGrid } from "react-icons/io5";
import { IoList } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { ProductCards } from "../../components/ui/cards/product cards/ProductCards";
import { products } from "../../constants/product.js";
import FilterProductPrice from "../../components/ui/Product Filter/ProductFilter.jsx";

export const ProductsList = () => {
  const [flexRow, setflexRow] = useState("");
  const [flexCol, setflexCol] = useState("flex-col");
  const [rowSelected, setRowSelected] = useState("");
  const [colSelected, setColSelected] = useState("text-white bg-primary-blue");
  const [rowWidth, setRowWidth] = useState("");
  const [filterPercentage, setFilterPercentage] = useState(0);

  const handleFilterChange = (percentage) => {
    setFilterPercentage(percentage);
    // Perform filtering based on the percentage value
    // You can update your product list or perform any other actions
  };

  const flexRowHandler = () => {
    setflexRow("flex-row");
    setflexCol("");
    setRowSelected("text-white bg-primary-blue");
    setColSelected("text-gray-700");
    setRowWidth("w-[720px]");
  };

  const flexColHandler = () => {
    setflexCol("flex-col");
    setflexRow("");
    setRowSelected("text-gray-700");
    setColSelected("text-white bg-primary-blue");
    setRowWidth("w-full");
  };

  return (
    <div>
      <Header />
      <Topic />
      <Layout>
        <div className="flex flex-row  ">
          <div className="basis-[32.5%] flex flex-col items-center w-full">
            <div className="flex justify-center items-center text-[18px] text-white bg-secondary-blue rounded-md drop-shadow-md w-[90%] h-[50px] mt-[30px] cursor-pointer">
              <span>حذف فیلتر ها</span>
            </div>
            <div className="bg-white rounded-md drop-shadow-md w-[90%] h-[150px] mt-[10px]">
              <div className="flex justify-start items-center gap-2 mt-3">
                <div className="bg-secondary-blue rounded-e-xl w-[15px] h-[40px]"></div>
                <div>
                  <h3 className="text-secondary-gray text-[15px]">
                    فیلتر براساس قیمت:
                  </h3>
                </div>
                <div>
                  <FilterProductPrice onFilterChange={handleFilterChange} />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md drop-shadow-md w-[90%] h-[150px] mt-[20px]">
              <div className="flex justify-start items-center gap-2 mt-3">
                <div className="bg-secondary-blue rounded-e-xl w-[15px] h-[40px]"></div>
                <div>
                  <h3 className="text-secondary-gray text-[15px]">
                    براساس دسته بندی
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center basis-[67.5%] w-full  ">
            <div className="flex flex-row items-center bg-white rounded-md drop-shadow-md w-[97.5%] h-[85px] mt-[30px]">
              <div className="basis-[10%] flex justify-center">
                <div
                  className={`flex justify-center items-center  rounded-[4px]  ${colSelected} border-gray-500/30 border-[1px] w-[42.5px] h-[40px] cursor-pointer duration-300`}
                  onClick={flexColHandler}
                >
                  <IoGrid />
                </div>
              </div>
              <div className="basis-[10%]">
                <div
                  className={`flex justify-center items-center text-[20px] rounded-[4px] ${rowSelected} border-gray-500/30 border-[1px] w-[42.5px] h-[40px] cursor-pointer duration-300`}
                  onClick={flexRowHandler}
                >
                  <IoList />
                </div>
              </div>
              <div className="basis-[50%]">
                <div className="flex justify-center items-center text-[20px] rounded-[4px] border-gray-500/30 border-[1px] w-fit h-[40px] p-[10px]">
                  <form action="">
                    <select
                      name=""
                      id=""
                      className="text-[12px] outline-none appearance-none cursor-pointer"
                    >
                      <option value="-2">مرتب سازی بر اساس محبوبیت</option>
                      <option value="-1">مرتب سازی بر اساس امتیاز</option>
                      <option value="0">مرتب سازی بر اساس آخرین</option>
                      <option value="1">مرتب سازی بر اساس ارزانترین</option>
                      <option value="2">مرتب سازی بر اساس گرانترین</option>
                    </select>
                  </form>
                </div>
              </div>
              <div className="basis-[30%]">
                <div className="flex flex-row justify-center items-center text-[20px] rounded-[4px] border-gray-500/30 border-[1px] w-fit h-[40px] p-[10px] bg-white">
                  <form className="flex">
                    <input
                      type="text"
                      className="outline-none text-[15px]"
                      placeholder="جستجوی محصول..."
                    />
                    <IoSearch className="w-[20px] h-[20px] text-gray-500/30 cursor-pointer" />
                  </form>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-[30px] mb-[100px] justify-center items-center flex-wrap w-full">
              {products.map((index) => (
                <ProductCards
                  key={index.id}
                  img={index.img}
                  title={index.title}
                  count={index.count}
                  discount={index.discount}
                  price={index.price}
                  headingOff={index.heading_off}
                  line={index.line}
                  width="w-[350px]"
                  hight="h-[200px]"
                  corner="rounded-r-md"
                  row={flexRow}
                  col={flexCol}
                  rowWidth={rowWidth}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
      <BackToTop />
      <Dialer />
      <Footer />
    </div>
  );
};
