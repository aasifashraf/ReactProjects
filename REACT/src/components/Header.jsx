import { useState } from "react";
import Body from "./Body";
import CardsData from "./Cards";

const Header = () => {

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
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
