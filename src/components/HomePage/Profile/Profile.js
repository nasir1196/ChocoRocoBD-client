import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Navbar from "../../Shared/Navbar/Navbar";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="text-center">
        <h1>Your Profile</h1>
        <img src={loggedInUser.photo} alt="" />
        <p>Email: {loggedInUser.email}</p>
      </div>
    </div>
  );
};

export default Profile;
