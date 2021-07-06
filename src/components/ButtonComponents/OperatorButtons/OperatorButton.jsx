import React from "react";
//import {operators} from "../../../data.jsx";

const OperatorButton = (props) => {
console.log(props);
  return (
   <button className="op-button">{props.operator.char} </button>
  );
};
 

export default OperatorButton;