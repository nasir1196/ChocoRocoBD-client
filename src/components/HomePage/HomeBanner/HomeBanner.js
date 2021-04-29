import React from "react";
import banner1 from "../../../images/bannerImg/banner-1.jpg";
import banner2 from "../../../images/bannerImg/banner-2.jpg";
import banner3 from "../../../images/bannerImg/banner-3.jpg";
import banner4 from "../../../images/bannerImg/banner-4.jpg";
import banner5 from "../../../images/bannerImg/banner-5.jpg";
import { MdAssignmentReturned } from "react-icons/md";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div>
      <div className="row container m-auto pt-5 mt-5 section-reverse">
        <div className="col-md-6 col-ms-12 bg-light">
          <div>
            <h1 className="p-1 mt-4">Making Life Sweet Everyday</h1>
            <p className="w-75 m-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              distinctio atque officiis tenetur! Accusantium a, odit itaque
              explicabo corrupti magni. Saepe voluptatibus provident in sit
              debitis delectus voluptas tempora quibusdam?
            </p>
            <div className="button-container">
              <button className="detail-button">
                <MdAssignmentReturned /> Details
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-ms-12">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={banner1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={banner2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={banner3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={banner4} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={banner5} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
