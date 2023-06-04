import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={navBarStyle}>
        <img
          src="./download-removebg-preview.png"
          style={{
            margin: "0",
            fontSize: "36px",
            padding: "10px",
            color: "white",
            width: "120px",
          }}
        ></img>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "20px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
      </div>
    );
  }
}

export default Navbar;

const navBarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 50px",
  backgroundColor: "#b2b2b2",
};
