import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import FormInput from "./inputs/form-input";
import "./Login.css";

export default function Login({ ...props }) {
  return (
    <div className={`come-back ${props.shift && "move-login"}`}>
      <FormInput label="User Name" />
      <FormInput label="Enter Password" />
      <FormControlLabel
        control={<Checkbox color="warning" />}
        label="Remember Password"
      />
    </div>
  );
}
