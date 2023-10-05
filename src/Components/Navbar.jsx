import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className="main">
        <div id="logo">
          <img
            src="https://dandenongmarket.com.au/assets/files/2020/05/SHOP-ONLINE-thumbnail-1-600x600.jpg"
            alt=" logo"
            height={70}
            width={200}
          />
        </div>
        <div id="menu">
          <ol>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"admin"}>Admin</Link>
            </li>
            <li>
              <Link to={"register"}>Register</Link>
            </li>
            <li>Login</li>
            <li>
              <Link to={"cart"}>
                {" "}
                <BsFillCartPlusFill id="cart" />
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
