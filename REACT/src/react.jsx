// Layout.js
import React from "react";
import ReactDOM from "react-dom/client";
import Restaraunt from "./constant/Restaraunt";
import Cards from "./constant/Cards";
import Body from "./components/Body";
import Header from "./components/Header";
import ShimmerUI from "./constant/shimmerUI";

let Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
      {/* <ShimmerUI /> */}
    </div>
  );
};

let Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Layout />);
