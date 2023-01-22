import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme";
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import ButtonLink from "./buttonLink";

export default function Layout({ pageTitle, children }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="bg-parrent">
      <title>{pageTitle} </title>
      <div className="drawer h-full">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/*<!-- Navbar -->*/}
          <div className="max-w-5xl mx-auto w-full navbar justify-between bg-parrent">
            <div className="flex-none md:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 hidden md:block">
              {" "}
              <ul className="flex items-center gap-6 text-base">
                {/*<!-- Navbar menu content here -->*/}
                <li>
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/frameworks">Frameworks</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="gap-4 mr-3 hidden md:block">
              <Link to="/addnewframework">
                <ButtonLink
                  buttonText="New Framework"
                  buttonIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  }
                />
              </Link>
            </div>
            <div className="p-2 border-l-2 border-black">
              {theme.theme === "light" ? (
                <RiMoonFill
                  className="hover:cursor-pointer text-black"
                  onClick={() => theme.setTheme("dark")}
                />
              ) : (
                <RiSunFill
                  className="hover:cursor-pointer text-white"
                  onClick={() => theme.setTheme("light")}
                />
              )}
            </div>
          </div>
          {/*<!-- Page content here -->*/}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 bg-[#2A303C] sm:w-80 text-white">
            {/*<!-- Sidebar content here -->*/}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/frameworks">Explore</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/addnewframework">New Framework</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
