import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import firebaseConfig from "./firebase.config";
import Navbar from "../../Shared/Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";
import logo from "../../../images/bannerImg/banner-5.jpg";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSigned: true,
          name: displayName,
          photo: photoURL,
          email,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const styleLogin = {
    marginTop: "20px",
    height: "400px",
    boxShadow: "10px 10px 25px gray",
    borderRadius: "10px",
  };
  const imgStyle = {
    width: "100%",
    borderRadius: "200px",
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div style={styleLogin} class="d-grid gap-2 col-4 mx-auto ">
          <div className="text-center text-info">
            <h1>Login ChocoRoco</h1>
          </div>
          <div className="m-auto w-50">
            <img style={imgStyle} src={logo} alt="" />
          </div>
          <div className="w-75 m-auto">
            <button
              onClick={handleGoogleSignIn}
              class="btn btn-danger w-100 "
              type="button"
            >
              <span className="me-3">
                <FaGoogle />
              </span>
              Sign With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
