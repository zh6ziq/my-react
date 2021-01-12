import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav style={{ backgroundColor: "yellowgreen" }}>
        <a
          href="/"
          style={{ textDecoration: "none", fontWeight: "bold", color: "white" }}
        >
          Navbar
        </a>
      </nav>
    );
  }
}

export default Navbar;
