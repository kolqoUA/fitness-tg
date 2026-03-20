import "./styles.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { navbarItems } from "../const";

const Navbar = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const navigate = useNavigate();

  

  return (
    <>
      <nav className="navbar">
        <ul>
          {navbarItems(currentPath).map((item) => (
            <li
              key={item.path}
              onClick={() => (navigate(item.path), setCurrentPath(item.path))}
              className={currentPath === item.path ? "active" : ""}
            >
              {item.icon}
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
