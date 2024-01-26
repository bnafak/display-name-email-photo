import { Outlet } from "react-router-dom";
import Header from "../header/Header";


const Main = () => {
    return (
        <div className="mx-auto h-screen">
            <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;