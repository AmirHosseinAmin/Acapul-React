import { FaSquare } from "react-icons/fa";

export const BlogCards = (props) => {
  return (
    <div className="group w-[33%] shadow-[0_5px_30px_rgba(70,72,77,0.08)] rounded-md transition-all mt-4 mb-0 hover:mt-1 hover:mb-3 duration-300 hover:shadow-[0_8px_30px_rgba(70,72,77,0.2)]">
      <div className="bg-white rounded-md">
        <div>
          <img className="rounded-md" src={props.img} alt="" />
        </div>
        <div className="px-[10px] py-[20px]">
          <div className="flex flex-row ">
            <span className=" flex pl-[5px] items-center justify-center">
              <FaSquare color="#0997e1" fontSize="0.4em" />
            </span>
            <span className="text-[#7f8187] text-[12px]">{props.category}</span>{" "}
          </div>
          <div>
            <h4 className="font-bold py-[20px] ">{props.title}</h4>
          </div>
          <div>
            <p className="text-[#7f8187] text-[12px] flex felx-wrap">
              {props.discription}
            </p>
          </div>
          <div className="pt-[10px] flex justify-end">
            <a className="border-[#0997e1] border-2 text-[#0997e1]  rounded-[4px] px-2 py-1 text-[14px] group-hover:bg-[#0997e1] group-hover:text-white duration-200">
              بیشتر بدانید
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
