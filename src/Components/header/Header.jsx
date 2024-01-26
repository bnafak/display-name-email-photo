import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="mr-9 flex">
            <Link className="mr-9" to='/'>Home</Link>
            <Link className="mr-9" to='/login'>Login</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
    );
};

export default Header;