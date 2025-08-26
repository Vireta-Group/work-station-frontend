import logoheader from "../../assets/logo/logo.png";
import user from "../../assets/logo/user.png";
const HeaderNav = () => {
  return (
    <nav className="flex overflow-clip px-[2%] py-1 h-[70px] w-full justify-between items-center bg-[#21282e] shadow-md fixed z-10">
      <div className="logo">
        <img className="w-[4rem]" src={logoheader} alt="logoHeader" />
      </div>

      

        <div className="user ">
          
          <div className="flex flex-col justify-center items-center ">
          <img className="w-[2.2rem] border-2 border-white  rounded-full " src={user} alt="" />
           <h2 className="text-shadow-lg text-blue-50 font-semibold ">John David</h2>
          </div>
        </div>


      
    </nav>
  );
};

export default HeaderNav;
