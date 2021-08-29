import React from "react";
import {Link} from "react-router-dom";

function Card(props){
  return(
      <Link to={`/photos/${props.id}`} style={{textDecoration: "none"}}>
        <li style={{listStyle: "none"}}>
          <div className="card__img-wrapper">
            <img className="card__img" src={props.imgSrc} alt={props.alt} />
          </div>
          <p className="card__description">{props.title}</p>
        </li>
      </Link>

  )
}
export default Card;