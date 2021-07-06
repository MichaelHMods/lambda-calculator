import React, { useState } from "react";
import {numbers} from "../../../data.jsx";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file



const Numbers = () => {

  const [numberState, setNumberState] = useState(numbers);

  // STEP 2 - add the imported data to state
  return (
    <div>
      {numberState.map((NumButton, index) => <NumberButton key= {index} text={NumButton}/> )}
    </div>
  );
};
export default Numbers;