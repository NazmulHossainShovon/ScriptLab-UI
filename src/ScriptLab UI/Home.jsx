import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/scriptlab">
        <Button sx={{ m: 10 }} variant="contained" color="success">
          ScriptLab UI
        </Button>
      </Link>
      <Link>
        <Button variant="contained" color="warning">
          Login Form
        </Button>
      </Link>
    </div>
  );
}
