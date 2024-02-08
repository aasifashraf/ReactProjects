import { useState } from "react";
import { Link } from "react-router-dom";
import { logoURL } from "../constant/URL.JSX";
import { useContext } from "react";
import userContext from "../constant/userContext";
const Header = () => {
  // let btnlogin = "Login";
  const [loginbtn, setloginbtn] = useState("Login");
  const [search, setsearch] = useState([]);

  const { username, id } = useContext(userContext);
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
              <li></li>
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </nav>
          <button
            className=" bg-blue-500 m-5"
            onClick={() => {
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
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
