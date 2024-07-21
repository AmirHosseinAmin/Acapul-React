import React from 'react'
import Layout from '../../layouts/main'
import { Helmet } from 'react-helmet'
export const AboutUs = () => {
  return (
    <Layout>
    <div className="w-full ">
      <div>
      <section className="mt-[47px] p-[10px] mx-[30px]">
          <h2 className="text-[#646464] mb-5">درباره آکاپال</h2>
          <p className="text-gray-500 text-justify mb-[15px]">
            آکادمی پژوهشی آکادمیک پالس “آکاپال” با هدف ارتقاء رتبه علمی کشور عزیزمان ایران بستری را فراهم کرده است که در چارچوب قوانین جمهوری اسالمی ایران دانشجویان و عزیزانی که در ابتدای راه پژوهشی قرار دارند و یا دانشآموختگانی که در راه ارتقای رزومه کاری خود هستند بتوانند بدون دغدغه مقاالت علمیشان را نگارش و در بهترین مجالت و نشری ات چاپ نمایند؛ در آزمونهای
            مختلف کنکور ارشد، دکتری، نظاممهندسی، استخدامی و …… با فراغ بال شرکت نمایند و موقعیت بورسیه تحصیلی بیابند.
          </p>
      </section>
      <section className=" mt-[30px] flex mx-[30px]">

        <div className="p-[10px] relative w-full">
            <h2 className=" text-[#1631C8] mb-3 ">هدف آکاپال</h2>
            <div className="w-full h-[3px] bg-[#6EC1E4] absolute" >
            </div>
            <div className="w-full h-[1.5px] bg-[#457a90] absolute"></div>
        </div>

        <div className="p-[10px] w-full"> 
          <p className=" text-gray-500">
            آکادمیک پالس با افتخار اعالم میکند که هدف ما ارائه آموزش های تخصصی، تجربیات و راهنمایی در زمینه های گوناگون به
            دانشجویان است. افتخار تیم تخصصی ما ۱0 سال خدمات آموزشی- پژوهشی و رضایت مشتریان و اساتیدی است که با ما همکاری دارند
          </p>
        </div>

      </section>

      <section className=" mt-[30px] flex  mx-[30px]">

        <div className="p-[10px] relative">
            <h2 className=" text-[#1631C8] mb-3">تفکر آکاپال</h2>
            <div className="w-full h-[3px] bg-[#6EC1E4] absolute" >
            </div>
            <div className="w-full h-[1.5px] bg-[#457a90] absolute"></div>
        </div>

        <div className="p-[10px]">
          <p className=" text-gray-500">
          در این مسیر پر پیچ و خم تیم موسسه آکاپال با تجربه خود همراه گام به گام شما است. خدشه دار شدن اعتماد دانشجو و ضرر و زیان دانشپژوه در این مسیر خط قرمز ما، است.
          </p>
        </div>

      </section>

      <section className=" mt-[30px] flex  mx-[30px]">

        <div className="p-[10px] relative">
          <h2 className=" text-[#1631C8] mb-3">«کامیابی شما، موفقیت ماست!»</h2>
          <div className="w-full h-[3px] bg-[#6EC1E4] absolute" >
            </div>
            <div className="w-full h-[1.5px] bg-[#457a90] absolute"></div>
        </div>

        <div className="p-[10px]">
          <p className=" text-gray-500">
          بزرگ‌ترین چشم‌انداز ما برنامه‌ریزی دقیق برای رساندن شما به بالاترین هدفی که در نظر دارید.
          </p>
        </div>

      </section>
   
      </div>
    </div>
    </Layout>
  )
}
