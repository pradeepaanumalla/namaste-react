import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
 import { Link } from "react-router-dom";
 import useOnlineStatus from "./../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  let [btnName, setBtnName] = useState("login");
  let online = useOnlineStatus();
  let items = useSelector((state)=> state.cart.items);
  // console.log("items",items);

  let userContext = useContext(UserContext);
  // console.log(userContext);

  useEffect(()=>{
    // console.log("useEffect called")
  },[])

  return (
    <div className="flex flex-row w-{100%} justify-between bg-green-200 p-2">
      <div >
        <img className="w-20 h-20" src={LOGO_URL} />
      </div>

      <div className="flex flex-row gap-2 justify-end" >
        <ul className="flex flex-row gap-2 justify-end items-center">
          <li>{online ? "online" : "offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li className="font-bold"><Link to="/cart">Cart {items.length} items</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li> <button
        className="login"
        onClick={() => {
          setBtnName(btnName == "login" ? "logout" : "login");
        }}
      >
        {btnName}
      </button></li>
      <li className="font-bold">{userContext.loggedInUser}</li>
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
