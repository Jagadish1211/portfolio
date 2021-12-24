
import React,{useState} from "react";



function Aboutme(){

let workexp= 
            <div>
                I am a B.Tech graduate from National Institute of Technology Durgapur.I have previously worked as an Assistant Manager in TIL Ltd for about 14 months. My role was to:
                <ul>
                    <li>Supervise the assembly process</li>
                    <li>Work scheduling and handling manpower</li>
                    <li>Preparing and documenting Operating Method sheets for Assembly processes</li>
                    <li>Working with Planning department to maintain shop floor inventory and reduce delays.</li>
                    <li>Worked in a team that reduced the throughpput time of Assembly by 8%.</li>
                    <li>Modified Bill of materials to reduce costs.</li>
                </ul>
            </div>
 
 let certifications = 
     <div >
         <ol className="certificates_list">
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
 



const [select,setSelect] = useState(true)

const handleclick = function Handleclick(event){
    if (event.target.name=== "workexp_btn"){
        setSelect(true)}
    if (event.target.name=== "Certifications_btn"){
        setSelect(false)
    }
    
}



    return (
        <div>
            <div>
                <button style={select? {fontSize: "1.4rem",fontWeight:"700"}:{fontSize: "0.8rem"} } onClick={handleclick} name="workexp_btn" className="workexp_btn">
                    Work Experience
                </button>
                <button style={!select? {fontSize:"1.4rem",fontWeight:"700"}:{fontSize: "0.8rem"} } onClick={handleclick} name="Certifications_btn" className="Certifications_btn">
                    Certifications
                </button>
            </div>   
            <p>{select ? workexp: certifications}</p>
        </div>
    )
}

export default Aboutme;