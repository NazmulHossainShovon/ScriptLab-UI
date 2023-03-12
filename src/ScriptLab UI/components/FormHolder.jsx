import React, { useState } from "react";
import "./FormHolder.css";
import Login from "./Login";
import Register from "./Register";

export default function FormHolder() {
  const [shift, setShift] = useState(false);

  return (
    <div className="form-holder">
      <div className="button-box">
        <div className={`btn ${shift && "move"}`}></div>
        <button onClick={() => setShift(false)} className="toggle-btn">
          Login
        </button>
        <button onClick={() => setShift(true)} className="toggle-btn">
          Register
        </button>
      </div>
      <Login shift={shift} />
      <Register />
    </div>
  );
}
