import { NavLink, Outlet } from "react-router-dom";
import Header from "../Components/header/Header";

const Dashboard = () => {
  return (
    <div >
      <nav>
        <Header></Header>
      </nav>

      <main className="w-11/12 mx-auto ">
        <div className="grid py-5 grid-cols-12 min-h-screen">
          <div className="col-span-2 h-full flex flex-col items-center">
            <NavLink
              to="/"
              className="p-2 my-3 bg-orange-200 border border-stone-500 w-full"
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard/add-product"
              className="p-2 my-3 bg-orange-200 border border-stone-500 w-full"
            >
              Add Student
            </NavLink>
            
            <NavLink
              to="/dashboard/update"
              className="p-2 my-3 bg-orange-200 border border-stone-500 w-full"
            >
              Uptate
            </NavLink>
        
            <NavLink
              to="/dashboard/total-student"
              className="p-2 my-3 bg-orange-200 border border-stone-500 w-full"
            >
              Total Student
            </NavLink>
            <NavLink
              to="/dashboard/manage-category"
              className="p-2 my-3 bg-orange-200 border border-stone-500 w-full"
            >
              Manage Category
            </NavLink>
          </div>
          <div className="bg-green-100 col-span-10 h-full ">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
