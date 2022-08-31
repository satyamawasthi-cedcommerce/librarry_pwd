import React from "react";
import { Link } from "react-router-dom";
// header component added to every page
export default function Header() {
  return (
    <div>
      <div className="navDiv">
        <img src="./1.png" alt="..." style={{ width: "8%" }} />
        <h3>
          {" "}
          <i className="fa-solid fa-house-chimney"></i>
          <Link to="/" style={{ color: "#faf3e3", textDecoration: "none" }}>
            Home
          </Link>{" "}
        </h3>
        <h3>
          <i className="fa-solid fa-address-card"></i>{" "}
          
            Authors
         
        </h3>
        <h3>
          {" "}
          <i className="fa-solid fa-book-bookmark"></i> Books
        </h3>
        <h3>
          {" "}
          <i className="fa-solid fa-user-plus"></i> Be a member
        </h3>
      </div>
    </div>
  );
}
