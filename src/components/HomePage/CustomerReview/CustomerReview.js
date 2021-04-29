import React, { useEffect, useState } from "react";
import ReviewDetails from "../../ReviewDetails/ReviewDetails";

const CustomerReview = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-basin-61467.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="pt-5 pb-5">
      <div className=" p-3 mb-3">
        <h1 className="text-center"> Customer Experience Review</h1>
        <div className="w-25 m-auto">
          {review.length === 0 && (
            <div class="spinner-border text-warning" role="status">
              <span class="sr-only"></span>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {review.map((comment) => (
            <ReviewDetails key={comment._id} review={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
