import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
