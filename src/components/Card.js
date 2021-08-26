import React from "react";
import {Link} from "react-router-dom";

function Card(props){
  return(
      <Link to={`/image-search/photos/${props.id}`}>
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