import "./App.css";
import MenuPart from "./MenuPart";
import MyRoutes from "./MyRoutes";
function NavBar() {
  const logo = require("./images/logo.jpg");

  return (
    <div  className="relative md:justify-between z-10">
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl  tracking-widest text-gray-500 md:text-lg cursor-pointer">
            <img className="h-10 inline" src={logo} alt="Logo" />
            BHistory
          </span>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <MenuPart />
          </span>
        </div>
          <MyRoutes />
      </nav>
    </div>
  );
}

export default NavBar;