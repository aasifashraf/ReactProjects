// Layout.js
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import ContactUs from "./components/contactus";
import ErrorElement from "./components/ErrorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ShimmerUI from "./constant/shimmerUI";
// import InfoMenu from "./components/menuinfo";


// here i used lazy loading or onloading demand or dynamic loading or dynamic import or chunkking or code splitting 
// because reduces loading time it loads only when it called or clicked 
const InfoMenu = lazy(() => import("./components/menuinfo"));

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
      { path: "/About", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <InfoMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

let Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={approuter} />);
