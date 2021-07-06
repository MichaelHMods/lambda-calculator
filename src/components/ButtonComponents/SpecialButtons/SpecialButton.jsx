import React from "react";

const SpecialButton = (props) => {
  console.log(props)
  return (
    <>
      <button className="special-button">{props.text2}</button>
    
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};


export default SpecialButton;