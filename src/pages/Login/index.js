import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="maindivlogin">
      <div className="mainlogindiv">
        <div className="mainlogindiv-1">
          <p>Student Login</p>
        </div>
        <div className="imglogoiskillers">
          <img src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/colorlogo-01.png?alt=media&token=27dd4249-7e3e-4a78-a1f7-814cb689d254" />
        </div>
        <div className="_inputDiv">
          <input
            type="email"
            className="_input"
            name="email"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="_inputDiv">
          <input
            type="password"
            className="_input"
            name="Password"
            placeholder="Enter Password"
          />
        </div>

        <div className="linkname">
          <div className="linkname1">
            <div class="_text">
              Not a member? <a className="a"  onClick={() => navigate("/Signup")}>Signup</a>
            </div>
            <div class="_text">Forgot password</div>
          </div>
        </div>
        <div className="btndivlogin">
            <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
