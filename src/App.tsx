import "./App.css";
import MenuPart from "./MenuPart";
import MyRoutes from "./MyRoutes";
function App() {
  const logo = require("./images/logo.jpg");

  return (
    <div className="bg-sky-950">
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
        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <MyRoutes />
        </ul>
      </nav>
    </div>
  );
}

export default App;
