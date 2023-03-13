import React from "react";
import FormInput from "./inputs/form-input";
import "./Register.css";

export default function Register({ ...props }) {
  return (
    <div className={`initial-register ${props.shift && "later-register"}`}>
      <FormInput label="User Name" />
      <FormInput label="Email ID" />
      <FormInput label="Password" />
    </div>
  );
}
