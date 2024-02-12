// Layout.js
import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
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
import userContext from "./constant/userContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import AppStore from "./Redux/AppStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

// here i used lazy loading or onloading demand or dynamic loading or dynamic import or chunkking or code splitting
// because reduces loading time it loads only when it called or clicked
const InfoMenu = lazy(() => import("./components/menuinfo"));

let Layout = () => {
  // const data = useContext(userContext);
  // const { username, id } = data;

  const [diffUser, setdiffUser] = useState({});
  const [search, setsearch] = useState("");
  const { username2, id2 } = diffUser;

  useEffect(() => {
    const diffUser = {
      username2: "aasif2",
      id2: "12345",
      search: "",
    };
    setdiffUser(diffUser);
  }, []);
  //over writting orginal value usecontext usename value
  return (
    <Provider store={AppStore}>
      <userContext.Provider value={{ username: username2 }}>
        <div className="layout">
          {/* //over writting orginal value usecontext usename value */}
          <userContext.Provider
            value={{ username: "Username", search, setsearch }}>
            <Header />
          </userContext.Provider>
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
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
      { path: "/Cart", element: <Cart /> },
    ],
    errorElement: <ErrorElement />,
  },
]);

let Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<RouterProvider router={approuter} />);
