import React from "react";
import "./Header.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Header = props => (
  <nav className="navbar navbar-light bg-primary h1">
    <div className="row pt-0">
      <div className="col-md-4">
        <p className="navbar-brand mb-0 h1">Clicky Game</p>
      </div>
      <div className="col-md-4">
        <p className="navbar-brand mb-0 h1">{props.message}</p>
      </div>
      <div className="col-md-4">
        <p className="navbar-brand mb-0 h1">Score: {props.score} </p>
        <p className="navbar-brand mb-0 h1">High Score: {props.highScore}</p>

      </div>
    </div>
  </nav>
);

export default Header;
