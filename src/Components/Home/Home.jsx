import { Outlet } from "react-router-dom";

import Footer from "./Footer";



const Home = () => {
    return (
        <div>
  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Home;