import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // let btnlogin = "Login";
  const [loginbtn, setloginbtn] = useState("Login");
  const [search, setsearch] = useState([]);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            className="logoimage"
            src="https://cdn.dribbble.com/userupload/10283598/file/original-cf13bf74e14ee4b960c155b5cf4844e3.png"
            alt="Logo"
          />
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
