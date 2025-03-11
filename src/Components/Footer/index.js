import React from "react";
import "./index.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
const onLineShopping = [
  "Men",
  "Women",
  "Kids",
  "Home & Living",
  "Beauty",
  "Gift Cards",
];
const customerPolicy = [
  "Contact Us",
  "FAQ",
  "T&C",
  "Terms Of Use",
  "Track Orders",
  "Shipping",
  "Cancellation",
  "Returns",
  "Privacy Policy",
  "Grievance Redressal",
];

const Footer = ({ isDark }) => {
  return (
    <footer
      className="footer-container"
      style={{
        backgroundColor: isDark ? "#1f1f1f" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <div className="footer-section">
        <h4>ONLINE SHOPPING</h4>
        <ul >
          
          {onLineShopping.map(eachitem=>(
            <li className="list-elements">{eachitem}</li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h4>CUSTOMER POLICIES</h4>
        <ul>
          {customerPolicy.map(eachitem=>(
            <li className="list-elements">{eachitem}</li>
          ))}
        </ul>
      </div>

      <div className="footer-section">
        <h4>EXPERIENCEAPP ON MOBILE</h4>
        <div className="app-links">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            style={{height:"45px", width:"150px",borderRadius:"5px"}}
          />
          <img
            src="https://i.pinimg.com/736x/21/de/91/21de91c2d0b0a31174d2b1318e667499.jpg"
            alt="App Store"
            style={{height:"45px", width:"150px",borderRadius:"5px"}}
          />
        </div>
        <h4>KEEP IN TOUCH</h4>
        <div className="social-icons d-flex flex-row justify-content-start align-content-start gap-2 fs-3">
        <FaInstagram/> <FaYoutube/> <FaFacebookF/> <FaTwitter/>
        </div>
      </div>

      <div className="footer-guarantees">
        <p>
          <strong>100% ORIGINAL</strong> guarantee for all products at
          myntra.com
        </p>FaYoutube
        <p>
          <strong>Return within 14 days</strong> of receiving your order
        </p>
      </div>
    </footer>
  );
};

export default Footer;
