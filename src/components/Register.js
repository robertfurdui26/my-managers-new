import React from "react";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="form">
      <div className="registration">
        <h1>Registration</h1>
        <label>UserName</label>
        <input type="text" placeholder="Your name.." />

        <label>Password</label>
        <input type="text" placeholder="Password..." />
        <Link className="submit" to="/home">
          Register
        </Link>
      </div>

      <div className="login">
        <h1>LogIn</h1>
        <input type="text" placeholder="UserName..." />
        <input type="text" placeholder="Password..." />
        <input type="submit" value="LogIn"></input>
      </div>
    </div>
  );
}
