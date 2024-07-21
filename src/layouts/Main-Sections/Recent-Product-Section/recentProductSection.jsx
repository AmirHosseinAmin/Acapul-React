import React from "react";
import { ProductCards } from "../../../components/ui/cards/product cards/ProductCards";
import { products } from "../../../constants/product";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../node_modules/swiper/modules/navigation.css";

export const RecentProductSection = () => {
  return (
    <div>
      <section className="flex">
        <div className="md:basis-[30%] relative bottom-6 z-0">
          <div className="bg-sky-200 w-[230px] h-[15px] absolute top-4 mr-3 -z-10"></div>
          <h2 className="text-[25px] w-fit  mr-3">محصولات اخیر آکاپال​</h2>
          <p className="text-[14px] text-secondary-gray mr-6">
            سکوی پرتاپ شما به سمت موفقیت
          </p>
          <div className="bg-secondary-blue w-[50px] h-[5px] rotate-[110deg] absolute right-[-15px] top-[40px]"></div>
        </div>
      </section>
      <section>
        <div className="md:flex gap-6 md:flex-row flex-col mb-[100px] justify-center flex-wrap hidden">
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
              row="flex-col"
            />
          ))}
        </div>
        <div className="md:hidden flex mb-[120px]">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ hideOnClick: false }}
            pagination={{ clickable: true, type: "bullets" }}
          >
            <div className="mb-[80px] ">
              {products.map((index) => (
                <SwiperSlide className="flex justify-center items-center w-[300px] h-[400px]">
                  <ProductCards
                    key={index.id}
                    img={index.img}
                    title={index.title}
                    count={index.count}
                    discount={index.discount}
                    price={index.price}
                    headingOff={index.heading_off}
                    line={index.line}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
