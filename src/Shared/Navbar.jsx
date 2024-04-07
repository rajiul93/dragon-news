import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut()
  }
  const navItem = (
    <>
      <li>
        <NavLink  className={({ isActive}) => isActive ? "text-red-700" : ""
  }to="/">Home</NavLink>
      </li>
   {
    !user &&    <li>
    <NavLink
     className={({ isActive}) =>  isActive ? "text-red-700" : ""
   }
      to="/login"
    >
      Login
    </NavLink>
  </li>
   }
    </>
  ); 
  return (
    <div className="navbar shadow-xl rounded-xl px-4">
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
            {navItem}
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" space-x-4 menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {user?<img className="rounded-full w-12 h-12"  src={user.photoURL} alt="" />:<img width={50} src={userIcon} alt="" />}
        <div>
          {
            user ?
            <button onClick={handleLogOut} className="btn btn-active btn-neutral">Log Out</button>:
            <Link to='/login'><button className="btn btn-active btn-neutral">Login</button></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
