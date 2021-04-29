import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AddService from "./components/AdminManager/AddService/AddService";
import Login from "./components/Authentication/Login/Login";
import Home from "./components/HomePage/Home/Home";
import ManageProduct from "./components/AdminManager/ManageProduct/ManageProduct";
import MakeAdmin from "./components/AdminManager/MakeAdmin/MakeAdmin";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
import UserReview from "./components/AdminManager/Dashboard/UserServiceArea/UserReview/UserReview";
import UserService from "./components/AdminManager/Dashboard/UserServiceArea/UserService/UserService";
import PlaceService from "./components/AdminManager/Dashboard/UserServiceArea/PlaceService/PlaceService";
import Profile from "./components/HomePage/Profile/Profile";
import Blog from "./components/HomePage/Blog/Blog";
import Features from "./components/HomePage/Features/Features";
import Product from "./components/HomePage/Product/Product";
import ManageService from "./components/AdminManager/ManageService/ManageService";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/feature">
            <Features />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <PrivateRoute path="/dashboard">
            <UserService />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/manageOrder">
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <UserReview />
          </PrivateRoute>
          <PrivateRoute path="/userService">
            <UserService />
          </PrivateRoute>
          <PrivateRoute path="/placeService/:id">
            <PlaceService />
          </PrivateRoute>
          <PrivateRoute path="/placeService">
            <PlaceService />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
