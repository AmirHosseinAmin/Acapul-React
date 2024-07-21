import React from 'react'
import Layout from '../../layouts/main'

export const ContactUs = () => {
  return (
    <div>
      <Layout>
      <section className="mt-[50px] max-w-[1140px] mx-[38px]">
        <div className="w-[100%] flex">
          <div className="w-[50%] p-[10px]">

            <div className="mb-[10px]">
              <h2 className="text-[#626262]">ارتباط با ما</h2>
            </div>

            <div className="mb-[15px]">
              <h6 className="text-[16px] text-[#737373]">خوش حال میشیم باهاتون آشنا بشیم!</h6>
            </div>

            <div className="my-[16px]">

              <div className="mb-[18px}">
                <h3 className="mb-[6px} mt-[10px] text-[1.25em] font-bold">فرم تماس</h3>
              </div>

              <div>
                <ul className="w-[100%]">

                  <li className="mt-[16px] pl-[16px]">

                    <div className="flex pb[3px]">
                      <p className="font-bold text-[#6c757d]">نام</p>
                      <span className="mr-[4px] text-[#790000] font-bold">*</span>
                    </div>

                    <div className="mt-[8px] pl-[16px] pt-[2px] ml-[-4px]">
                      <input type="text" className="w-[calc(100%+10px)] px-[4px] py-[5px] mb-[12px] border border-solid border-[#dcdcdc] rounded-[4px] leading-[1.4em]"/>
                    </div>

                  </li>

                  <li className="mt-[16px] pl-[16px]">

                    <div className="flex pb[3px]">
                      <p className="font-bold text-[#6c757d]">ایمیل</p>
                      <span className="mr-[4px] text-[#790000] font-bold">*</span>
                    </div>

                    <div className="mt-[8px] pl-[16px] pt-[2px] ml-[-4px]">
                      <input type="text" className="w-[calc(100%+10px)] px-[4px] py-[5px] border border-solid border-[#dcdcdc] rounded-[4px] leading-[1.4em]"/>
                    </div>

                  </li>

                  <li className="mt-[16px] pl-[16px]">

                    <div className="flex pb[3px]">
                      <p className="font-bold text-[#6c757d]">موضوع</p>
                      <span className="mr-[4px] text-[#790000] font-bold">*</span>
                    </div>

                    <div className="mt-[8px] pl-[16px] pt-[2px] ml-[-4px]">
                      <input type="text" className="w-[calc(100%+10px)] px-[4px] py-[5px] border border-solid border-[#dcdcdc] rounded-[4px] leading-[1.4em]"/>
                    </div>

                  </li>

                  <li className="mt-[16px] pl-[16px]">

                    <div className="flex pb[3px]">
                      <p className="font-bold text-[#6c757d]">متن پیام</p>
                      <span className="mr-[4px] text-[#790000] font-bold">*</span>
                    </div>

                    <div className="mt-[8px] w-[100%]">
                      <textarea name="text-area" id="textarea" cols="50" rows="10" className="w-[100%] py-[6px] px-[8px] border border-solid border-[#dcdcdc] rounded-[4px]"></textarea>
                    </div>

                  </li>

                </ul>
                <input type="submit"/> 
                <p>,x,sl,x,</p>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="">
              <div></div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}
