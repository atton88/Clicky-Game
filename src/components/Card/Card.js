import React from "react";
import "./Card.css";

// Renders card from prop
const Card = props => (
  <div
    className="card hvr-grow hvr-buzz-out"
    
    // on click function, runs changeState function with id from props. changeState function is located in container component
    onClick={() => {
      // console.log(props) //test
      props.changeState(props.id)
    }}
  >
    <div className="img-container">
      <img src={props.image} id={props.id} className="center-block"/>
    </div>
  </div>
);

export default Card;
