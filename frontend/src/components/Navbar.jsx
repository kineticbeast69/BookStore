import { useEffect, useState } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
function Navbar() {
  const [shadow, setShadow] = useState(false);
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
      className={`mb-2 fixed top-0 left-0 right-0 Z-50 ${
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
                <a>Home</a>
              </li>
              <li>
                <a>Course</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-sm md:text-3xl">
            <FaBookOpenReader />
            <div className="logo text-orange-700">Kitabh-Store</div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base text-white md:text-xl">Home</a>
            </li>
            <li>
              <a className="text-base text-white md:text-xl">Course</a>
            </li>
            <li>
              <a className="text-base text-white md:text-xl">About</a>
            </li>
            <li>
              <a className="text-base text-white md:text-xl">Contact</a>
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
          <a className="btn btn-warning font-semibold btn-sm text-sm p-o md:text-xl text-black">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
