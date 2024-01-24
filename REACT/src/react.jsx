// Layout.js
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/about";
import ContactUs from "./components/contactus";
import ErrorElement from "./components/ErrorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import InfoMenu from "./components/menuinfo";

let Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/restaurant/:resId", element: <InfoMenu /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

let Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={approuter} />);
