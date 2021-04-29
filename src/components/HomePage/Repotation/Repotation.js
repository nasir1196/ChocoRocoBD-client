import React from "react";
import img from "../../../images/bannerImg/banner-4.jpg";

const Repotation = () => {
  return (
    <div className="container mb-5">
      <div>
        <h1 className="text-center text-success p-3 m-3">
          TOTAL SERVICE COMPLETED
        </h1>
      </div>
      <div className="row bg-dark rounded">
        <div className="col-md-6 col-ms-12 p-5">
          <div className="container bg-light rounded">
            <div>
              <h1>Let's See Our</h1>
              <h1>
                Business <span style={{ color: "#ec0de6" }}>Policy</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium vero ut ullam commodi beatae quibusdam sit
                consequatur dolore illo harum, eius, facilis quam architecto!
                Debitis qui reiciendis quam quidem asperiores porro vel
                nesciunt! Rerum tempore fugit reiciendis doloremque voluptatum
                a?
              </p>
            </div>
            <div
              style={{ color: "#ec0de6" }}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <h1>1000+</h1>
                <p>Happy Customer</p>
              </div>
              <div>
                <h1>400+</h1>
                <p>Total Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-ms-12 p-5 d-flex justify-content-center align-items-center">
          <img src={img} alt="" className="w-100 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Repotation;
