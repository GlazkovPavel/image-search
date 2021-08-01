import React from "react";

function Button(props){
  return(
   <button onClick={props.onSearch} className="button">Поиск</button>
  )
}

export default Button;