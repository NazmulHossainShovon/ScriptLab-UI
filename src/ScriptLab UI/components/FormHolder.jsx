import { FacebookRounded, Google, Twitter } from "@mui/icons-material";
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
      <div className="social-icon-holder">
        <FacebookRounded sx={{ color: "orange", m: 1 }} />
        <Twitter sx={{ color: "orange", m: 1 }} />
        <Google sx={{ color: "orange", m: 1 }} />
      </div>
      <div className="two-forms">
        <Login shift={shift} />
        <Register shift={shift} />
      </div>
    </div>
  );
}
