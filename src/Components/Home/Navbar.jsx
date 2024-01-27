import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar max-w-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>হোম</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>হোম</a>
            </li>
            <li>
              <details>
                <summary>পরিচিতি</summary>
                <ul className="p-2">
                  <li>
                    <NavLink to="/teachers">শিক্ষক মন্ডলীর তথ্যাবলী</NavLink>
                  </li>
                  <li>
                    <a>ম্যানেজিং কমিটির তথ্যাবলী</a>
                  </li>
                  <li>
                    <a>প্রধান শিক্ষকের বাণী</a>
                  </li>
                  <li>
                    <a>প্রতিষ্ঠানের ইতিহাস</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>একাডেমিক</summary>
                <ul className="p-2">
                  <li>
                    <a>শ্রেণী ভিত্তিক শাখা</a>
                  </li>
                  <li>
                    <a>শিক্ষার্থীর তথ্য</a>
                  </li>
                  <li>
                    <a>অনুমতি ও স্বীকৃতি</a>
                  </li>
                  <li>
                    <a>অর্জনসমূহ</a>
                  </li>
                  <li>
                    <a>ছাত্রাবাস</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>ভর্তি</summary>
                <ul className="p-2">
                  <li>
                    <a>ভর্তি নোটিশ</a>
                  </li>
                  <li>
                    <a>অনলাইন রেজিস্ট্রেশন</a>
                  </li>
                  <li>
                    <a>ভর্তি অনুসন্ধ্যান</a>
                  </li>
                  <li>
                    <a>ভর্তির সময়</a>
                  </li>
                  <li>
                    <a>ভর্তি পরীক্ষা</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>পরীক্ষা</summary>
                <ul className="p-2">
                  <li>
                    <a>পরীক্ষার নোটিশ</a>
                  </li>
                  <li>
                    <a>পরীক্ষার রুটিন</a>
                  </li>
                  <li>
                    <a>অন লাইন ফি জমা</a>
                  </li>
                  <li>
                    <a>পরীক্ষার এডমিট কার্ড</a>
                  </li>
                  <li>
                    <a>পরীক্ষার ফলাফল</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>নোটিশ বোর্ড</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>প্রকাশনা</summary>
                <ul className="p-2">
                  <li>
                    <a>শিক্ষা সফল স্বারক</a>
                  </li>
                  <li>
                    <a>ম্যাগাজিন</a>
                  </li>
                  <li>
                    <a>বার্ষিক কার‌যক্রম</a>
                  </li>
                  <li>
                    <a>একাডেমিক ক্যালেন্ডার</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>মিডিয়া</summary>
                <ul className="p-2">
                  <li>
                    <a>ফটো গ্যালারী</a>
                  </li>
                  <li>
                    <a>ভিডিও গ্যালারী</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>লাইব্রেরী</summary>
                <ul className="p-2">
                  <li>
                    <a>পড়াশোনা</a>
                  </li>
                  <li>
                    <a>স্কুল সার্টিফিকেট</a>
                  </li>
                  <li>
                    <a>বই ডাউনলোড</a>
                  </li>
                  <li>
                    <a>নীতিমালা</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>যোগাযোগ</summary>
                <ul className="p-2">
                  <li>
                    <a>ইমেইল</a>
                  </li>
                  <li>
                    <a>মোবাইল</a>
                  </li>
                 
                </ul>
              </details>
            </li>
    
            <li>
              <li>
                <NavLink to="/login">
                  <a>লগইন</a>
                </NavLink>
              </li>
            </li>
            <li>
              <li>
                <NavLink to="/dashboard">
                  <a>ড্যাশবোর্ড</a>
                </NavLink>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
