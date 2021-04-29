import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo/mainLogo.png";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const profileStyle = {
    borderRadius: "50%",
    width: "17%",
    marginLeft: "5px",
  };
  const logoStyle = {
    width: "10%",
    marginLeft: "50px",
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src={logo} style={logoStyle} alt="" />
          ChocoRoco BD
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/feature">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/blog">
                Blog
              </Link>
            </li>
            {loggedInUser.isSigned ? (
              <li class="nav-item">
                <Link class="nav-link text-success" to="/profile">
                  {loggedInUser.name}
                  <img style={profileStyle} src={loggedInUser.photo} alt="" />
                </Link>
              </li>
            ) : (
              <li class="nav-item">
                <Link class="nav-link " to="/login">
                  Join Us
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
