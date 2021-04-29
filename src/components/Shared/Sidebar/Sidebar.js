import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import SignOut from "../../Authentication/SignOut/SignOut";
import { UserContext } from "../../../App";

import {
  FaSeedling,
  FaPlaneDeparture,
  FaRegGrinStars,
  FaAdn,
  FaMediumM,
  FaMale,
  FaHome,
} from "react-icons/fa";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://sleepy-basin-61467.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/userService" className="text-white">
            <FaSeedling /> <span>Service List</span>
          </Link>
        </li>
        <li>
          <Link to="/placeService" className="text-white">
            <FaPlaneDeparture /> <span>Place Service</span>
          </Link>
        </li>
        <li>
          <Link to="/review" className="text-white">
            <FaRegGrinStars /> <span>Reviews</span>
          </Link>
        </li>
        {isAdmin && (
          <div>
            <li>
              <Link to="/manageOrder" className="text-white">
                <FontAwesomeIcon icon={faUsers} />{" "}
                <span className="text-danger">Manage Order</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <FaAdn /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/manageService" className="text-white">
                <FaMediumM /> <span>Manage Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <FaMale /> <span>Make Admin</span>
              </Link>
            </li>
          </div>
        )}
        <li>
          <Link to="/" className="text-white">
            <FaHome /> <span>Go Back Home</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <span>
            <SignOut></SignOut>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
