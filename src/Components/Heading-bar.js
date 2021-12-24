import React from "react";
import Button from "./Button";
import logo from "../Images/logo.JPG"

function Header(){
    return (
        <div className="header">
           <img src={logo} alt=""></img> 
           <div className="headerbtn">
                <a href="#" > Home </a>
                <a href="#" > About Me </a>
                <a href="#" > Projects </a>
                <a href="#" > Resume </a>
           </div>
        </div>
    )
}

export default Header;