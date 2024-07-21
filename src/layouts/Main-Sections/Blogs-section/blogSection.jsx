import React from "react";
import { BlogCards } from "../../../components/ui/cards/blog cards/BlogCards";
import { blogs } from "../../../constants/Blogs";
import { BackgroundTriangle } from "../../../components/ui/elements/background-triangle";


const BlogSection = () => {
  return (
    <div>
      <BackgroundTriangle className=" w-full hidden -z-0 lg:flex mb-[-300px]" />
      <section className=" flex flex-col md:h-[600px] h-auto mb-10 z-10 ">
        <div className="relative bottom-6 z-0 ">
          <div className="bg-sky-200 w-[147.5px] h-[15px] absolute top-4 mr-3 -z-10"></div>
          <h2 className="text-[25px] w-fit  mr-3">آخرین مقالات</h2>
          <div className="bg-secondary-blue w-[50px] h-[5px] rotate-[110deg] absolute right-[-15px]"></div>
        </div>
        <div className="flex gap-5 md:flex-row flex-col z-0">
          {blogs.map((index) => (
            <BlogCards
              img={index.img}
              title={index.title}
              discription={index.discription}
              category={index.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
