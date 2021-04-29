import React from "react";

// this props are dealing from userService
const UserServiceDetails = ({ order }) => {
  const { img, name, description, status } = order;
  const statusStyle = {
    fontWeight: "bold",
    borderRadius: "10px",
  };
  return (
    <div className="col-md-4 col-ms-12">
      <div class="card text-center">
        <div className="container">
          <img class="card-img-top w-50 m-3" src={img} alt="" />
          <button style={statusStyle} class="p-2 btn-info  border-0 ">
            <span className="text-danger ">{status}</span>
          </button>
        </div>
        <div class="card-body ">
          <h3 class="text-center text-danger">{name}</h3>
          <h5 class="card-title text-center">{description}</h5>
        </div>
      </div>
    </div>
  );
};

export default UserServiceDetails;
