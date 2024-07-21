const Layout = ({ children }) => {
  return (
    <div className=" bg-white -z-20 ">
      <div className="max-w-[1140px] mx-auto px-[15px]">{children}</div>
    </div>
  );
};

export default Layout;
