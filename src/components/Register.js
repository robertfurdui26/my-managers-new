import React from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      userName: usernameReg,
      password: passwordReg,
    }).then((responese) => {
      console.log(responese);
    });
  };

  return (
    <div className="form">
      <div className="registration">
        <h1>Registration</h1>
        <label>UserName</label>
        <input type="text" placeholder="Your name.." />

        <label>Password</label>
        <input type="text" placeholder="Password..." />
        <button
          className="submit"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        >
          Register
        </button>
      </div>

      <div className="login">
        <h1>LogIn</h1>
        <input type="text" placeholder="UserName..." />
        <input type="text" placeholder="Password..." />
        <Link className="submit" to="/home">
          Log In
        </Link>
      </div>
    </div>
  );
}
