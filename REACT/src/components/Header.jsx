import { useState } from "react";
import { Link } from "react-router-dom";
import { logoURL } from "../constant/URL.JSX";
import { useContext } from "react";
import userContext from "../constant/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  // let btnlogin = "Login";
  const [loginbtn, setloginbtn] = useState("Logout");

  const { setsearch } = useContext(userContext);
  const { search, username, id } = useContext(userContext);

  //subscribing to store using use selector hook
  const SelectItems = useSelector((store) => store.Cart.items);
  console.log(SelectItems);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img className="logoimage" src={logoURL} alt="Logo" />
        </div>
        <div className="right">
          <nav className="nav">
            <input
              type="text"
              className="search"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
              }}
            />
            <ul>
              <li>
                <Link to="./">HOME</Link>
              </li>
              <li>
                <Link to="./ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="./About">About</Link>
              </li>
              <Link to="/Cart">
                <li className=" relative">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className=" font-black absolute top-[-1rem] left-[5px] bg-white w-1 h-1 rounded-md">
                    {SelectItems.length}
                  </span>
                </li>
              </Link>
            </ul>
          </nav>
          <button
            className=" bg-blue-500 m-5"
            onClick={() => {
              loginbtn === "Logout"
                ? setloginbtn("Login")
                : setloginbtn("Logout");
            }}>
            {loginbtn}
          </button>
          <div className=" flex justify-between items-center font-light flex-col py-0 ml-[5rem]">
            <div className=" w-7 h-7 bg-slate-300 rounded-[50%]"></div>
            <p className="text-sm">{username}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
