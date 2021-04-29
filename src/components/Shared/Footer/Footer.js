import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const allService = [
    { name: "Home Delivery Service", link: "/homeDeliveryService" },
    { name: "Take Order Service", link: "/takeOrderService" },
    { name: "Online Service", link: "/onlineService" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const onlineService = [
    { name: "Online Service Any Where", link: "/emergency" },
    { name: "Online Payment Service", link: "/paymentService" },
  ];
  const HomeServices = [
    { name: "Home Delivery Any Where", link: "/emergency" },
  ];
  return (
    <footer className="footer-area clear-both bg-light">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol
            key={1}
            menuTitle={"All Services"}
            menuItems={allService}
          />
          <FooterCol
            key={2}
            menuTitle="Home Delivery Service"
            menuItems={HomeServices}
          />
          <FooterCol
            key={3}
            menuTitle="Online Service"
            menuItems={onlineService}
          />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-primary">+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright&copy; {new Date().getFullYear()} All Rights Reserved </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
