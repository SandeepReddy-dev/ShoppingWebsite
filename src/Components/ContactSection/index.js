import React from "react";
import { BsTelephone, BsChatDots, BsEnvelope } from "react-icons/bs";
import "./contact.css";
const ContactSection = ({ isDark }) => {
  return (
    <div
      className="container contact-c mt-4 mb-4 text-center p-3"
      style={{
        backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
        color: isDark ? "whitesmoke" : "black",
      }}
    >
      <h2 className="mb-3 ">Contact Us</h2>
      <p className="text-muted mb-4" style={{color:isDark?"whitesmoke":"black"}}>We're here to help</p>

      <div className="row g-4">
        {/* Call Us Section */}
        <div className="col-md-4 shadow-sm ">
          <div
            className="card h-100  border-0 shadow"
            style={{
              backgroundImage: isDark 
              ? "linear-gradient(45deg, #222622, #2f5230)" 
              : "none",
              color: isDark ? "whitesmoke" : "black",
            }}
          >
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <BsTelephone className="text-success" size={24} />
              </div>
              <h5 className="card-title">Call Us</h5>
              <p className="card-text small mb-3">
                We're available Sun 7:00pm - EST, Sat
                <br />
                10:00pm EST
              </p>
              <button className="btn button m-auto btn-sm">call</button>
            </div>
          </div>
        </div>

        {/* Chat Live Section */}
        <div className="col-md-4 shadow-sm ">
          <div
            className="card h-100  border-0 shadow"
            style={{
              backgroundImage: isDark 
              ? "linear-gradient(45deg, #222622, #2f5230)" 
              : "none",
              color: isDark ? "whitesmoke" : "black",
            }}
          >
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <BsChatDots className="text-success" size={24} />
              </div>
              <h5 className="card-title">Chat Live</h5>
              <p className="card-text small mb-3">
                We're available Sun 7:00pm - EST, Friday
                <br />
                9:00pm EST
              </p>
              <button className="btn  btn-sm button">Chat now</button>
            </div>
          </div>
        </div>

        {/* Ask a Question Section */}
        <div className="col-md-4 shadow-sm ">
          <div
            className="card h-100 border-0 shadow"
            style={{
              backgroundImage: isDark 
              ? "linear-gradient(45deg, #222622, #2f5230)" 
              : "none",
              color: isDark ? "whitesmoke" : "black",
            }}
          >
            <div className="card-body text-center p-4">
              <div className="mb-3">
                <BsEnvelope className="text-success" size={24} />
              </div>
              <h5 className="card-title">Ask a Question</h5>
              <p className="card-text small mb-3">
                Fill out our form and we'll get back to you in 24 hours
              </p>
              <button className="btn button btn-sm">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
