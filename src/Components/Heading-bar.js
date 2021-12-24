import React from "react";
import Button from "./Button";
import logo from "../Images/logo.JPG"

function Header(){
    return (
        <div className="header">
           <img src={logo} alt=""></img> 
           <div className="headerbtn">
                <Button name="Home"/>
                <Button name="About me"/>
                <Button name="Projects"/>
                <Button name="Resume"/>
           </div>
        </div>
    )
}

export default Header;