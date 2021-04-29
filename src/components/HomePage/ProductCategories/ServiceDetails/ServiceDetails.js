import React from "react";
import { Link, useHistory } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const { name, description, img, _id } = service;
  const history = useHistory();
  const handleService = (id) => {
    history.push(`/placeService/${id}`);
  };
  return (
    <div className="col-md-4 col-ms-12">
      <div class="card text-center">
        <div className="container">
          <img class="card-img-top w-50 m-3" src={img} alt="" />
        </div>
        <div class="card-body ">
          <h3 class="text-center text-danger">{name}</h3>
          <h5 class="card-title text-center">{description}</h5>
        </div>
        <div className="p-3">
          <Link to={`/placeService/${_id}`}>
            <button className="btn-success" onClick={() => handleService(_id)}>
              Take Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
