import React from "react";
import images from "../images/events back.jpg";

function Events() {
  return (
    <section className="hero">
      <img src={images} alt="hero" className="hero-photo" />
      <div className="center">
        <h1 className="title">Month Events</h1>
        <p className="content">
          "This month salary is <br />
          on 20.04.2023"
        </p>
      </div>
    </section>
  );
}

export default Events;
