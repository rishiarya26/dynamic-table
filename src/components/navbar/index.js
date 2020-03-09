import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link className="active" to="/">
            Dashboard
          </Link>
        </li>
      </ul>
    </>
  );
}
