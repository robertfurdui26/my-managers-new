import React from "react";

export default function Profile(props) {
  return (
    <div>
      <div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src={props.item.img} alt={props.item.name} />
        <div className="property">
          <h3>{props.item.name}</h3>
          <h6> {props.item.location}</h6>
          <h6>{props.item.city} </h6>
          <h6>{props.item.job}</h6>
          <h6>{props.item.email}</h6>
        </div>
      </div>
    </div>
  );
}
