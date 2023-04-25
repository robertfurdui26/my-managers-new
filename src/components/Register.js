import React from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:5000/register", {
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
        <input
          type="text"
          placeholder="Your name.."
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />

        <label>Password</label>
        <input
          type="text"
          placeholder="Password..."
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button className="submit" onClick={register}>
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
