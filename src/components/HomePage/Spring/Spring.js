import React from "react";
import "./Spring.css";

const Spring = ({ image }) => {
  return (
    <div className="col-md-4 m-auto">
      <img src={image.img} alt="" className="img-fluid p-3 rounded" />
    </div>
  );
};

export default Spring;
