import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

import './index.css'
const Notification = ({ notification ,isDark}) => {
    if (!notification) return null;
    
    return (
        <div className="notification-c">
            <div  className="rounded-1" style={{ position: "relative", width: "100%" ,backgroundColor:isDark?"#1a1a1a":"white",border: `2px solid ${notification === "added" ? "green" : "red"}`,}}>
                <p className=" m-2 shadow" style={{color:isDark?"white":"black"}}>
                    {notification === "added" ? "Item Added to Cart" : " Item Removed from Cart"}
                </p>
                <div className={`loading-c  ${notification === "added" ? "bg-success" : "bg-danger"}`}/>
            </div>
        </div>
    );
};

export default Notification;