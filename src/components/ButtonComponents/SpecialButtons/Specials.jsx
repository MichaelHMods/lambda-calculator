import React, { useState } from "react";
import {specials} from "../../../data.jsx";
import SpecialButtons from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  console.log(specials)
  const [specState, setSpecState ] = useState(specials)
  console.log(specState)
  return (
    <div>
       {specState.map((SpecButton,index) => <SpecialButtons key= {index} text2={SpecButton}/>)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Specials;