import React from "react";
import Button from "./Button";
import logo from "../Images/logo.JPG"

function Header(){
    return (
        <div className="header">
           <img src={logo} alt=""></img>
           <Button />
           <Button />
           <Button />
           <Button />
        </div>
    )
}

export default Header;