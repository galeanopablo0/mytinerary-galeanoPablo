import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import alerts from "../utils/alerts";
import { login, logout } from "../redux/actions/userAction";

const Header = () => {
  const location = useLocation();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const links = [
    { 
      path: "/", 
      title: "Home", 
      active: "/" === location.pathname,
    },
    {
      path: "/Cities",
      title: "Cities",
      active: "/Cities" === location.pathname,
    }
  ];

  const clickSignOut = () => {
    if (user) {
      dispatch(logout());
      alerts.success("Session closed successfully.");
    } else {
      alerts.error("There's no account logged in right now");
    }
  };

  return (
    <>
      <header className="flex justify-center border-b-2 border-b-black">
        <div className="flex flex-col md:flex-row justify-center md:justify-between p-5 py- md:py-10 items-center w-[95%] sm:w-[80%]">
          <h1>
            <Link
              to={"/"}
              className="text-4xl md:text-3xl pb-2 font-bold flex align-center"
            >
              My Tinerary
            </Link>
          </h1>
          <nav className="flex items-center gap-6 lg:gap-10">
            {links.map((link) => (
              <Link
                to={link.path}
                key={link.title}
                className={`text-xl hover:scale-95 px-1 hover:text-blue-500/90 ${
                  link.active
                    ? "border-b-[3px] border-blue-600 hover:text-black hover:scale-100"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
            {user ? (
                <button className="flex items-center border border-black p-2 px-4 rounded-md bg-red-700 hover:bg-red-800 text-[#f4f4f4]" onClick={clickSignOut}>
                  <img className="w-10 mr-3" src="src/assets/login.png" alt="sign out button" />
                  Sign out
                </button>
            ) : <Link to={"/Login"} className="text-xl hover:scale-95 px-1 hover:text-blue-500/90">
                Sign in
                </Link>
            }
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
