import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ScriptLab from "./ScriptLab.jsx";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scriptlab" element={<ScriptLab />} />
    </Routes>
  );
}
