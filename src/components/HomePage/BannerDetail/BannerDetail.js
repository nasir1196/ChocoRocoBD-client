import React from "react";
import "./BannerDetail.css";

const BannerDetail = () => {
  return (
    <div>
      <div className="row container m-auto bg-dark text-white mb-5 main-border">
        <div className="col-md-4 col-ms-12 text-center p-2 mt-3">
          <h3 className="text-uppercase">Free Delivery over</h3>
          <h3>$19.99</h3>
          <div className="p-3 border-button">
            <button>Details</button>
          </div>
        </div>
        <div className="col-md-4 col-ms-12 text-center p-2 mt-3 border-style">
          <h3 className="text-uppercase">Collect Your </h3>
          <h3 className="text-uppercase">Chocolate Points</h3>
          <div className="p-3 border-button">
            <button>Details</button>
          </div>
        </div>
        <div className="col-md-4 col-ms-12 text-center p-2 mt-3">
          <h3 className="text-uppercase">Best Selling</h3>
          <h3 className="text-uppercase">Sweet Gifts</h3>
          <div className="p-3 border-button">
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetail;
