import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { TbClipboardCheck } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLink">
        <Link className="Home" to={"/"}>
          <AiFillHome />
        </Link>
        <Link className="Home" to={"/contact"}>
          <BiBarChartSquare />
        </Link>
        <Link className="Home" to={"/"}>
          <TbClipboardCheck />
        </Link>
        <Link className="Home" to={"/"}>
        <CiWallet />
        </Link>
        <Link className="Home" to={"/"}>
        <BsBagCheck />
        </Link>
        
      </div>
      <div className="sidebarLogout">
        <Link className="logOut" to={"/"}>
          <AiOutlineLogout />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
