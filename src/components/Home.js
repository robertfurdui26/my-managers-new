import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/" className="logout">
        Log Out
      </Link>
      <div className="nav-container">
        <nav className="navbar">
          <h2 className="manager">
            Man<span>ager</span>
          </h2>
          <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Events</p>
            </li>
            <li>
              <p>Employees</p>
            </li>
          </ul>
        </nav>
      </div>

      <section className="hero">
        <div className="center">
          <h1 className="title">Month Events</h1>
          <p className="content">
            "This month salary is <br />
            on 20.04.2023"
          </p>
        </div>
      </section>

      {/*<div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src={props.item.img} alt={props.item.name} />
        <div className="property">
          <h3>{props.item.name}</h3>
          <p> {props.item.location}</p>
          <p>{props.item.city} </p>
          <p>{props.item.job}</p>
          <p>{props.item.email}</p>
        </div>
  </div>*/}

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
