import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import BannerDetail from "../BannerDetail/BannerDetail";
import HomeBanner from "../HomeBanner/HomeBanner";

const Header = () => {
  return (
    <div>
      <div className="mb-5 pb-5">
        <Navbar></Navbar>
        <HomeBanner></HomeBanner>
        <BannerDetail></BannerDetail>
      </div>
    </div>
  );
};

export default Header;
