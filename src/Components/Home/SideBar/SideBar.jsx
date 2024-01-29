import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div className="w-3/12 mx-auto flex ">
     
      <div className="">
        <div className="flex flex-col items-center"></div>
        <div className="bg-green-100">
          <div className="text-center">
            <h1 className="bg-blue-400 font-extrabold">সভাপতি</h1>
            <img className="mx-auto" src="chairman.jpg" alt="" />
            <Link to="/msg-chairman">
            <p className="mt-[-10]">রাইট রেভা স্যামুয়েল সুনীল মানখিন</p>
            <p  className="bg-blue-300 p-2">সভাপতির বাণী</p>
              <button className="btn btn-primary">বানী বিস্তারিত</button>
            </Link>
          </div>
          <br />
          <div className="text-center">
            <h1 className="bg-blue-400 p-4 font-extrabold">
              প্রধান শিক্ষক
            </h1>
            <img src="hm.jpg" alt="" />
            <p className="mt-[-10]">ললিত কুমার দ্রং</p>
            <p className="bg-blue-300 p-2">প্রধান শিক্ষকের বাণী</p>
            <button className="btn btn-primary"> বাণী বিস্তারিত</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
