import React from "react";
import images from "../images/rrrrr.jpg";

export default function Profile(props) {
  return (
    <div>
      <div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src={props.item.img} alt={props.item.name} />
        <div className="property">
          <h3>{props.item.name}</h3>
          <h6> {props.item.location}</h6>
          <p className="props-size">{props.item.city} </p>
          <p className="props-size">{props.item.job}</p>
          <p className="props-size">{props.item.email}</p>
        </div>
      </div>
    </div>
  );
}
