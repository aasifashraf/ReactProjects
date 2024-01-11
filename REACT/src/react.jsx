// Layout.js
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Cards from "./Cards";

let Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Body data={Cards} />
    </div>
  );
};

ReactDOM.render(<Layout />, document.getElementById("root"));
