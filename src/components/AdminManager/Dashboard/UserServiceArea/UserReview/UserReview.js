import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../../App";
import Sidebar from "../../../../Shared/Sidebar/Sidebar";

const UserReview = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { name, photo } = loggedInUser;
  const onSubmit = (data) => {
    data.userPhoto = photo;
    fetch("https://sleepy-basin-61467.herokuapp.com/addReviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Your Comment Submitted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="container w-75">
            <h1>Add Your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group">
                <label for="name">Your Full Name</label>
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="text"
                  defaultValue={name}
                  class="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div class="form-group">
                <label for="company">Company Name</label>
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  placeholder="Company Name"
                  {...register("company", { required: true })}
                />
              </div>
              <div class="form-group">
                <label for="comment">Your Comments</label>
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
                <textarea
                  class="form-control"
                  id="comment"
                  cols="30"
                  rows="10"
                  placeholder="Write Your Comment"
                  {...register("comment", { required: true })}
                ></textarea>
              </div>
              <div className="m-3">
                <input type="submit" value="Post" class="btn btn-warning" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
