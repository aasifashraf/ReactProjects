// Layout.js
import React from "react";
import ReactDOM from "react-dom/client";
import Restaraunt from "./components/Restaraunt";
import Cards from "./components/Cards";
import Body from "./components/Body";
import Header from "./components/Header";

let Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Body />
    </div>
  );
};

let Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<Layout />);
