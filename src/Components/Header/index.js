import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./index.css";


const Header = ({ isDark, setIsDark, cartList }) => {
    const toggleDarkMode = () => setIsDark(!isDark);
    const [isActive, setIsActive] = useState("Home");

    const navItems = ["Home", "Shop", "About", "Bag"];
    
    return (
        <nav className={`navbar navbar-expand-lg ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-white"}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <div className="d-flex gap-1 img-container"></div>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item == "Home" ? '/' : `/${item.toLowerCase()}`}
                                className={`nav-link px-3 ${isActive === item ? "text-emerald-400 fw-bold" : isDark ? "text-white" : "text-gray-700"}`}
                                onClick={() => setIsActive(item)}
                            >
                                 {item} {item === "Bag" && cartList.length > 0 && (
                                    <sup className="badge bg-danger" style={{fontSize:"9px"}}>{cartList.length}</sup>
                                )}
                            </Link>
                        ))}
                    </div>

                    <button
                        className={`btn btn-link p-2 ${isDark ? "text-white" : "text-dark"}`}
                        onClick={toggleDarkMode}
                        style={{ border: "none" }}
                    >
                        {isDark ? <MdOutlineLightMode size={20} /> : <MdDarkMode size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
