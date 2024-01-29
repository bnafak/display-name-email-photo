import Navbar from "../Home/Navbar";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto flex-col z-index : 3">
      <div>
        <img className="mx-auto" src="banner1.jpg" alt="" />
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
