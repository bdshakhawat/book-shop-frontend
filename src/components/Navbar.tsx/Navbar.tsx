


const Navbar = () => {
    const links = <>
      <li>Home</li>
      <li>All Books</li>
      <li>About</li>
      <li>Reviews</li>
    </>;
  
    return (

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
                <a className="text-xl"><img src="https://i.ibb.co.com/xSc69QtL/360-F-211078110-mttx-Edu3gs-Sb-MKajsy98-E4-M4-E5-RUCiuo-removebg-preview.png" height={250} width={250} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                
                {
                    links
                }
                </ul>
            </div>
            <div className="navbar-end gap-5">
                
                <a className="btn">Login</a>
                <a href="" className="btn">Register</a>
            </div>
            </div>
       

            
    );
  };
  
  export default Navbar;
  