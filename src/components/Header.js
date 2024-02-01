import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logo from "./../../assets/logo.png";


const Header = () => {
  const [btnNameReact, setBtnName] = useState("login");
  const OnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-300 shadow-lg m-2 p-2 sm:bg-orange-50 lg:bg-orange-50">
      <div className="logo-container">
        <img className="w-40" src={logo} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold text-orange-600">Online Status: {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 font-bold text-orange-600 hover:text-orange-500 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  text-orange-600 font-bold hover:text-orange-500  hover:underline">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4   text-orange-600 font-bold hover:text-orange-500  hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4   text-orange-600 font-bold hover:text-orange-500 hover:underline">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <button
            className="login px-4  font-bold bg-orange-500 hover:bg-orange-400 text-white"
            onClick={() => {
              btnNameReact === "login" ? setBtnName("Logout") : setBtnName("login");
            }}
          >
            {btnNameReact}
          </button>
         
        </ul>
      </div>
    </div>
  );
};

export default Header;
