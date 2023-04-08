import React from "react";
import round from "../images/rrrrr.jpg";

export default function Profile() {
  return (
    <div>
      <div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src={round} alt="user" />
        <div className="props">
          <h3>Ricky Park</h3>
          <h6> Location: America</h6>
          <p>City:New York </p>
          <p>Salary :$5000 /month</p>
          <p>Job: Engineer</p>
          <p>Email: ricky_park@yahoo.com</p>
        </div>
      </div>
    </div>
  );
}
