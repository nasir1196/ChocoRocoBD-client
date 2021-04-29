import React, { useContext } from "react";
import { UserContext } from "../../../App";
import "firebase/auth";
import firebase from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const SignOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const signedInUser = {
          name: null,
          email: null,
          isSigned: false,
        };
        setLoggedInUser(signedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        onClick={handleSignOut}
        style={{ fontWeight: "bold", borderRadius: "7px" }}
        className="btn-warning p-2"
      >
        <FontAwesomeIcon icon={faSignOutAlt} />
        Logged Out{" "}
      </button>
    </div>
  );
};

export default SignOut;
