import React from "react";

function Card(props){
  return(
      <li style={{listStyle: "none"}}>
        <div className="card__img-wrapper">
          <img className="card__img" src={props.imgSrc} alt={props.alt} />
        </div>
        <p className="card__description">{props.title}</p>
      </li>
  )
}
export default Card;