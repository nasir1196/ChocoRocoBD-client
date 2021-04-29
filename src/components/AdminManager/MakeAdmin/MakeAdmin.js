import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const adminData = {
      name: data.name,
      email: data.email,
      localTime: new Date(),
    };

    fetch("https://sleepy-basin-61467.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("New Admin Added Successfully!");
        }
      });
  };
  return (
    <div>
      <div className="row w-100">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div>
            <h1 className="text-success text-center">
              Create A New Admin For Your Web Box!!!
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group m-2">
              <label for="adminName">Admin Name</label> <br />
              {errors.name && (
                <span className="text-danger">Required This Field*</span>
              )}
              <br />
              <input
                type="text"
                class="form-control"
                id="adminName"
                placeholder="Enter Name"
                {...register("name", { required: true })}
              />
            </div>

            <div class="form-group m-2">
              <label for="email">Add Email Address</label>
              <br />
              {errors.email && (
                <span className="text-danger">Required This Field*</span>
              )}{" "}
              <br />
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />
            </div>

            <div className="m-2">
              <button type="submit" class="btn btn-success">
                Add Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
