import Layout from "../main";

export const Topic = (props) => {
  return (
    <div className="mb-[50px]">
      <div className="bg-[url('../../assets/images/topic.png')] w-full bg-cover py-[48px]">
        <div className=" bg-[#ffffff05] w-fit">
          <h1 className="text-[26px] text-white mr-10 mb-[10px]"> {props.name}آموزش ها</h1>
          <nav className="bg-nav-gray text-white px-[12px] py-[8px] inline-block rounded-[5px] mr-10 text-[14px]">
            <a> خانه{"  >"}</a>
            <a> معماری{"  >  "}</a>
            <a> {props.name} </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
