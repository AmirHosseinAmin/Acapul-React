import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BackgroundTriangle } from "../../../components/ui/elements/background-triangle";
import { ProductCards } from "../../../components/ui/cards/product cards/ProductCards";
import { free_products } from "../../../constants/FreeProducts";
import { BackgroundRectangle } from "../../../components/ui/elements/background-rectangle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Controller } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_tf from "../../../assets/images/products-images/img-tafrih.png";
import banner_ms from "../../../assets/images/products-images/298654-min-400x229.jpg";
import banner_tr from "../../../assets/images/products-images/card-image.jpg";
import starts_emtpy from "../../../assets/images/products-images/star-empty.svg";
import starts_fill from "../../../assets/images/products-images/star-fill.svg";

export const FreeProductSection = () => {
  const [ControlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div>
      <section className=" flex  mt-[80px] md:flex-row flex-col">
        <div className="md:basis-[30%] relative bottom-6 z-0  ">
          <div className="bg-sky-200 w-[175px] h-[15px] absolute top-4 mr-3 -z-10"></div>
          <h2 className="text-[25px] w-fit  mr-3">محصولات رایگان</h2>
          <p className="text-[14px] text-secondary-gray mr-6">
            سکوی پرتاپ شما به سمت موفقیت
          </p>
          <div className="bg-secondary-blue w-[50px] h-[5px] rotate-[110deg] absolute right-[-15px] top-[40px]"></div>
        </div>
        <div className="flex justify-end items-start md:basis-[70%]">
          <a
            className="flex justify-center items-center bg-secondary-blue rounded-[5px] text-white w-[138.5px] h-[35px]"
            href="/"
          >
            <span className="flex justify-center items-center gap-1 text-[13px]">
              همه محصولات
              <FaArrowLeft />
            </span>
          </a>
        </div>
      </section>
      <section className="mb-[-100px]">
        <BackgroundTriangle className=" w-full hidden z-0 lg:flex mb-[-270px]" />
        <div className="flex md:flex-row flex-col gap-5 justify-center mb-[100px] flex-wrap">
          {free_products.map((index) => (
            <ProductCards
              key={index.id}
              img={index.img}
              title={index.title}
              count={index.count}
              discount={index.discount}
              price={index.price}
              headingOff={index.heading_off}
              line={index.line}
              hight={" w-[350px] h-[210px]"}
              className={
                "xl:w-[350px] xl:h-[330px] md:w-[350px] md:h-[330px] md:mt-0 mt-10 w-[260px] "
              }
              margin={"group-hover:mt-12 mt-20 "}
              row="flex-col"
            />
          ))}
        </div>
      </section>
      <section className="mb-[140px]">
        <BackgroundRectangle classNames={"mb-4"} />
        <div className="bg-white drop-shadow-xl rounded-lg mt-[-290px] mb-[100px]">
          <Swiper
            modules={[Pagination, A11y, Autoplay, Controller]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <div className=" flex sm:flex-row flex-col items-center sm:h-[200px] h-[440px]">
                <div className=" mr-[15px] relative ">
                  <img
                    className="sm:max-w-[280px] sm:h-[180px] sm:mt-0 mt-4 sm:ml-0 mr-[-7px] w-[270px] h-[220px] object-cover rounded-[7.5px] z-0 "
                    src={banner_ms}
                  />
                  <div className="bg-secondary-blue w-fit p-[7.5px] rounded-t-[7.5px] absolute bottom-0 sm:left-[110px] left-[100px] text-white ">
                    <span>تخفیف</span>
                    <span>۱۰٪</span>
                  </div>
                </div>
                <div className="sm:w-[400px] sm:mr-[30px] mt-[20px]">
                  <div className="flex text-[20px] mt-[-10px] mb-[20px]">
                    <a href="/">مسافربری</a>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex text-[14px] text-secondary-gray gap-1">
                      <span>امتیاز</span>
                      <span>۰</span>
                      <span>از</span>
                      <span>۱۰</span>
                      <span>رأی</span>
                    </div>
                    <div className="flex flex-row">
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                    </div>
                  </div>
                  <div className="flex justify-start mt-[30px] gap-2 items-center ">
                    <div>
                      <span className=" text-[14px] text-secondary-gray line-through ">
                        ۱٫۰۰۰٫۰۰۰ تومان
                      </span>
                    </div>
                    <div className="bg-green-500 rounded-md px-[10px] py-[5px] text-white text-[16px] w-fit">
                      <span>۹۰۰٫۰۰۰ تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex sm:flex-row flex-col items-center sm:h-[200px] h-[440px]">
                <div className=" mt-[10px] mr-[10px] relative ">
                  <img
                    className="sm:max-w-[280px] sm:h-[180px] sm:mt-[-5px] mt-4 sm:ml-0 mr-[-7px] w-[270px] h-[220px] object-cover rounded-[7.5px] z-0 "
                    src={banner_tr}
                  />
                </div>
                <div className="sm:w-[400px] sm:mr-[30px] mt-[20px]">
                  <div className="flex text-[20px] mt-[-10px] mb-[20px]">
                    <a href="/">طرح ۵</a>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex text-[14px] text-secondary-gray gap-1">
                      <span>امتیاز</span>
                      <span>۰</span>
                      <span>از</span>
                      <span>۱۰</span>
                      <span>رأی</span>
                    </div>
                    <div className="flex flex-row">
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                      <img src={starts_emtpy} />
                    </div>
                  </div>
                  <div className="flex justify-start mt-[30px] gap-2 items-center ">
                    <div>
                      <span className=" text-[14px] text-secondary-gray line-through ">
                        ۲٫۰۰۰٫۰۰۰ تومان
                      </span>
                    </div>
                    <div className="bg-green-500 rounded-md px-[10px] py-[5px] text-white text-[16px] w-fit">
                      <span>۰ تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
