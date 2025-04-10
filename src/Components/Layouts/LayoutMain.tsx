import { Outlet } from "react-router-dom";
import Navbar from "../ui/NavBar/Navbar";

const LayoutMain = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutMain;
