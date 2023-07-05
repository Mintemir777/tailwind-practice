import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { BrowserRouter as Router } from "react-router-dom";
export default function MyRoutes() {
  return (
    <Router>
      <li className="mx-4 my-6 md:my-0 md:mt-1">
        <NavLink
          to="/"
          end
          className="text-x1 hover:text-orange-700 duration-500"
        >
          HOME
        </NavLink>
      </li>

      <li className="mx-4 my-6 md:my-0 md:mt-1">
        <NavLink
          to="/about"
          end
          className="text-x1 hover:text-orange-700 duration-500"
          mt-1
        >
          ABOUT
        </NavLink>
      </li>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFBD87",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          marginLeft: "1rem",
          marginRight: "1rem",
          borderRadius: "0.25rem",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ed8936",
            color: "#ffffff",
          },
        }}
      >
        Sponsor Us
      </Button>
    </Router>
  );
}
