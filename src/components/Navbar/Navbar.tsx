import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  const linkClass = "p-3 rounded-lg border-t border-r border-l hover:text-primary";
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "text-primary" : "text-secondary"} ${linkClass}`
        }
      >
        Active
      </NavLink>
      <NavLink
        to="/archived"
        className={({ isActive }) =>
          `${isActive ? "text-primary" : "text-secondary"} ${linkClass} `
        }
      >
        Archived
      </NavLink>
    </nav>
  );
};

export default Navbar;
