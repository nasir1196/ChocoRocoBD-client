import React from "react";
import "./ReviewDetails.css";

const ReviewDetails = ({ review }) => {
  const { name, company, userPhoto, comment } = review;
  return (
    <div className="col-md-3 ">
      <div className="card-style">
        <div className="d-flex justify-content-center align-items-center mt-3">
          <img class="w-25" src={userPhoto} alt="" />
          <div className="ms-2">
            <h5>{name}</h5>
            <h4>CEO, {company}</h4>
          </div>
        </div>
        <div className="text-center">
          <p>{comment}</p>
          <p>Ratings:✨✨✨✨✨</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
