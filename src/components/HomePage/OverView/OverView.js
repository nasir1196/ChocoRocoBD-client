import React from "react";
import Spring from "../../HomePage/Spring/Spring";
import "./OverView.css";
import over1 from "../../../images/overViewed/over-1 (1).jpg";
import over2 from "../../../images/overViewed/over-1 (2).jpg";
import over3 from "../../../images/overViewed/over-1 (3).jpg";
import over4 from "../../../images/overViewed/over-1 (4).jpg";
import over5 from "../../../images/overViewed/over-1 (5).jpg";
import over6 from "../../../images/overViewed/over-1 (6).jpg";

const over = [
  {
    id: 1,
    img: over1,
  },
  {
    id: 2,
    img: over2,
  },
  {
    id: 3,
    img: over3,
  },
  {
    id: 4,
    img: over4,
  },
  {
    id: 5,
    img: over5,
  },
  {
    id: 6,
    img: over6,
  },
];

const OverView = () => {
  return (
    <div className="animated">
      <div className="over-view-heading p-5 text-white">
        <h1>Over View Area</h1>
      </div>
      <div>
        <div className="row m-auto p-3">
          {over.map((pic) => (
            <Spring key={pic.id} image={pic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
