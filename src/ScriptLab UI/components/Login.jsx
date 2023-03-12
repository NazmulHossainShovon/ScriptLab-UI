import React from "react";
import FormInput from "./inputs/form-input";
import "./Login.css";

export default function Login({ ...props }) {
  return (
    <div className={props.shift ? "move-login" : "come-back"}>
      <FormInput label="User Name" />
      <FormInput label="Enter Password" />
    </div>
  );
}
