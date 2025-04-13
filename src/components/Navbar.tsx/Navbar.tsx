import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
    const links = <>
        <NavLink
            to="/"
            className={  ({ isActive }) =>
            `px-4 text-lg py-2 rounded-md transition-all duration-300 ${
                isActive
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "hover:bg-orange-50 hover:text-orange-500"
            }`
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/allbooks"
            className={({ isActive }) =>
            `px-4 text-lg py-2 rounded-md transition-all duration-300 ${
                isActive
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "hover:bg-orange-50 hover:text-orange-500"
            }`
            }
        >
            All Books
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive }) =>
            `px-4 text-lg py-2 rounded-md transition-all duration-300 ${
                isActive
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "hover:bg-orange-50 hover:text-orange-500"
            }`
            }
        >
            About
        </NavLink>

        <NavLink
            to="/reviews"
            className={({ isActive }) =>
            `px-4 text-lg py-2 rounded-md transition-all duration-300 ${
                isActive
                ? "bg-orange-100 text-orange-600 font-semibold"
                : "hover:bg-orange-50 hover:text-orange-500"
            }`
            }
        >
            Reviews
        </NavLink>
        </>;
        
  
    return (

        <div className="max-w-[80%] mx-auto">
            <div className="navbar h-24 bg-base-100 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
                </ul>
                </div>
                <a className="text-lg"><img src="https://i.ibb.co.com/q3t1CR0Z/360-F-211078110-mttx-Edu3gs-Sb-MKajsy98-E4-M4-E5-RUCiuo-removebg-preview.png" height={100} width={100} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-3">
                
                {
                    links
                }
                </ul>
            </div>
            <div className="navbar-end">
                
                <Link to='/login' className="btn">Login</Link>
                {/* <Link to='/register' className="btn">Register</Link> */}
            </div>
            </div>
       
        </div>

            
    );
  };
  
  export default Navbar;
  