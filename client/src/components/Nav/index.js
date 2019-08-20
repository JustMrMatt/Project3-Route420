import React from "react";
// import UserContext from "../../utils/userContext";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/locations">
        Locations
      </a>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <a className="navbar-brand" href="/user">
        Account
      </a>
    </nav>
    )
}

export default Nav;
