import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SideBar from "./SideBar/SideBar";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="grid w-11/12 border">
      <h1>This is Home</h1>
      <div className="flex">
          <Banner></Banner>    
          <SideBar></SideBar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
