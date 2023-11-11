import React from "react";
import Button from "@mui/material/Button";
export default function MyRoutes() {
  return (
    <ul  className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

      <li className="mx-4 my-6 md:my-0 md:mt-1">
        <a
          href="/"
          className="text-x1 hover:text-orange-700 duration-500"
          >
          HOME
        </a>
      </li>

      <li className="mx-4 my-6 md:my-0 md:mt-1">
        <a
          href="/about"
          className="text-x1 hover:text-orange-700 duration-500"
          mt-1
          >
          ABOUT
        </a>
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
        </ul>
  );
}