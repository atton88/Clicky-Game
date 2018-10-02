import React from "react";
import "./Card.css";

const Card = props => (
  <div
    className="card hvr-grow hvr-buzz-out"
    onClick={() => {
      console.log(props) //test
      props.changeState(props.id)
    }}
  >
    <div className="img-container">
      <img src={props.image} id={props.id} className="center-block"/>
    </div>
  </div>
);

export default Card;
