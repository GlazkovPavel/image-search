import React from "react";

function Input(props){
  return(
      <input onChange={props.onChange} className="input__container" />
  )
}
export default Input;