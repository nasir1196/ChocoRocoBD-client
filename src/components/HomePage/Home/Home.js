import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import FooterSection from "../FooterSection/FooterSection";
import Header from "../Header/Header";
import OverView from "../OverView/OverView";
import Service from "../ProductCategories/Service/Service";
import Repotation from "../Repotation/Repotation";

const Home = () => {
  return (
    <div>
      <Header />
      <Service />
      <Repotation />
      <CustomerReview />
      <OverView />
      <FooterSection />
    </div>
  );
};

export default Home;
