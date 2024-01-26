import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/login/Login.jsx";
import Main from "./Components/LayOut/Main.jsx";
import Home from "./Components/Home/Home.jsx";
import ManageCategory from "./pages/ManageCategory.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import AddCategory from "./pages/AddCategory.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
    
  },
  {
    path:'/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'/dashboard/add-product',
        element: <AddProduct></AddProduct>
      },
      {
        path:'/dashboard/manage-product',
        element: <ManageCategory></ManageCategory>
      },
      {
        path:'/dashboard/addCategory',
        element: <AddCategory></AddCategory>
      },
      {
        path:'/dashboard/manage-category',
        element: <ManageCategory></ManageCategory>
      }
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
