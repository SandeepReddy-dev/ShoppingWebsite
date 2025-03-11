import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Subscribe.css"; // Custom styles
import { VscFeedback } from "react-icons/vsc";
import { FaBell } from "react-icons/fa";



const Subscribe = () => {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center vh-50 flex-wrap border-1 ">
    <div className=" div-container d-flex flex-column align-items-center justify-content-center shadow-lg m-4 p-3">
      {/* Subscribe Text */}
      <h2 className="subscribe-text">
        JOIN US..
      </h2>

     <div className="d-flex flex-row justify-content-center align-items-center rounded-1 p-0">
      <input
        type="email"
        placeholder="Your email address"
        className="form-control email-input"
      />

      {/* Subscribe Button */}
      <button className="btn bg-emerald-400 subscribe-btn rounded-1">SUBSCRIBE <FaBell/></button>
      </div>
    </div>
    <div className=" div-container d-flex flex-column align-items-center justify-content-center shadow-lg m-4 p-3">
      {/* Subscribe Text */}
      <h2 className="subscribe-text text-center">
       Give Feedback <VscFeedback />
      </h2>

     <div className="d-flex flex-row justify-content-center align-items-center rounded-1 p-0">
      <input
        type="text"
        placeholder="Type something..!"
        className="form-control email-input"
      />

      {/* Subscribe Button */}
      <button className="btn  s-submit-btn rounded-1">SUBMIT</button>
      </div>
    </div>
    </div>
  );
};

export default Subscribe;
