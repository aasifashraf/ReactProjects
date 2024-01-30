import { useState } from "react";
import { Link } from "react-router-dom";
import { logoURL } from "../constant/URL.JSX";

const Header = () => {
  // let btnlogin = "Login";
  const [loginbtn, setloginbtn] = useState("Login");
  const [search, setsearch] = useState([]);
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
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => {
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
            }}>
            {loginbtn}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
