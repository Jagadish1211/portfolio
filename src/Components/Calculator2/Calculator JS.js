import React,{useState} from "react";
import './Calculator CSS.css';

function Calculatorapp() {

 const [result,setResult] = useState("");


const Clearall = ()=> {
  setResult("")
};

const Delete = ()=> {
  setResult(result.slice(0,-1))
};

const Handleclick = (event)=> {
  setResult(result.concat(event.target.name))
};

const Evaluate = ()=> {
  result.toString();
  try {
    setResult(eval(result).toString());
}
catch{
  Clearall();
  setResult(Error)
}

}
  return (
    <div className="containercal">
        <div className= "textareacal">
          <input className="inputcal" type="text" value={result}/>
        </div>
        <div className="button_area">
          <button name="Clear" onClick={Clearall} className="button clear_btn">Clear</button>
          <button name="Del"  onClick={Delete}  className="button Del">Del</button>
          <button name="/"  onClick={Handleclick}  className="button">/</button>
          <button name="7"  onClick={Handleclick}  className="button">7</button>
          <button name="8"  onClick={Handleclick}  className="button">8</button>
          <button name="9"  onClick={Handleclick}  className="button">9</button>
          <button name="*"  onClick={Handleclick}  className="button">*</button>
          <button name="4"  onClick={Handleclick}  className="button">4</button>
          <button name="5"  onClick={Handleclick}  className="button">5</button>
          <button name="6"  onClick={Handleclick}  className="button">6</button>
          <button name="-"  onClick={Handleclick}  className="button">-</button>
          <button name="1"  onClick={Handleclick}  className="button">1</button>
          <button name="2"  onClick={Handleclick}  className="button">2</button>
          <button name="3"  onClick={Handleclick}  className="button">3</button>
          <button name="+"  onClick={Handleclick}  className="button">+</button>
          <button name="0"  onClick={Handleclick}  className="button">0</button>
          <button name="."  onClick={Handleclick}  className="button">.</button>
          <button name="Ans"  onClick={Evaluate}  className="button clear_btn">Ans</button>
          
        </div>
    </div>
  );
}

export default Calculatorapp;
