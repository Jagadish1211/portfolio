
import React,{useState} from "react";



function Aboutme(){

let itskills = 
        <div>
            I am a graduate of NIT Durgapur with expertise in Python, JavaScript, ReactJs and NodeJs. 
            <ul>
                <li>Can create fully responsive websites using frontend codebases like HTML, CSS, JavaScript</li>
                <li>Good knowledge of ReactJs framework.</li>
                <li>Can make web pages interactive using CSS and React hooks.</li>
                <li>Good knowledge of Python and basic Data Structures</li>
                <li>Working knowledge of NodeJs, MongoDB</li>
            </ul>
        </div>

    
let workexp= 
            <div>
                I have previously worked as an Assistant Manager in TIL Ltd for about 14 months. My role was to:
                <ul>
                    <li>Supervise assembly, schedule work and handle manpower.</li>
                    <li>Preparing and documenting Operating Method sheets for Assembly processes</li>
                    <li>Working with Planning department to maintain shop floor inventory and reduce delays.</li>
                    <li>Worked in a team that reduced the throughpput time of Assembly by 8%.</li>
                    <li>Modified Bill of materials to reduce costs.</li>
                </ul>
            </div>
 
 let certifications = 
     <div  className="certificates_list">
         <ol>
            <li>
             Programming for Everybody (Getting Started with Python) - Coursera
            </li>
            <li>
             Python Data Structures - Coursera
            </li>
            <li>
             The Complete 2022 Web Development Bootcamp - Udemy
            </li>
            
         </ol>
     </div>
 



const [select,setSelect] = useState(1)
const [tab,setTab] =  useState(itskills)

const handleclick = function Handleclick(event){
    if (event.target.name=== "ITskills_btn"){
        setSelect(1)
        setTab(itskills)
    }
    if (event.target.name=== "Certifications_btn"){
        setSelect(2)
        setTab(certifications)
    }
    if (event.target.name=== "workexp_btn"){
        setSelect(3)
        setTab(workexp)
    }
    } 




    return (
        <div>
            <div className="Abtme_btn">
                <button style={select===1? {transform:"scale(1.1)",fontWeight:"700"}: {transform:"scale(0.8)" }} onClick={handleclick} name="ITskills_btn" className="ITskills_btn">
                    Skills
                </button>
                <button style={select===2? {transform:"scale(1.1)",fontWeight:"700"}:{transform:"scale(0.8)" }} onClick={handleclick} name="Certifications_btn" className="Certifications_btn">
                    Certifications
                </button>
                <button style={select===3? {transform:"scale(1.1)",fontWeight:"700"}: {transform:"scale(0.8)" }} onClick={handleclick} name="workexp_btn" className="workexp_btn">
                    Other Experience
                </button> 
            </div>   
            <p>{tab}</p>
        </div>
    )
}

export default Aboutme;