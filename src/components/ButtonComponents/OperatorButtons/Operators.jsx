import React, { useState } from "react";
import {operators} from "../../../data.jsx"
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opState, setOpState] = useState(operators);
 
  
  return (
    <div>
      {opState.map((OpButton) =>  <OperatorButton operator={OpButton}/>)}
    </div>
    
  );
};
export default Operators;