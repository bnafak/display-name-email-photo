import {Outlet } from "react-router-dom";
import Header from "../header/Header";

const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
  
    </div>
  );
};

export default Main;
