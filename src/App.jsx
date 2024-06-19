import React, {lazy, Suspense, useContext, useState} from "react";
import ReactDOM from "react-dom/client";
import resData from "./utils/swiggyApiData";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error  from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Applayout = () => {
  let [userName, setUserName]  = useState("Akshay Saini");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      
      <div className="app">
        <Header />
        <Outlet></Outlet>
        {/* <Body resData={resData} /> */}
        {/* {footer} */}
      </div>
      </UserContext.Provider>
        
      </Provider>
    
  );
};

let ele = ReactDOM.createRoot(document.querySelector("#root"));

let Grocery = lazy(()=>import("./components/Grocery"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[
      {
        path:"/",
        element:<Body />
      }, 
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<div><h1>Loading............</h1><Shimmer /></div>}><Grocery /></Suspense>
      },
      {
        path:"/cart",
        element: <Cart />
      }

    ],
    errorElement: <Error />,
  },
  
]);
ele.render(<RouterProvider router={routes} />);
