import React from "react";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <div className="w-full px-8 shadow bg-white">
      <div className="max-w-[1100px] flex items-center justify-between mx-auto w-full py-2">
        <Link to="/" className="">
          <img src="./logo.png" alt="" className="w-fit h-12" />
        </Link>

        <div className="">
          <ul className="flex items-center gap-4 font-medium">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `cursor-pointer px-4 py-3 rounded-lg hover:text-blue-700 hover:bg-accent ${
                    isActive ? "text-blue-700 bg-accent" : ""
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            {/* <li className="cursor-pointer hover:text-blue-700 px-4 py-3 rounded-lg hover:bg-accent">
              Payments
            </li> */}
            <li className="cursor-pointer hover:text-blue-700 px-4 py-3 rounded-lg hover:bg-accent">
              Data Bundles
            </li>
            <li className="cursor-pointer hover:text-blue-700 px-4 py-3 rounded-lg hover:bg-accent">
              Airtime
            </li>
            <li className="cursor-pointer hover:text-blue-700 px-4 py-3 rounded-lg hover:bg-accent">
              Payments
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Button size="lg">
            Login <LogIn />
          </Button>

          <Button size="lg" variant="outline" className="text-md">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
