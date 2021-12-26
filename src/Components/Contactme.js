import React ,{useState,useEffect} from "react";
import {AiFillLinkedin} from "react-icons/ai"
import {SiGmail} from "react-icons/si"


function Contact(){
    return(
        <div className="contact-links">
            <p>Contact:</p>
            <a href="https://www.linkedin.com/in/pemme-jagadish-24b16a142/"><AiFillLinkedin /> </a>   
            <a href="mailto: mrjagadish1211@gmail.com"><SiGmail /></a>
            
        </div>
    )
}

export default Contact;