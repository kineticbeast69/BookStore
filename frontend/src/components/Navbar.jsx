import { useEffect, useState } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [shadow, setShadow] = useState(false);
  const NavFunction = ({ isActive }) => {
    return isActive
      ? "text-base-300 text-blue-500 font-semibold md:text-xl"
      : "text-base text-white md:text-xl";
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [shadow]);
  return (
    <nav
      className={`mb-2  ${
        shadow
          ? "sticky-navbar shadow-md  duration-300 transition-all ease-in-out "
          : ""
      }`}
    >
      <div className="navbar bg-neutral mx-auto text-neutral-content px-2 md:px-10 lg:px-12">
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
                <NavLink to="/" className={NavFunction}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/course" className={NavFunction}>
                  Course
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={NavFunction}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={NavFunction}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-sm md:text-3xl">
            <FaBookOpenReader />
            <div className="logo text-orange-700">Kitabh-Store</div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={NavFunction}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/course" className={NavFunction}>
                Course
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={NavFunction}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={NavFunction}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className=" hidden md:block">
            <label className="input input-bordered flex items-center gap-2 mx-3">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <button
            className="btn btn-warning"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <a className=" font-semibold btn-sm text-sm p-o md:text-xl text-black">
              Login
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
